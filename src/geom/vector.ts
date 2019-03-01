import Point from './point';

export interface VectorModel {
  point?: Point;
  radians?: number;
}

export interface VectorData {
  x: number;
  y: number;
  radians: number;
}

export default class Vector {
  private model: VectorModel = {};

  constructor(x_point: number | Point = 0, y_point: number = 0, radians: number = 0) {
    if (x_point instanceof Point) {
      this.model.point = x_point.clone();
      this.model.radians = y_point;
    } else {
      this.model.point = new Point(x_point, y_point);
      this.model.radians = radians;
    }
  }

  get point(): Point {
    return this.model.point.clone();
  }

  get x(): number {
    return this.model.point.x;
  }

  set x(value: number) {
    this.model.point.x = value;
  }

  get y(): number {
    return this.model.point.y;
  }

  set y(value: number) {
    this.model.point.y = value;
  }

  get radians(): number {
    return this.model.radians;
  }

  set radians(value: number) {
    this.model.radians = value;
  }

  get data(): VectorData {
    const { x, y, radians } = this;
    return { x, y, radians };
  }

  clone(): Vector {
    return new Vector(this.point, this.radians);
  }

  toString(): string {
    return JSON.stringify(this.data);
  }
}