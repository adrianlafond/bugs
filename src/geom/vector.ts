import Point from './point';

export interface VectorModel {
  point?: Point;
  angle?: number;
}

export interface VectorData {
  x: number;
  y: number;
  angle: number;
}

export default class Vector {
  private model: VectorModel = {};

  constructor(x_point: number|Point = 0, y_point: number = 0, angle: number = 0) {
    if (x_point instanceof Point) {
      this.model.point = x_point.clone();
      this.model.angle = y_point;
    } else {
      this.model.point = new Point(x_point, y_point);
      this.model.angle = angle;
    }
  }

  get point(): Point {
    return this.model.point.clone();
  }

  get x(): number {
    return this.model.point.x;
  }

  get y(): number {
    return this.model.point.y;
  }

  get angle(): number {
    return this.model.angle;
  }

  get data(): VectorData {
    const { x, y, angle } = this;
    return { x, y, angle };
  }

  clone(): Vector {
    return new Vector(this.point, this.angle);
  }

  toString(): string {
    return JSON.stringify(this.data);
  }
}