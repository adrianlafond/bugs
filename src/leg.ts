import Point, { PointData } from './point';

export const MAXIMUM_LENGTH: number = 20;

export interface LegModel {
  joint?: Point;
  foot?: Point;
  start?: Point;
  target?: Point;
  progress?: number;
}

export interface LegData {
  joint: PointData,
  foot: PointData,
}

export default class Leg {
  private model: LegModel;

  // constructor(options: LegData = this.defaults) {
  constructor(options: LegModel = {}) {
    const {
      joint = new Point(0, 0),
      foot = new Point(MAXIMUM_LENGTH, 0),
      target = new Point(),
      progress = 0,
    } = options;
    const start = options.start || foot;
    this.model = { joint, foot, start, target, progress };
  }

  get data(): LegData {
    return {
      joint: this.model.joint.data,
      foot: this.model.foot.data,
    };
  }

  get joint() {
    return this.model.joint.clone();
  }

  set joint(point: Point) {
    this.model.joint = point.clone();
  }

  get foot() {
    return this.model.foot.clone();
  }

  get start() {
    return this.model.start.clone();
  }

  get target() {
    return this.model.target.clone();
  }

  set target(point: Point) {
    const { foot } = this.model;
    const distance = Point.distance(foot, point);
    if (distance > MAXIMUM_LENGTH) {
      const radians = Point.radians(foot, point);
      this.model.target = new Point(
        foot.x + Math.cos(radians) * MAXIMUM_LENGTH,
        foot.y + Math.sin(radians) * MAXIMUM_LENGTH);
    } else {
      this.model.target = point.clone();
    }
    this.model.start = this.model.foot.clone();
    this.model.progress = 0;
  }

  get progress(): number {
    return this.model.progress;
  }

  set progress(value: number) {
    const { foot, start, target } = this.model;
    foot.x = (target.x - start.x) * value + start.x;
    foot.y = (target.y - start.y) * value + start.y;
    this.model.progress = value;
  }
}
