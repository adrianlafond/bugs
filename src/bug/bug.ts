import { Angle, Point, Vector } from '@adrianlafond/geom'
import { Leg } from './leg';

export interface Legs {
  left: Leg[];
  right: Leg[];
}

export interface BugRender {
  head: Vector
  legs: Legs
  target: Point
}

export class Bug {
  private activeSide: 'left' | 'right' = 'left'

  private stepProgress = 0
  private stepMs = 0
  private readonly maxStepMs = 500

  private head = new Vector(100, 100)
  private legs: Legs = {
    left: [new Leg([
      new Point(-10, 0),
      new Point(-30, -10),
    ]), new Leg([
      new Point(-10, 10),
      new Point(-30, 10),
    ]), new Leg([
      new Point(-10, 20),
      new Point(-30, 30),
    ])],
    right: [new Leg([
      new Point(10, 0),
      new Point(30, -10),
    ]), new Leg([
      new Point(10, 10),
      new Point(30, 10),
    ]), new Leg([
      new Point(10, 20),
      new Point(30, 30),
    ])],
  }
  private target = new Vector()

  private current: BugRender = {
    head: this.head,
    legs: this.legs,
    target: this.target.point
  }

  /**
   * Commands the bug to move. Takes one arg, the number of milliseconds that
   * have passed since the last movement, so that progress can be calculated.
   */
  tick(deltaMs = 0): BugRender {
    this.stepProgress = this.stepMs / this.maxStepMs
    this.updateHead()
    this.updateLegs()
    this.updateStepProgress(deltaMs)
    return {
      head: this.head,
      legs: this.legs,
      target: this.target.point
    }
  }

  /**
   * Allows the target Point that the bug walks towards to be updated.
   */
  updateTarget(value: Point) {
    this.target.x = value.x
    this.target.y = value.y
  }

  /**
   * Adds elapsed milliseconds to the already elapsed milliseconds of the
   * current step so that current step progress can be calculated. When the
   * current step progress exceeds the max step progress, then the step progress
   * is reset, the active stepping side is toggled, and the current bug state is
   * copied for use in calculations.
   */
  private updateStepProgress(deltaMs: number) {
    this.stepMs = Math.min(this.maxStepMs, this.stepMs + deltaMs)
    if (this.stepMs >= this.maxStepMs) {
      this.stepMs = 0
      this.activeSide = this.activeSide === 'left' ? 'right' : 'left'
      this.current.head = this.head.clone()
      this.current.legs = {
        left: this.legs.left.map(item => item.clone()),
        right: this.legs.right.map(item => item.clone()),
      }
    }
  }

  private updateHead() {
    this.target.radians = Math.atan2(this.target.y - this.current.head.y, this.target.x - this.current.head.x) + Math.PI * 0.5
    const delta = Angle.delta(this.target.radians, this.current.head.radians)
    const maxTurnRadians = Math.PI * 0.25
    if (delta > maxTurnRadians) {
      this.target.radians = Angle.normalize(this.current.head.radians - maxTurnRadians)
    } else if (delta < -maxTurnRadians) {
      this.target.radians = Angle.normalize(this.current.head.radians + maxTurnRadians)
    }
    this.head.radians = this.interpolateRadians(
      this.current.head.radians,
      this.target.radians,
      Math.min(1, this.stepProgress)
    )
  }

  private updateLegs() {
    (['left', 'right'] as ('left' | 'right')[]).forEach(side => {
      this.legs[side].forEach((leg, legIndex) => {
        this.updateLeg(leg, this.current.legs[side][legIndex], 0)
        if (side === this.activeSide) {
          this.updateLeg(leg, this.current.legs[side][legIndex], 1)
        }
      });
    });
  }

  private updateLeg = (leg: Leg, currentLeg: Leg, index: number) => {
    const joint = leg.getModel(index)
    const radius = Point.distance(this.head.point, this.head.point.subtract(joint))
    const targetRadians = Math.atan2(joint.y, joint.x) + this.head.radians
    const radians = this.interpolateRadians(
      currentLeg.getLive(index).radians,
      targetRadians,
      Math.min(1, this.stepProgress)
    )
    const updatedSocket = new Point(
      Math.cos(radians) * radius + this.head.x,
      Math.sin(radians) * radius + this.head.y
    )
    leg.updateLive(index, new Vector(updatedSocket, radians))
  }

  /**
   * Returns an interpolated radians value between two other radians according
   * to a progress value.
   * TODO: update this @adrianlafond/geom/Angle
   */
  private interpolateRadians(r1: number, r2: number, progress: number): number {
    const a1 = Angle.normalize(r1);
    const a2 = Angle.normalize(r2);
    let delta = a2 - a1;
    if (Math.abs(delta) > Math.PI) {
      const circumference = Math.PI * 2 * (a2 > a1 ? -1 : 1);
      delta = a2 + circumference - a1;
    }
    return Angle.normalize(a1 + delta * progress);
  }
}
