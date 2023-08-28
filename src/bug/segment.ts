import { Point, Vector } from '@adrianlafond/geom'
import { BugOptionsSegment, BugOptionsSegmentLegs } from './bug.types'
import { Leg } from './leg'

export interface Legs {
  left: Leg[]
  right: Leg[]
}

export interface SegmentData {
  position: Vector
  legs: {
    left: Vector[][]
    right: Vector[][]
  }
}

export class Segment {
  // (x,y) relative to a leading segment
  offsetPosition: Point

  // Distance from a leading segment
  maxDistance: number

  // Current position
  position: Vector

  // Map of segment's legs.
  legs: Legs

  constructor (bugStartingPosition: Vector, options: BugOptionsSegment) {
    this.offsetPosition = options.position
    this.maxDistance = Point.distance(new Point(), this.offsetPosition)
    this.position = this.calculateStartingVector(bugStartingPosition, options.position)
    this.legs = this.createLegs(options.legs)
  }

  get data (): SegmentData {
    return {
      position: this.position.clone(),
      legs: {
        left: this.legs.left.map(leg => leg.getAllLiveJoints()),
        right: this.legs.right.map(leg => leg.getAllLiveJoints())
      }
    }
  }

  private calculateStartingVector (bugStartingPosition: Vector, segmentPosition: Point): Vector {
    return new Vector(
      segmentPosition.x + bugStartingPosition.x,
      segmentPosition.y + bugStartingPosition.y,
      bugStartingPosition.radians
    )
  }

  private createLegs (legsModel?: BugOptionsSegmentLegs): Legs {
    const legs: Legs = { left: [], right: [] }
    legsModel?.left.forEach((joints, index) => {
      joints.splice(1, 0, new Point(
        (joints[0].x + joints[1].x) * 0.5,
        (joints[0].y + joints[1].y) * 0.5
      ))
      legs.left[index] = new Leg(joints)
    })
    legsModel?.right.forEach((joints, index) => {
      joints.splice(1, 0, new Point(
        (joints[0].x + joints[1].x) * 0.5,
        (joints[0].y + joints[1].y) * 0.5
      ))
      legs.right[index] = new Leg(joints)
    })
    return legs
  }
}
