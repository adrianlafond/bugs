import { Point } from '@adrianlafond/geom'

let count = 0
const offset = 10

export const calculateHorizontalPattern = (width: number, height: number): {
  point: Point
  complete: boolean
} => {
  if (count === 10) {
    count = 0
  }
  const x = Math.random() * 20 + offset
  const y = count * height / 10 + Math.random() * offset
  return {
    point: new Point(
      count % 2 === 0 ? x : width - x,
      y
    ),
    complete: ++count === 10
  }
}
