import { Angle, Point, Vector } from '@adrianlafond/geom'
import { Leg } from './leg'

export interface Legs {
  left: Leg[]
  right: Leg[]
}

export interface BugRender {
  head: Vector
  legs: Legs
  target: Point
}

export interface StageRect {
  x: number
  y: number
  width: number
  height: number
}

export interface BugOptions {
  activeSide?: 'left' | 'right'
  millisecondsPerStep?: number
  maxStepPx?: number
  position?: Vector
  legs: {
    left: Point[][]
    right: Point[][]
  }
  jointOffset: number
  repulsionPx: number
  maxJigglePx: number
  target: Vector
}

const defaults: Required<BugOptions> = {
  activeSide: 'left',
  millisecondsPerStep: 250,
  maxStepPx: 18,
  position: new Vector(),
  legs: {
    left: [[
      new Point(-3, 5),
      new Point(-12, -10)
    ], [
      new Point(-3, 8),
      new Point(-14, 4)
    ], [
      new Point(-3, 15),
      new Point(-10, 16)
    ]],
    right: [[
      new Point(3, 5),
      new Point(12, -10)
    ], [
      new Point(3, 8),
      new Point(14, 4)
    ], [
      new Point(3, 15),
      new Point(10, 16)
    ]],
  },
  jointOffset: 0.25,
  repulsionPx: 8,
  maxJigglePx: 3,
  target: new Vector()
}

export class Bug {
  private activeSide: BugOptions['activeSide']

  private stepProgress = 0
  private stepMs = 0
  private millisecondsPerStep: number
  private maxStepPx: number
  private jointOffset: number

  private head: Vector
  private legs: Legs = {
    left: [],
    right: []
  }

  private target: Vector
  private repulsionPx: number
  private maxJigglePx: number

