import Point from './geom/point';
import {
  degreesToRadians,
  radiansToDegrees,
  normalizeDegrees,
} from './geom/angle';
import Leg, { LegData } from './leg';
import Vector from './geom/vector';

export interface SegmentOptions {
  position?: Point;
  degrees?: number;
  radians?: number;
  progress?: number;
  target?: Vector;
  legs?: Leg[];
}

export interface SegmentModel extends SegmentOptions {
  start?: Vector;
}

export default class Segment {
  private model: SegmentModel;

  constructor(options: SegmentOptions = {}) {
    const {
      position = new Point(),
      progress = 0,
      target = new Vector(),
      legs = [new Leg(), new Leg()],
    } = options;
    let { degrees = 0, radians } = options;
    if (radians !== undefined) {
      degrees = radiansToDegrees(radians);
    } else {
      radians = degreesToRadians(degrees);
    }
    this.model = { position, degrees, radians, legs };
    this.target = target;
    this.progress = progress;
  }

  get position(): Point {
    return this.model.position.clone();
  }

  get degrees(): number {
    return this.model.degrees;
  }

  get radians(): number {
    return this.model.radians;
  }

  get progress(): number {
    return this.model.progress;
  }

  set progress(value: number) {
    this.model.progress = Math.max(0, Math.min(1.0, value));
    const { position, progress, target, start } = this.model;
    position.x = (target.x - start.x) * progress + start.x;
    position.y = (target.y - start.y) * progress + start.y;
    this.model.degrees = normalizeDegrees((target.angle - start.angle)
      * progress + start.angle);
    this.model.radians = degreesToRadians(this.model.degrees);
  }

  get target(): Vector {
    return this.model.target;
  }

  set target(value: Vector) {
    this.model.target = value;
    this.model.start = new Vector(this.position, this.degrees);
    this.progress = 0;
  }

  get legs(): LegData[] {
    return this.model.legs.map(leg => leg.data);
  }
}
