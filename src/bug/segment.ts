import { Point, PointData, Vector, VectorData } from '@adrianlafond/geom';
import Leg from './leg';

export interface SegmentModel {
  vector: Vector;
  legs: Leg[];
}

export interface SegmentData extends VectorData {
  legs: Array<PointData[]>;
}

export interface SegmentOptions {
  vector?: Vector;
  legs?: Leg[];
}

export default class Segment {
  protected model: SegmentModel = {
    vector: new Vector(),
    legs: [
      new Leg({ joints: [new Point(), new Point(12, 2), new Point(18, -2)] }),
      new Leg({ joints: [new Point(), new Point(-12, 2), new Point(-18, -2)] }),
    ],
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

  get data(): SegmentData {
    return {
      ...this.model.vector.data,
      legs: this.model.legs.map(leg => leg.data)
    };
  }
}
