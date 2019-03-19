import { Point, PointData, Vector, VectorData } from '@adrianlafond/geom';
import Leg from './leg';

export interface SegmentModel {
  vector: Vector;
  legs: Leg[];
  maxRotation: number;
  maxDistance: number;
  target: Point;
  vectorStart: Vector;
}

export interface SegmentData extends VectorData {
  legs: Array<PointData[]>;
}

export interface SegmentOptions {
  vector?: Vector;
  legs?: Leg[];
  maxRotation?: number;
  maxDistance?: number;
  target?: Point;
}

export default class Segment {
  protected model: SegmentModel = {
    vector: new Vector(),
    legs: [
      new Leg({ joints: [new Point(), new Point(12, 2), new Point(18, -2)] }),
      new Leg({ joints: [new Point(), new Point(-12, 2), new Point(-18, -2)] }),
    ],
    maxRotation: Math.PI * 0.5,
    maxDistance: 10,
    target: new Point(),
    vectorStart: new Vector(),
  };

  constructor(options: SegmentOptions) {
    this.model = { ...this.model, ...options };
    this.model.vectorStart = this.model.vector.clone();
  }

  get target(): Point {
    return this.model.target.clone();
  }
  set target(value: Point) {
    this.model.target = value;
  }

  tick(progress = 0) {
    const compensateRadians = Math.PI * 0.5;
    const { target, vector, vectorStart, maxDistance } = this.model;
    const targetRadians = Math.atan2(target.y - vectorStart.y, target.x - vectorStart.x) + compensateRadians;
    console.log(targetRadians, vectorStart.radians);
    const distance = Math.min(maxDistance, Point.distance(target, vectorStart.point));
    vector.radians = vectorStart.radians + (targetRadians - vectorStart.radians) * progress;
    vector.x = vectorStart.x + Math.cos(vector.radians - compensateRadians) * (distance * progress);
    vector.y = vectorStart.y + Math.sin(vector.radians - compensateRadians) * (distance * progress);
  }

  step() {
    this.model.vectorStart = this.model.vector.clone();
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
      legs: this.model.legs.map(leg => (
        leg.data.map(point => ({
          x: point.x + this.x,
          y: point.y + this.y,
        }))
      ))
    };
  }
}
