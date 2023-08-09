import { Point } from '@adrianlafond/geom'

let count = 0
const offset = 10

export const calculateRandomPattern = (width: number, height: number): {
  point: Point
  complete: boolean
} => {
  if (count === 10) {
    count = 0
  }
  return {
    point: new Point(
      offset + Math.floor(Math.random() * (width - offset * 2)),
      offset + Math.floor(Math.random() * (height - offset * 2))
    ),
    complete: ++count === 10
  }
}
