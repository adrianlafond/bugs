import LegData from './leg-data';
import Point from './point';

export const DEFAULT_LENGTH: number = 10;

export default class Leg {
  private data: LegData;

  // constructor(options: LegData = this.defaults) {
  constructor(options: LegData = {}) {
    const {
      joint = new Point(0, 0),
      foot = new Point(DEFAULT_LENGTH, 0),
      start = new Point(DEFAULT_LENGTH, 0),
      target = new Point(),
      progress = 0,
    } = options;
    this.data = { joint, foot, start, target, progress };
  }

  get joint() {
    return Point.clone(this.data.joint);
  }

  set joint(point: Point) {
    this.data.joint = Point.clone(point);
  }

  get foot() {
    return Point.clone(this.data.foot);
  }

  get start() {
    return Point.clone(this.data.start);
  }

  get target() {
    return Point.clone(this.data.target);
  }

  set target(point: Point) {
    this.data.target = Point.clone(point);
    this.data.start = Point.clone(this.data.foot);
    this.data.progress = 0;
  }

  get progress(): number {
    return this.data.progress;
  }

  set progress(value: number) {
    const { foot, start, target } = this.data;
    foot.x = (target.x - start.x) * value + start.x;
    foot.y = (target.y - start.y) * value + start.y;
    this.data.progress = value;
  }
}
