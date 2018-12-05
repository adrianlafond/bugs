/**
 *
 */
export interface PointData {
  x: number,
  y: number,
};

export default class Point {
  constructor(public x: number = 0, public y: number = 0) {}

  get data(): PointData {
    return { x: this.x, y: this.y };
  }

  clone(): Point {
    return new Point(this.x, this.y);
  }

  add(point: Point): Point {
    this.x += point.x;
    this.y += point.y;
    return this;
  }

  subtract(point: Point): Point {
    this.x -= point.x;
    this.y -= point.y;
    return this;
  }

  toString(): string {
    return JSON.stringify(this.data);
  }

  static distance(p1: Point, p2: Point): number {
    return Math.sqrt((p1.x - p2.x) * (p1.x - p2.x) + (p1.y - p2.y) * (p1.y - p2.y));
  }

  static radians(p1: Point, p2: Point): number {
    return Math.atan2(p2.y - p1.y, p2.x - p1.x);
  }
}
