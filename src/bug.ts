import Segment, { SegmentData } from './segment';
import Point from './geom/point';

export interface BugModel {
  id: string;
  ticks: number;
  segments: Segment[];
}

export interface BugOptions {
  x?: number;
  y?: number;
}

export interface BugData {
  x: number;
  y: number;
  radians: number;
  segments: SegmentData[];
}

class Bug {
  private model: BugModel;

  constructor(options: BugOptions = {}) {
    const {
      x = 0,
      y = 0,
    } = options;
    this.model = {
      id: getUid(),
      ticks: 0,
      segments: [new Segment({
        position: new Point(x, y)
      })],
    };
  }

  get id(): string {
    return this.model.id;
  }

  get ticks(): number {
    return this.model.ticks;
  }

  get data(): BugData {
    const segment0 = this.segments[0];
    const { x, y, radians } = segment0;
    return {
      x,
      y,
      radians,
      segments: this.segments.map(o => ({
        x: o.x - x,
        y: o.y - y,
        radians: o.radians,
        legs: o.legs.map(leg => ({
          joint: { x: leg.joint.x - x, y: leg.joint.y - y },
          foot: { x: leg.foot.x - x, y: leg.foot.y - y },
          planted: leg.planted,
        })),
      })),
    };
  }

  get segments(): SegmentData[] {
    return this.model.segments.map(segment => segment.data);
  }

  tick() {
    ++this.model.ticks;
  }
}

let uid: number = 0;
function getUid(): string {
  return `bug-${uid++}`;
}

export default Bug;
