import { Point, PointData, Vector } from '@adrianlafond/geom';

export interface LegOptions {
  joints: Point[];
}

export interface LegModel extends LegOptions {
  map: Vector[];
  jointsStart: Point[];
}

export default class Leg {
  protected model: LegModel;

  constructor(options: LegOptions) {
    this.model = {
      ...options,
      map: this.clone(options.joints).map(point => new Vector(
        point.x,
        point.y,
        Math.atan2(point.y, point.x),
      )),
      jointsStart: this.clone(options.joints),
    };
  }

  offset(vector: Vector, index = 0) {
    const { joints, map } = this.model;
    const joint = joints[index];
    const mapJoint = map[index];
    const distance = Point.distance(mapJoint.point, new Point(0, 0));
    const radians = mapJoint.radians + vector.radians;
    joint.x = vector.x + Math.cos(radians) * distance;
    joint.y = vector.y + Math.sin(radians) * distance;
  }

  offsetAll(vector: Vector) {
    this.model.joints.forEach((joint, index) => {
      this.offset(vector, index);
    })
  }

  tick(vector: Vector, progress: number) {
    const { joints, jointsStart, map } = this.model;
    const index = joints.length - 1;
    const radians = Math.atan2(map[index].y, map[index].x) + vector.radians;
    const radius = Point.distance(map[index].point, new Point());
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

  restartStep() {
    this.model.jointsStart = this.clone();
  }

  get data(): PointData[] {
    return this.model.joints.map(joint => joint.data);
  }

  private clone(joints = this.model.joints) {
    return joints.map(joint => joint.clone());
  }
}
