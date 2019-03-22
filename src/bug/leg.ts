import { Point, PointData, Vector } from '@adrianlafond/geom';

export interface LegOptions {
  joints: Point[];
}

export interface LegModel extends LegOptions {
  map: Point[];
  jointsStart: Point[];
}

export default class Leg {
  protected model: LegModel;

  constructor(options: LegOptions) {
    this.model = {
      ...options,
      map: this.clone(options.joints),
      jointsStart: this.clone(options.joints),
    };
  }

  offset(x: number, y: number, index = 0) {
    this.model.joints[index].x = this.model.map[index].x + x;
    this.model.joints[index].y = this.model.map[index].y + y;
  }

  offsetAll(x: number, y: number) {
    this.model.joints.forEach((joint, index) => {
      this.offset(x, y, index);
    })
  }

  tick(vector: Vector, progress: number) {
    const { joints, jointsStart, map } = this.model;
    const index = joints.length - 1;
    const radians = Math.atan2(map[index].y, map[index].x) + vector.radians;
    const radius = Point.distance(map[index], new Point());
    const land = new Point(vector.x + Math.cos(radians) * radius,
      vector.y + Math.sin(radians) * radius);

    const landRadians = Math.atan2(land.y - jointsStart[index].y,
      land.x - jointsStart[index].x);
    const distance = Point.distance(land, jointsStart[index]);
    joints[index].x = jointsStart[index].x + Math.cos(landRadians) *
      (distance * progress);
    joints[index].y = jointsStart[index].y + Math.sin(landRadians) *
      (distance * progress);
  }

  step() {
    this.model.jointsStart = this.clone();
  }

  get data(): PointData[] {
    return this.model.joints.map(joint => joint.data);
  }

  private clone(joints = this.model.joints) {
    return joints.map(joint => joint.clone());
  }
}
