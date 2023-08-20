import { Angle, Point, Vector } from '@adrianlafond/geom'
import easings from 'easings.net'
import { Leg } from './leg'
import { Segment, SegmentData } from './segment';

export type BugSide = 'left' | 'right'
export type BugTimingFunction =
  | 'linear'
	| 'easeInQuad'
	| 'easeOutQuad'
	| 'easeInOutQuad'
	| 'easeInCubic'
	| 'easeOutCubic'
	| 'easeInOutCubic'
	| 'easeInQuart'
	| 'easeOutQuart'
	| 'easeInOutQuart'
	| 'easeInQuint'
	| 'easeOutQuint'
	| 'easeInOutQuint'
	| 'easeInSine'
	| 'easeOutSine'
	| 'easeInOutSine'
	| 'easeInExpo'
	| 'easeOutExpo'
	| 'easeInOutExpo'
	| 'easeInCirc'
	| 'easeOutCirc'
	| 'easeInOutCirc'
	| 'easeInBack'
	| 'easeOutBack'
	| 'easeInOutBack'
	| 'easeInElastic'
	| 'easeOutElastic'
	| 'easeInOutElastic'
	| 'easeInBounce'
	| 'easeOutBounce'

export { SegmentData }
export interface BugRender {
  activeSide: BugSide
  segments: SegmentData[]
  target: Point
}

export interface StageRect {
  x: number
  y: number
  width: number
  height: number
}

export interface BugOptionsSegmentLegs {
  left: Point[][]
  right: Point[][]
}

export interface BugOptionsSegment {
  position: Point
  legs?: BugOptionsSegmentLegs
}

export interface BugOptions {
  /**
   * Whether the bug starts its left legs moving or its right. Default is left.
   */
  activeSide?: 'left' | 'right'

  /**
   * Milliseconds each step takes to complete. Default is 250.
   */
  millisecondsPerStep?: number

  /**
   * The maximum distance in pixels that the bug can progress per step. Default
   * is 16.
   */
  maxStepPx?: number

  /**
   * Position and direction on the stage where the lead segment of the bug
   * starts. Default is 0, 0, 0.
   */
  position?: Vector

  /**
   * Position of the segments of the bug relative to each other. Each segment
   * can have its own sets of legs. Default is a single segment at (0, 0) with
   * 3 legs on each side.
   */
  segments?:  BugOptionsSegment[]

  /**
   * Percent offset from distance between socket and claw that the joint
   * (comparable to an elbow or knee) should offset (or bent). Default is 0.25.
   */
  jointOffset?: number

  /**
   * The distance the bug stays away from the target and the edges of the stage.
   * Useful if the bug's skin is wide. Default is 0.
   */
  repulsionPx?: number

  /**
   * Random jiggling applied on each time tick. A small number will make the bug
   * look smooth; a large number is will make it look like a spaz. Default is 3.
   */
  maxJigglePx?: number

  /**
   * Random distraction in the target per each step. A large number will lead
   * the bug in strange directions with each step, although the end target will
   * not be forgotten. Default is 24.
   */
  maxDistractionPx?: number

  /**
   * Timing function to ease the step motion. Default is easeOutCubic.
   */
  timingFunction?: BugTimingFunction

  /**
   * The target coordinates towards which the bug should direct itself.
   */
  target?: Vector
}

