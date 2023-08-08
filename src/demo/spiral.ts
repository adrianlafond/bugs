import { Angle, Point } from '@adrianlafond/geom'

export class Spiral {
  private static radians = 0
  private static radius = 0

  static getPoint(maxRadius: number): {
    point: Point
    complete: boolean
  } {
    let complete = false
    if (Spiral.radius >= maxRadius) {
      Spiral.radius = 0
      Spiral.radians = 0
      complete = true
    }
    const x = Math.cos(Spiral.radians) * Spiral.radius
    const y = Math.sin(Spiral.radians) * Spiral.radius

    Spiral.radians = Angle.normalize(Spiral.radians - Math.PI * 0.05)
    Spiral.radius += 1

    return {
      point: new Point(x, y),
      complete,
    }
  }
}