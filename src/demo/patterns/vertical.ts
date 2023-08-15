import { Point } from '@adrianlafond/geom'

let count = 0
const offset = 10

export const calculateVerticalPattern = (width: number, height: number): {
  point: Point
  complete: boolean
} => {
  if (count === 10) {
    count = 0
  }
  const x = count * width / 10 + Math.random() * offset
  const y = Math.random() * 20 + offset
  return {
    point: new Point(
      x,
      count % 2 === 0 ? y : height - y
    ),
    complete: ++count === 10
  }
}
