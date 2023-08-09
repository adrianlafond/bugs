import { Point } from '@adrianlafond/geom';

export class Horizontal {
  private static count = 0;
  private static offset = 10


  static getPoint(width: number, height: number): {
    point: Point
    complete: boolean
  } {
    if (Horizontal.count === 10) {
      Horizontal.count = 0
    }
    const x = Math.random() * 20 + Horizontal.offset
    const y = Horizontal.count * height / 10 + Math.random() * Horizontal.offset
    return {
      point: new Point(
        Horizontal.count % 2 === 0 ? x : width - x,
        y
      ),
      complete: ++Horizontal.count === 10
    }
  }
}