import { Point, PointData } from '@adrianlafond/geom';

export interface LegModel {
  joints: Point[];
}

export default class Leg {
  protected model: LegModel;

  constructor(options: LegModel) {
    this.model = options;
  }

  get data(): PointData[] {
    return this.model.joints.map(joint => joint.data);
  }
}
