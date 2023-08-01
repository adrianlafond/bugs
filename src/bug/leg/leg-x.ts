import { Angle, Point, PointData, Vector } from '@adrianlafond/geom'

interface LegData {
  /**
   * Length of the leg; behaves as a maximum since view is top down.
   */
  length: number

  /**
   * Position of the socket from which the leg connects to the body and pivots.
   */
  socket: Vector

  /**
   * The end of the leg that connects with the ground.
   */
  claw: Point

  /**
   * Whether the leg is on the left or right side of the body. Useful for
   * rendering joints and other details in the correct orientation.
   */
  side: 'left' | 'right'

  /**
   * Where a step starts and where it should end.
   */
  step: {
    start: Point
    end: Point
    delta: Point
  }
}

export class Leg {
  private data: LegData = {
    length: 48,
    socket: new Vector(100, 100, 0),
    claw: new Point(124, 100),
    side: 'right',
    step: {
      start: new Point(0, 0),
      end: new Point(0, 0),
      delta: new Point(0, 0),
    }
  }

  constructor(initData?: Partial<LegData>) {
    this.data = {
      ...this.data,
      ...initData,
    }
  }

  private updateSocketPosition (value: Point): Point {
    const delta = this.data.socket.point.subtract(value)
    this.data.socket.x = value.x
    this.data.socket.y = value.y
    return delta
  }

  private calculateLegLength(targetRadians: number) {
    // const socketRadians = Angle.normalize(this.data.socket.radians)
    const diffRadians = Angle.normalize(targetRadians - this.data.socket.radians)
    const deltaRadians = diffRadians % Math.PI
    const halfMaxLength = this.data.length * 0.5;
    return Math.min(this.data.length, halfMaxLength + halfMaxLength * deltaRadians / (Math.PI * 0.25))
  }

  /**
   * Calculates target position for next step and record starting position in
   * order render progress.
   * @param target is an angle from a relative socket that enables a target
   * end position for the claw to be calculated.
   */
  calculateStep(target: Vector) {
    this.data.step.start = this.data.claw.clone()
    const renderLength = this.calculateLegLength(target.radians)

    this.data.step.end.x = this.data.socket.x + Math.cos(target.radians) * renderLength;
    this.data.step.end.y = this.data.socket.y + Math.sin(target.radians) * renderLength;
    this.data.step.delta = this.data.step.end.subtract(this.data.step.start)
  }

  /**
   * NOTES:
   * - delta is the current tick
   * - (delta + accumulated delta) / stepTime = % of current step taken
   * - starting claw position
   * - target claw position
   * - offset from move in socket position
   * - stepping (boolean)
   */
  render ({
    stepProgress = 0,
    socket = new Vector(0, 0, 0),
  }: {
    /**
     * Number 0 to 1 representing progress of current step. If 0, then leg is
     * not stepping, claw should stay planted, and only socket should move.
     */
    stepProgress: number;

    /**
     * The position and angle of the socket where the leg connects to the body.
     * The angle is the direction the leg shoots out from the body at.
     */
    socket: Vector,
  }): { socket: PointData, claw: PointData } {
    const socketDelta = this.updateSocketPosition(socket.point)
    this.data.claw.x = this.data.step.start.x + this.data.step.delta.x * stepProgress + socketDelta.x
    this.data.claw.y = this.data.step.start.y + this.data.step.delta.y * stepProgress + socketDelta.y
    return {
      socket: this.data.socket.data,
      claw: this.data.claw.data
    }
  }

  toString (): string {
    return JSON.stringify(this.data);
  }
}
