import { Angle, Point } from '@adrianlafond/geom'

let radians = 0
let radius = 0
let direction: 1 | -1 = 1

export const calculateSpiralPattern = (maxRadius: number): {
  point: Point
  complete: boolean
} => {
  let complete = false
  if (radius >= maxRadius) {
    radius = 0
    radians = 0
    direction *= -1
    complete = true
  }
  const x = Math.cos(radians) * radius
  const y = Math.sin(radians) * radius

  radians = Angle.normalize(radians - Math.PI * 0.05 * direction)
  radius += 1

  return {
    point: new Point(x, y),
    complete
  }
}
