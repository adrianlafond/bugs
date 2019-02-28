import Segment, { SegmentData } from './segment';
import Point, { PointData } from './geom/point';
import Vector from './geom/vector';

export interface BugTarget {
  x: number;
  y: number;
  distance: number;
}

export interface BugModel {
  id: string;
  ticks: number;
  progress: number;
  segments: Segment[];
  target: BugTarget;
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
    const position = new Point(x, y);
    this.model = {
      id: getUid(),
      ticks: 0,
      progress: 0,
      segments: [new Segment({ position })],
      target: Object.assign(position.data, { distance: 0 }),
    };
  }

  get id(): string {
    return this.model.id;
  }

  get ticks(): number {
    return this.model.ticks;
  }

  get data(): BugData {
    const segment0 = this.model.segments[0].data;
    const { x, y, radians } = segment0;
    return {
      x,
      y,
      radians,
      segments: this.model.segments.map(s => {
        const data = s.data;
        return {
          x: data.x - x,
          y: data.y - y,
          radians: data.radians,
          legs: data.legs.map(leg => ({
            joint: { x: leg.joint.x - x, y: leg.joint.y - y },
            foot: { x: leg.foot.x - x, y: leg.foot.y - y },
            planted: leg.planted,
          })),
        };
      }),
    };
  }

  tick(deltaTime: number = 1) {
    ++this.model.ticks;
    this.updateProgress();
    this.model.segments[0].progress = this.model.progress;
  }

  getTarget(): BugTarget {
    const { x, y, distance } = this.model.target;
    return { x, y, distance };
  }

  setTarget(x: number = 0, y: number = 0, distance = 0) {
    this.model.target = { x, y, distance };
    this.updateSegmentsTargets();
  }

  private updateProgress() {
    let p = this.model.progress;
    p = p === 1 ? 0 : Math.min(1, p + 0.01);
    if (this.model.progress !== 0 && p === 0) {
      this.updateSegmentsTargets();
    }
    this.model.progress = p;
  }

  private updateSegmentsTargets() {
    const { x, y } = this.model.target;
    const data = this.model.segments[0].data;
    const position = new Point(data.x, data.y);
    const targetPosition = new Point(x, y);
    const targetRadians = Point.radians(position, targetPosition);
    const targetDistance = Point.distance(position, targetPosition);
    this.model.segments[0].target = new Vector(position.x + 5, position.y + 5, targetRadians);
  }
}

let uid: number = 0;
function getUid(): string {
  return `bug-${uid++}`;
}

export default Bug;