  private current: BugRender

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
    this.head = options?.position ?? defaults.position
    this.target = options?.target ?? defaults.target
    this.current = {
      head: this.head,
      legs: this.legs,
      target: this.target.point
    }
    this.createLegs(options?.legs ?? defaults.legs)
    this.updateBug({ deltaMs: this.millisecondsPerStep })
  }

  /**
   * Commands the bug to move. Takes one arg, the number of milliseconds that
   * have passed since the last movement, so that progress can be calculated.
   */
  tick ({
    deltaMs = 0,
    stageRect,
  }: {
    deltaMs?: number
    stageRect?: StageRect
  }): BugRender {
    this.stepProgress = this.stepMs / this.millisecondsPerStep
    this.updateBug({ deltaMs, stageRect })

    if (Point.distance(this.target.point, this.head.point) < this.maxStepPx + this.repulsionPx) {
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

  private getRender (): BugRender {
    return {
      head: this.head,
      legs: this.legs,
      target: this.target.point
    }
  }

  private createLegs(legsModel: BugOptions['legs']) {
    legsModel.left.forEach((joints, index) => {
      joints.splice(1, 0, new Point(
        (joints[0].x + joints[1].x) * 0.5,
        (joints[0].y + joints[1].y) * 0.5,
      ))
      this.legs.left[index] = new Leg(joints)
    })
    legsModel.right.forEach((joints, index) => {
      joints.splice(1, 0, new Point(
        (joints[0].x + joints[1].x) * 0.5,
        (joints[0].y + joints[1].y) * 0.5,
      ))
      this.legs.right[index] = new Leg(joints)
    })
  }

  private updateBug ({
    deltaMs,
    stageRect,
  }: {
    deltaMs: number
    stageRect?: StageRect
  }): void {
    const repulusionRect = stageRect ? {
      x: stageRect.x + this.repulsionPx,
      y: stageRect.y + this.repulsionPx,
      width: stageRect.width - this.repulsionPx * 2,
      height: stageRect.height - this.repulsionPx * 2,
    } : stageRect;
    this.updateHead(repulusionRect)
    this.updateLegs(repulusionRect)
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
      this.current.head = this.head.clone()
      this.current.legs = {
        left: this.legs.left.map(item => item.clone()),
        right: this.legs.right.map(item => item.clone())
      }
      this.legs[this.activeSide].forEach(leg => leg.startMoving())
      this.legs[this.activeSide === 'left' ? 'right' : 'left'].forEach(leg => leg.stopMoving())
    }
  }

  private updateHead (stageRect?: StageRect): void {
    this.target.radians = Math.atan2(this.target.y - this.current.head.y, this.target.x - this.current.head.x) + Math.PI * 0.5
    const delta = Angle.delta(this.target.radians, this.current.head.radians)
    const maxTurnRadians = Math.PI * 0.25
    if (delta > maxTurnRadians) {
      this.target.radians = Angle.normalize(this.current.head.radians - maxTurnRadians)
    } else if (delta < -maxTurnRadians) {
      this.target.radians = Angle.normalize(this.current.head.radians + maxTurnRadians)
    }
    this.head.radians = Angle.interpolate(
      this.current.head.radians,
      this.target.radians,
      Math.min(1, this.stepProgress)
    )

    this.head.x = this.current.head.x +
      Math.max(-this.maxStepPx, Math.min(this.maxStepPx, this.target.x - this.current.head.x)) *
      this.stepProgress +
      Math.random() * this.maxJigglePx - this.maxJigglePx * 0.5
    this.head.y = this.current.head.y +
      Math.max(-this.maxStepPx, Math.min(this.maxStepPx, this.target.y - this.current.head.y)) *
      this.stepProgress +
      Math.random() * this.maxJigglePx - this.maxJigglePx * 0.5

    if (stageRect) {
      this.head.x = Math.max(stageRect.x, Math.min(stageRect.x + stageRect.width, this.head.x))
      this.head.y = Math.max(stageRect.y, Math.min(stageRect.y + stageRect.height, this.head.y))
    }
  }

  private updateLegs (stageRect?: StageRect): void {
    (['left', 'right'] as Array<'left' | 'right'>).forEach(side => {
      this.legs[side].forEach((leg, legIndex) => {
        this.updateLeg(leg, this.current.legs[side][legIndex], leg.socketIndex, stageRect)
        if (side === this.activeSide) {
          this.updateLeg(leg, this.current.legs[side][legIndex], leg.clawIndex, stageRect)
        }
        if (leg.jointIndex !== -1) {
          const socketPoint = leg.getLive(leg.socketIndex).point
          const clawPoint = leg.getLive(leg.clawIndex).point

          const radians = Math.atan2(socketPoint.y - clawPoint.y, socketPoint.x - clawPoint.x) - Math.PI * 2
          const length = Point.distance(leg.getModel(0), leg.getModel(2))
          const offset = length * this.jointOffset

          leg.updateLive(leg.jointIndex, new Vector(
            (socketPoint.x + clawPoint.x) * 0.5 - Math.cos(radians) * offset,
            (socketPoint.y + clawPoint.y) * 0.5 + Math.sin(radians) * offset,
          ))
        }
      })
    })
  }

  private readonly updateLeg = (leg: Leg, currentLeg: Leg, index: number, stageRect?: StageRect): void => {
    const joint = leg.getModel(index)
    const radius = Point.distance(this.head.point, this.head.point.subtract(joint))
    const targetRadians = Math.atan2(joint.y, joint.x) + this.head.radians
    const radians = this.interpolateRadians(
      currentLeg.getLive(index).radians,
      targetRadians,
      Math.min(1, this.stepProgress)
    )
    const updatedPoint = new Point(
      Math.cos(radians) * radius + this.head.x,
      Math.sin(radians) * radius + this.head.y
    )
    if (stageRect) {
      updatedPoint.x = Math.max(stageRect.x, Math.min(stageRect.x + stageRect.width, updatedPoint.x))
      updatedPoint.y = Math.max(stageRect.y, Math.min(stageRect.y + stageRect.height, updatedPoint.y))
    }

    leg.updateLive(index, new Vector(updatedPoint, radians))
  }

  /**
   * Returns an interpolated radians value between two other radians according
   * to a progress value.
   * TODO: update this @adrianlafond/geom/Angle
   */
  private interpolateRadians (r1: number, r2: number, progress: number): number {
    const a1 = Angle.normalize(r1)
    const a2 = Angle.normalize(r2)
    let delta = a2 - a1
    if (Math.abs(delta) > Math.PI) {
      const circumference = Math.PI * 2 * (a2 > a1 ? -1 : 1)
      delta = a2 + circumference - a1
    }
    return Angle.normalize(a1 + delta * progress)
  }
}
