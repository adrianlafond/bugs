import Point, { PointData } from './geom/point';

export const MAXIMUM_LENGTH: number = 20;

export interface LegOptions {
  joint?: Point;
  foot?: Point;
  target?: Point;
  progress?: number;
  maxLength?: number;
  planted?: boolean;
}

export interface LegModel extends LegOptions {
  radians?: number;
  start?: Point;
}

export interface LegData {
  joint: PointData,
  foot: PointData,
  planted: boolean;
}

export default class Leg {
  private model: LegModel;

  constructor(options: LegOptions = {}) {
    const {
      joint = new Point(0, 0),
      foot = new Point(MAXIMUM_LENGTH / 2, 0),
      target = new Point(),
      progress = 0,
      maxLength = MAXIMUM_LENGTH,
      planted = true,
    } = options;
    this.model = { foot, maxLength, planted };
    this.joint = joint;
    this.target = target;
    this.model.progress = progress;
  }

  get data(): LegData {
    return {
      joint: this.model.joint.data,
      foot: this.model.foot.data,
      planted: this.model.planted,
    };
  }

  get joint(): Point {
    return this.model.joint.clone();
  }

  set joint(point: Point) {
    this.model.radians = Point.radians(new Point(), point);
    this.model.joint = point.clone();
  }

  get foot(): Point {
    return this.model.foot.clone();
  }

  get start(): Point {
    return this.model.start.clone();
  }

  get target(): Point {
    return this.model.target.clone();
  }

  set target(point: Point) {
    const { foot, maxLength } = this.model;
    const distance = Point.distance(foot, point);
    if (distance > maxLength) {
      const radians = Point.radians(foot, point);
      this.model.target = new Point(
        foot.x + Math.cos(radians) * maxLength,
        foot.y + Math.sin(radians) * maxLength);
    } else {
      this.model.target = point.clone();
    }
    this.model.start = this.model.foot.clone();
    this.model.progress = 0;
  }

  get maxLength(): number {
    return this.model.maxLength;
  }

  get progress(): number {
    return this.model.progress;
  }

  set progress(value: number) {
    const { foot, start, target } = this.model;
    const constrainedValue: number = Math.max(0, Math.min(1.0, value));
    foot.x = (target.x - start.x) * constrainedValue + start.x;
    foot.y = (target.y - start.y) * constrainedValue + start.y;
    this.model.progress = constrainedValue;
  }

  get planted(): boolean {
    return this.model.planted;
  }

  set planted(value: boolean) {
    this.model.planted = value;
  }

  get radians(): number {
    return this.model.radians;
  }

  moveBy(point: Point, radians: number) {
    this.model.joint.add(point);
    this.model.radians += radians;
    if (!this.model.planted) {
      this.model.foot.x = Math.cos(this.model.radians) * this.foot.x + point.x;
      this.model.foot.y = Math.sin(this.model.radians) * this.foot.y + point.y;
    }
  }
}
