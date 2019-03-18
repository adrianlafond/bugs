import { Point, PointData, Vector, VectorData } from '@adrianlafond/geom';

export interface SegmentModel {
  vector: Vector;
}

export interface SegmentOptions {
  vector?: Vector;
}

export default class Segment {
  protected model: SegmentModel = {
    vector: new Vector(),
  }

  constructor(options: SegmentOptions) {
    this.model = { ...this.model, ...options };
  }

  get x(): number {
    return this.model.vector.x;
  }
  set x(value: number) {
    this.model.vector.x = value;
  }

  get y(): number {
    return this.model.vector.y;
  }
  set y(value: number) {
    this.model.vector.y = value;
  }

  get radians(): number {
    return this.model.vector.radians;
  }
  set radians(value: number) {
    this.model.vector.radians = value;
  }

  get data(): VectorData {
    return { ...this.model.vector.data };
  }
}
