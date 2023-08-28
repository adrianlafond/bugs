import { Angle, Point, Vector } from '@adrianlafond/geom'
import easings from 'easings.net'
import { Leg } from './leg'
import { Segment, SegmentData } from './segment'
import { BugOptions, BugRender, BugSide, StageRect } from './bug.types'
import { Defaults, getDefaults } from './bug.defaults'

export class Bug {
  private activeSide: Required<BugOptions>['activeSide']

  private stepProgress = 0
  private stepMs = 0
  private readonly millisecondsPerStep: number
  private readonly maxStepPx: number
  private readonly jointOffset: number

  private readonly segments: Segment[]

  private readonly target: Vector
  private readonly repulsionPx: number
  private readonly maxJigglePx: number
  private readonly maxDistractionPx: number

  private readonly current: BugRender
  private readonly stepTarget: Vector = new Vector()
  private readonly timingFunction: Required<BugOptions>['timingFunction']

  private readonly listeners: {
    targetReached: Array<(bugRender: BugRender) => void>
  } = {
      targetReached: []
    }

  constructor (options?: BugOptions) {
    const defaults = getDefaults()
    this.activeSide = options?.activeSide ?? defaults.activeSide
    this.millisecondsPerStep = options?.millisecondsPerStep ?? defaults.millisecondsPerStep
    this.maxStepPx = options?.maxStepPx ?? defaults.maxStepPx
    this.jointOffset = options?.jointOffset ?? defaults.jointOffset
    this.repulsionPx = options?.repulsionPx ?? defaults.repulsionPx
    this.maxJigglePx = options?.maxJigglePx ?? defaults.maxJigglePx
    this.maxDistractionPx = options?.maxDistractionPx ?? defaults.maxDistractionPx
    this.timingFunction = options?.timingFunction ?? defaults.timingFunction
    this.segments = this.createSegments(defaults, options?.position, options?.segments, options?.stageRect)
    this.target = options?.target ?? defaults.target
    this.current = {
      activeSide: this.activeSide,
      segments: this.segments.map(segment => segment.data),
      target: this.target.point
    }
    this.updateBug({ deltaMs: this.millisecondsPerStep })
  }

  /**
   * Commands the bug to move. Takes one arg, the number of milliseconds that
   * have passed since the last movement, so that progress can be calculated.
   */
  tick ({
    deltaMs = 0,
    stageRect
  }: {
    deltaMs?: number
    stageRect?: StageRect
  }): BugRender {
    const progress = this.stepMs / this.millisecondsPerStep
    this.stepProgress = easings[this.timingFunction](progress)

    this.updateBug({ deltaMs, stageRect })

    if (Point.distance(this.target.point, this.segments[0].position.point) < this.maxStepPx + this.repulsionPx) {
      const bugRender = this.getRender()
      this.listeners.targetReached.forEach(fn => fn(bugRender))
    }

    return this.getRender()
  }

  on (event: 'targetReached', fn: (bugRender: BugRender) => void): void {
    if (!this.listeners[event].includes(fn)) {
      this.listeners[event].push(fn)
    }
  }

  off (event: 'targetReached', fn: (bugRender: BugRender) => void): void {
    const index = this.listeners[event].findIndex(item => item === fn)
    if (index !== -1) {
      this.listeners[event].splice(index, 1)
    }
  }

  /**
   * Allows the target Point that the bug walks towards to be updated.
   */
  updateTarget (value: Point): void {
    this.target.x = value.x
    this.target.y = value.y
  }

  /**
   * Returns a BugRender object with the all the data needed to draw a skin.
   */
  private getRender (): BugRender {
    return {
      activeSide: this.activeSide,
      segments: this.getSegmentsData(),
      target: this.target.point
    }
  }

  private getSegmentsData (): SegmentData[] {
    return this.segments.map(segment => segment.data)
  }

  /**
   * Transforms a `BugOptions['segments']` object into actual Segments, all
   * offset by a BugOptions['position'] vector for the starting coordinates, and
   * returns it.
   */
  private createSegments (
    defaults: Defaults,
    positionOption?: BugOptions['position'],
    segmentOptions?: BugOptions['segments'],
    stageRect?: BugOptions['stageRect']
  ): Segment[] {
    const position = positionOption ?? new Vector(
      (stageRect != null) ? stageRect.x + Math.random() * stageRect.width : 0,
      (stageRect != null) ? stageRect.y + Math.random() * stageRect.height : 0,
      Math.random() * Math.PI * 2
    )
    const segments = (segmentOptions != null) ? segmentOptions : defaults.segments
    return segments.map(segment => new Segment(position, segment))
  }

