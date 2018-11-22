/**
 *
 */
export default class Point {
  constructor(public x: number = 0, public y: number = 0) {}

  static clone(point: Point): Point {
    return new Point(point.x, point.y);
  }
}
