import { Point } from '@adrianlafond/geom';

export class Random {
  private static count = 0;
  private static offset = 10

  static getPoint(width: number, height: number): {
    point: Point
    complete: boolean
  } {
    if (Random.count === 10) {
      Random.count = 0
    }
    return {
      point: new Point(
        Math.floor(Math.random() * width),
        Math.floor(Math.random() * height)
      ),
      complete: ++Random.count === 10
    }
  }
}