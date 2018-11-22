import LegData from './leg-data';
import Point from './point';

export const DEFAULT_LENGTH: number = 10;


/**
 *
 */
export default class Leg {
  private data: LegData;

  constructor() {
    this.data = {
      joint: new Point(0, 0),
      foot: new Point(DEFAULT_LENGTH, 0),
      start: new Point(DEFAULT_LENGTH, 0),
      target: new Point(),
      progress: 0,
    };
  }

  get joint() {
    const { x, y } = this.data.joint;
    return new Point(x, y);
  }

  set joint(point: Point) {
    this.data.joint = new Point(point.x, point.y);
  }

  get foot() {
    const { x, y } = this.data.foot;
    return new Point(x, y);
  }

  get start() {
    const { x, y } = this.data.start;
    return new Point(x, y);
  }

  get target() {
    const { x, y } = this.data.target;
    return new Point(x, y);
  }

  set target(point: Point) {
    this.data.target = new Point(point.x, point.y);
    this.data.start = new Point(this.data.foot.x, this.data.foot.y);
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