  private updateBug ({
    deltaMs,
    stageRect
  }: {
    deltaMs: number
    stageRect?: StageRect
  }): void {
    const repulusionRect = (stageRect != null)
      ? {
          x: stageRect.x + this.repulsionPx,
          y: stageRect.y + this.repulsionPx,
          width: stageRect.width - this.repulsionPx * 2,
          height: stageRect.height - this.repulsionPx * 2
        }
      : stageRect
    this.updateAllSegments(repulusionRect)
    this.updateStepProgress(deltaMs)
  }

  /**
   * Adds elapsed milliseconds to the already elapsed milliseconds of the
   * current step so that current step progress can be calculated. When the
   * current step progress exceeds the max step progress, then the step progress
   * is reset, the active stepping side is toggled, and the current bug state is
   * copied for use in calculations.
   */
  private updateStepProgress (deltaMs: number): void {
    this.stepMs = Math.min(this.millisecondsPerStep, this.stepMs + deltaMs)
    if (this.stepMs >= this.millisecondsPerStep) {
      this.stepMs = 0
      this.activeSide = this.activeSide === 'left' ? 'right' : 'left'
      this.current.segments = this.getSegmentsData()

      // Set the target for the next step:
      this.updateTargetRadians()
    }
  }

  /**
   * Calculates the angle towards which bug should take during the next step.
   */
  private updateTargetRadians (): void {
    this.stepTarget.x = this.target.x + Math.random() * this.maxDistractionPx - this.maxDistractionPx * 0.5
    this.stepTarget.y = this.target.y + Math.random() * this.maxDistractionPx - this.maxDistractionPx * 0.5

    const currentHead = this.current.segments[0].position
    this.stepTarget.radians = Math.atan2(this.stepTarget.y - currentHead.y, this.stepTarget.x - currentHead.x) +
      Math.PI * 0.5
    this.stepTarget.radians = Angle.normalize(this.stepTarget.radians)
    const maxTurnRadians = Math.PI * 0.25

    // Calculate the delta between the bug's current angle and the target
    // angle so that it can be constrained; i.e., prevent the bug from turning
    // too far in a single step.
    let delta = Angle.normalize(this.stepTarget.radians) - Angle.normalize(currentHead.radians)

    if (Math.abs(delta) > Math.PI) {
      // If delta is > half a semi-circle, then the shortest turn is in the
      // opposite direction.
      delta = Angle.normalize(currentHead.radians) - Angle.normalize(this.stepTarget.radians)
    }

    const fullCircle = Math.PI * 2
    if (Math.abs(delta) > Math.PI) {
      // If delta is still > Math.PI then it is because delta is flipping back
      // and forth over zero/6.28.
      if (delta < 0) {
        const cr = currentHead.radians + fullCircle
        delta = this.stepTarget.radians - cr
      } else if (delta > 0) {
        const tr = this.stepTarget.radians + fullCircle
        delta = tr - currentHead.radians
      }
    }

    if (delta > maxTurnRadians) {
      this.stepTarget.radians = currentHead.radians + maxTurnRadians
    } else if (delta < -maxTurnRadians) {
      this.stepTarget.radians = currentHead.radians - maxTurnRadians
    }
  }

  private updateAllSegments (stageRect?: StageRect): void {
    let leadPosition: Vector
    this.segments.forEach((segment, index) => {
      if (index === 0) {
        this.updateHead(segment, this.current.segments[index], stageRect)
      } else {
        this.updateSegment(segment, this.current.segments[index], leadPosition, stageRect)
      }
      leadPosition = segment.position
    })
  }

  private updateHead (segment: Segment, currentSegment: SegmentData, stageRect?: StageRect): void {
    const currentPosition = currentSegment.position
    segment.position.radians = Angle.interpolate(
      currentPosition.radians,
      this.stepTarget.radians,
      Math.min(1, this.stepProgress)
    )

    segment.position.x = currentPosition.x +
      Math.max(-this.maxStepPx, Math.min(this.maxStepPx, this.stepTarget.x - currentPosition.x)) *
      this.stepProgress +
      Math.random() * this.maxJigglePx - this.maxJigglePx * 0.5
    segment.position.y = currentPosition.y +
      Math.max(-this.maxStepPx, Math.min(this.maxStepPx, this.stepTarget.y - currentPosition.y)) *
      this.stepProgress +
      Math.random() * this.maxJigglePx - this.maxJigglePx * 0.5

    if (stageRect != null) {
      segment.position.x = Math.max(
        stageRect.x,
        Math.min(stageRect.x + stageRect.width, segment.position.x))
      segment.position.y = Math.max(
        stageRect.y,
        Math.min(stageRect.y + stageRect.height, segment.position.y))
    }

    this.updateLegsPerSegment(segment, currentSegment, stageRect)
  }

