import { Point, PointData, Vector, VectorData } from '@adrianlafond/geom';
import Segment from './segment';
import Leg from './leg';

export interface BugOptions {
  x?: number;
  y?: number;
  radians?: number;
}

interface BugModel {
  segments: Segment[];
  legs: Leg[];
}

class Bug {
  protected model: BugModel;

  constructor(options: BugOptions = {}) {
    const { x = 0, y = 0, radians = 0 } = options;
    this.model = {
      segments: [new Segment({
        vector: new Vector(x, y, radians),
      })],
      legs: [
        new Leg({ joints: [new Point(), new Point(12, 2), new Point(18, -2)] }),
        new Leg({ joints: [new Point(), new Point(-12, 2), new Point(-18, -2)] }),
      ],
    };
  }

  tick(delta: number = 1): Bug {
    this.model.segments[0].radians += 0.05 * delta;
    return this;
  }

  get x(): number {
    return this.model.segments[0].x;
  }
  set x(value: number) {
    this.model.segments[0].x = value;
  }

  get y(): number {
    return this.model.segments[0].y;
  }
  set y(value: number) {
    this.model.segments[0].y = value;
  }

  get radians(): number {
    return this.model.segments[0].radians;
  }
  set radians(value: number) {
    this.model.segments[0].radians = value;
  }

  get segments(): VectorData[] {
    return this.model.segments.map(segment => segment.data);
  }
  get legs(): Array<PointData[]> {
    return this.model.legs.map(leg => (
      leg.data.map(point => ({
        x: point.x + this.x,
        y: point.y + this.x,
      }))
    ));
  }
}

export default Bug;
