import { Point, Vector } from '@adrianlafond/geom'

export interface Joint {
  model: Point
  live: Vector
}

export class Leg {
  private joints: Joint[] = []
  private moving = false

  constructor (model: Point[], live?: Vector[]) {
    model.forEach((point, index) => {
      this.joints[index] = {
        model: point,
        live: live != null ? live[index] : new Vector(point.clone())
      }
    })
  }

  get socketIndex(): number {
    return 0
  }

  get jointIndex(): number {
    return this.joints.length > 2 ? 1 : -1
  }

  get clawIndex(): number {
    return this.joints.length - 1
  }

  getModel (index: number): Point {
    return this.joints[index].model
  }

  updateLive (index: number, vector: Vector): void {
    this.getLive(index).x = vector.x
    this.getLive(index).y = vector.y
    this.getLive(index).radians = vector.radians
  }

  getLive (index: number): Vector {
    return this.joints[index].live
  }

  startMoving (): void {
    this.moving = true
  }

  stopMoving (): void {
    this.moving = false
  }

  isMoving (): boolean {
    return this.moving
  }

  clone (): Leg {
    return new Leg(
      this.joints.map(joint => joint.model.clone()),
      this.joints.map(joint => joint.live.clone())
    )
  }
}
