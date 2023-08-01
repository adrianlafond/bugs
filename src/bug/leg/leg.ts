import { Point, Vector } from '@adrianlafond/geom';

export interface Joint {
  model: Point;
  live: Vector;
}

export class Leg {
  private joints: Joint[] = [];

  constructor(model: Point[], live?: Vector[]) {
    model.forEach((point, index) => {
      this.joints[index] = {
        model: point,
        live: live?.[index] || new Vector(point.clone()),
      }
    })
  }

  getModel(index: number) {
    return this.joints[index].model
  }

  updateLive(index:number, vector: Vector) {
    this.getLive(index).x = vector.x
    this.getLive(index).y = vector.y
    this.getLive(index).radians = vector.radians
  }

  getLive(index: number) {
    return this.joints[index].live
  }

  clone() {
    return new Leg(
      this.joints.map(joint => joint.model.clone()),
      this.joints.map(joint => joint.live.clone())
    )
  }
}
