import { Point } from '@adrianlafond/geom';

export class Vertical {
  private static count = 0;
  private static offset = 10


  static getPoint(width: number, height: number): {
    point: Point
    complete: boolean
  } {
    if (Vertical.count === 10) {
      Vertical.count = 0
    }
    const x = Vertical.count * width / 10 + Math.random() * Vertical.offset
    const y = Math.random() * 20 + Vertical.offset
    return {
      point: new Point(
        x,
        Vertical.count % 2 === 0 ? y : height - y
      ),
      complete: ++Vertical.count === 10
    }
  }
}