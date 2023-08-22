import { Point, Vector } from '@adrianlafond/geom'

interface Joint {
  model: Point
  live: Vector
}

export class Leg {
  private joints: Joint[] = []

  constructor (model: Point[], live?: Vector[]) {
    model.forEach((point, index) => {
      this.joints[index] = {
        model: point,
        live: live != null ? live[index] : new Vector(point.clone())
      }
    })
  }

  get socketIndex (): number {
    return 0
  }

  get clawIndex (): number {
    return this.joints.length - 1
  }

  updateLiveJoint (index: number, vector: Vector): void {
    this.joints[index].live.x = vector.x
    this.joints[index].live.y = vector.y
    this.joints[index].live.radians = vector.radians
  }

  getModelJoint (index: number): Point {
    return this.joints[index].model.clone()
  }

  getLiveJoint (index: number): Vector {
    return this.joints[index].live.clone()
  }

  getAllModelJoints (): Point[] {
    return this.joints.map(joint => joint.model.clone())
  }

  getAllLiveJoints (): Vector[] {
    return this.joints.map(joint => joint.live.clone())
  }
}