const defaults: Required<BugOptions> = {
  activeSide: 'left',
  millisecondsPerStep: 250,
  maxStepPx: 16,
  position: new Vector(),
  segments: [{
    position: new Point(),
    legs: {
      left: [[
        new Point(-9, 0),
        new Point(-18, -15)
      ], [
        new Point(-9, 2),
        new Point(-20, -2)
      ], [
        new Point(-9, 4),
        new Point(-16, 8)
      ]],
      right: [[
        new Point(9, 0),
        new Point(18, -15)
      ], [
        new Point(9, 2),
        new Point(20, -2)
      ], [
        new Point(9, 4),
        new Point(16, 8)
      ]]
    },
  }],
  jointOffset: 0.25,
  repulsionPx: 0,
  maxJigglePx: 3,
  maxDistractionPx: 24,
  timingFunction: 'easeOutCubic',
  target: new Vector()
}

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
    this.activeSide = options?.activeSide ?? defaults.activeSide
    this.millisecondsPerStep = options?.millisecondsPerStep ?? defaults.millisecondsPerStep
    this.maxStepPx = options?.maxStepPx ?? defaults.maxStepPx
    this.jointOffset = options?.jointOffset ?? defaults.jointOffset
    this.repulsionPx = options?.repulsionPx ?? defaults.repulsionPx
    this.maxJigglePx = options?.maxJigglePx ?? defaults.maxJigglePx
    this.maxDistractionPx = options?.maxDistractionPx ?? defaults.maxDistractionPx
    this.timingFunction = options?.timingFunction ?? defaults.timingFunction
    this.segments = this.createSegments(options?.position, options?.segments)
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

  private getSegmentsData(): SegmentData[] {
    return this.segments.map(segment => segment.data)
  }

  /**
   * Transforms a `BugOptions['segments']` object into actual Segments, all
   * offset by a BugOptions['position'] vector for the starting coordinates, and
   * returns it.
   */
  private createSegments(positionOption?: BugOptions['position'], segmentOptions?: BugOptions['segments']): Segment[] {
    const position = positionOption ?? new Vector()
    const segments = segmentOptions || defaults.segments

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
    this.updateHead(repulusionRect)
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

  private updateHead (stageRect?: StageRect): void {
    const head = this.segments[0].position
    const currentHead = this.current.segments[0].position
    head.radians = Angle.interpolate(
      currentHead.radians,
      this.stepTarget.radians,
      Math.min(1, this.stepProgress)
    )

    head.x = currentHead.x +
      Math.max(-this.maxStepPx, Math.min(this.maxStepPx, this.stepTarget.x - currentHead.x)) *
      this.stepProgress +
      Math.random() * this.maxJigglePx - this.maxJigglePx * 0.5
    head.y = currentHead.y +
      Math.max(-this.maxStepPx, Math.min(this.maxStepPx, this.stepTarget.y - currentHead.y)) *
      this.stepProgress +
      Math.random() * this.maxJigglePx - this.maxJigglePx * 0.5

    if (stageRect != null) {
      head.x = Math.max(stageRect.x, Math.min(stageRect.x + stageRect.width, head.x))
      head.y = Math.max(stageRect.y, Math.min(stageRect.y + stageRect.height, head.y))
    }

    this.updateLegsPerSegment(this.segments[0], stageRect)
  }

  private updateLegsPerSegment (segment: Segment, stageRect?: StageRect): void {
    (['left', 'right'] as Array<'left' | 'right'>).forEach(side => {
      segment.legs[side].forEach((leg, legIndex) => {
        this.updateLeg(leg, this.current.segments[0].legs[side][legIndex], leg.socketIndex, stageRect)
        if (side === this.activeSide) {
          this.updateLeg(leg, this.current.segments[0].legs[side][legIndex], leg.clawIndex, stageRect)
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

  private readonly updateLeg = (leg: Leg, currentLeg: Vector[], index: number, stageRect?: StageRect): void => {
    const head = this.segments[0].position
    const joint = leg.getModelJoint(index)
    const radius = Point.distance(head.point, head.point.subtract(joint))
    const targetRadians = Math.atan2(joint.y, joint.x) + head.radians
    const radians = Angle.interpolate(
      currentLeg[index].radians,
      targetRadians,
      Math.min(1, this.stepProgress)
    )
    const updatedPoint = new Point(
      Math.cos(radians) * radius + head.x,
      Math.sin(radians) * radius + head.y
    )
    if (stageRect != null) {
      updatedPoint.x = Math.max(stageRect.x, Math.min(stageRect.x + stageRect.width, updatedPoint.x))
      updatedPoint.y = Math.max(stageRect.y, Math.min(stageRect.y + stageRect.height, updatedPoint.y))
    }

    leg.updateLiveJoint(index, new Vector(updatedPoint, radians))
  }
}
