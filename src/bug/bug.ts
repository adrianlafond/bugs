import { Vector, Point, PointData } from '@adrianlafond/geom';
import Segment, { SegmentData } from './segment';

export interface BugOptions {
  x?: number;
  y?: number;
  radians?: number;
  target?: {
    x?: number;
    y?: number;
  };
}

interface BugModel {
  segments: Segment[];
  target: Point;
  progress: number;
  step: number;
  maxSteps: number;
}

class Bug {
  protected model: BugModel;

  constructor(options: BugOptions = {}) {
    const { x = 0, y = 0, radians = 0 } = options;
    const { x: targetX = 0, y: targetY = 0 } = options.target || {};
    this.model = {
      segments: [new Segment({
        vector: new Vector(x, y, radians),
      })],
      target: new Point(targetX, targetY),
      progress: 0,
      step: 0,
      maxSteps: 2,
    };
    this.target = this.model.target;
  }

  tick(delta: number = 1): Bug {
    this.model.progress = Math.min(1, this.model.progress + 0.05);
    const isStepComplete = this.model.progress >= 1;
    this.model.segments.forEach(segment => {
      segment.tick(this.model.progress * delta);
      if (isStepComplete) {
        segment.step();
      }
    });
    if (isStepComplete) {
      this.model.progress = 0;
      this.model.step += 1;
      if (this.model.step >= this.model.maxSteps) {
        this.model.step = 0;
      }
    }
    return this;
  }

  get target(): PointData {
    return this.model.target.data;
  }
  set target(value: PointData) {
    this.model.target.x = value.x;
    this.model.target.y = value.y;
    this.model.segments[0].target = this.model.target;
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

  get segments(): SegmentData[] {
    return this.model.segments.map(segment => segment.data);
  }
}

export default Bug;
