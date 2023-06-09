import { Point, PointData } from '@adrianlafond/geom'

interface LegData {
  length: number
  start: Point
  end: Point
}

export class Leg {
  private readonly data: LegData = {
    length: 36,
    start: new Point(),
    end: new Point(36, 0)
  }

  constructor () {}

  get position (): { x: number, y: number } {
    return this.data.start.data
  }

  set position (value: { x: number, y: number }) {
    const delta = {
      x: value.x - this.data.start.x,
      y: value.y - this.data.start.y,
    }
    this.data.start.x = value.x
    this.data.start.y = value.y
    this.data.end.x += delta.x
    this.data.end.y += delta.y
  }

  render (): { start: PointData, end: PointData } {
    return {
      start: this.data.start.data,
      end: this.data.end.data
    }
  }

  toString (): string {
    return 'Leg'
  }
}