  private updateSegment (segment: Segment, currentSegment: SegmentData, leadPosition: Vector, stageRect?: StageRect): void {
    // 1 calculate ideal x, y, radians
    const offsetRadians = leadPosition.radians + Math.PI * 0.5
    const ideal: Vector = new Vector(
      leadPosition.x + Math.cos(offsetRadians) * segment.maxDistance,
      leadPosition.y + Math.sin(offsetRadians) * segment.maxDistance,
      leadPosition.radians
    )

    // 2 calculate max progress within ideal path
    const idealDistance = Point.distance(ideal.point, segment.position.point)
    const dampedDistance = idealDistance * 0.02
    const dampedRadians = Math.atan2(ideal.y - segment.position.y, ideal.x - segment.position.x)
    const dx = segment.position.x + Math.cos(dampedRadians) * dampedDistance
    const dy = segment.position.y + Math.sin(dampedRadians) * dampedDistance

    const leadRadians = Math.atan2(dy - leadPosition.y, dx - leadPosition.x)
    segment.position.x = leadPosition.x + Math.cos(leadRadians) * segment.maxDistance +
      Math.random() * this.maxJigglePx - this.maxJigglePx * 0.5
    segment.position.y = leadPosition.y + Math.sin(leadRadians) * segment.maxDistance +
      Math.random() * this.maxJigglePx - this.maxJigglePx * 0.5

    segment.position.radians = Math.atan2(
      leadPosition.y - segment.position.y,
      leadPosition.x - segment.position.x) + Math.PI * 0.5

    this.updateLegsPerSegment(segment, currentSegment, stageRect)
  }

  private updateLegsPerSegment (segment: Segment, currentSegment: SegmentData, stageRect?: StageRect): void {
    (['left', 'right'] as BugSide[]).forEach(side => {
      segment.legs[side].forEach((leg, legIndex) => {
        this.updateLeg(segment.position, leg, currentSegment.legs[side][legIndex], leg.socketIndex, stageRect)
        if (side === this.activeSide) {
          this.updateLeg(segment.position, leg, currentSegment.legs[side][legIndex], leg.clawIndex, stageRect)
        }
        if (leg.clawIndex > 1) {
          const socketPoint = leg.getLiveJoint(leg.socketIndex).point
          const clawPoint = leg.getLiveJoint(leg.clawIndex).point

          const radians = Math.atan2(socketPoint.y - clawPoint.y, socketPoint.x - clawPoint.x) - Math.PI * 2
          const length = Point.distance(leg.getModelJoint(0), leg.getModelJoint(2))
          const offset = length * this.jointOffset

          leg.updateLiveJoint(1, new Vector(
            (socketPoint.x + clawPoint.x) * 0.5 - Math.cos(radians) * offset,
            (socketPoint.y + clawPoint.y) * 0.5 + Math.sin(radians) * offset
          ))
        }
      })
    })
  }

  private updateLeg (segmentPosition: Vector, leg: Leg, currentLeg: Vector[], index: number, stageRect?: StageRect): void {
    const joint = leg.getModelJoint(index)
    const radius = Point.distance(segmentPosition.point, segmentPosition.point.subtract(joint))
    const targetRadians = Math.atan2(joint.y, joint.x) + segmentPosition.radians
    const radians = Angle.interpolate(
      currentLeg[index].radians,
      targetRadians,
      Math.min(1, this.stepProgress)
    )
    const updatedPoint = new Point(
      Math.cos(radians) * radius + segmentPosition.x,
      Math.sin(radians) * radius + segmentPosition.y
    )
    if (stageRect != null) {
      updatedPoint.x = Math.max(stageRect.x, Math.min(stageRect.x + stageRect.width, updatedPoint.x))
      updatedPoint.y = Math.max(stageRect.y, Math.min(stageRect.y + stageRect.height, updatedPoint.y))
    }

    leg.updateLiveJoint(index, new Vector(updatedPoint, radians))
  }
}
