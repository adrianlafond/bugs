import Point from './geom/point';
import {
  degreesToRadians,
  normalizeRadians,
} from './geom/angle';
import Leg, { LegData, MAXIMUM_LENGTH } from './leg';
import Vector from './geom/vector';

export interface SegmentOptions {
  position?: Point;
  radians?: number;
  progress?: number;
  step?: number;
  target?: Vector;
  legs?: Leg[];
}

export interface LegLayout {
  joint: { distance: number, radians: number };
  foot: { distance: number, radians: number };
}

export interface SegmentLayout {
  position: Vector;
  legs: LegLayout[];
}

export interface SegmentModel extends SegmentOptions {
  start?: Vector;
  layout?: SegmentLayout;
}

export interface SegmentData {
  x: number;
  y: number;
  radians: number;
  legs: LegData[];
}

export default class Segment {
  private model: SegmentModel;

  constructor(options: SegmentOptions = {}) {
    const {
      position = new Point(),
      radians = -Math.PI / 2,
      progress = 0,
      step = 0,
      target = new Vector(),
      legs = [],
    } = options;
    legs[0] = legs[0] || new Leg({
      joint: position.clone(),
      foot: position.clone().add(new Point(MAXIMUM_LENGTH / 2, 0)),
    });
    legs[1] = legs[1] || new Leg({
      joint: position.clone(),
      foot: position.clone().add(new Point(-MAXIMUM_LENGTH / 2, 0)),
    });
    this.model = { position, radians, legs };
    this.writeLayout();
    this.step = constrainStep(step);
    this.target = target;
    this.progress = progress;
  }

  get data(): SegmentData {
    const { x, y } = this.position;
    const { radians, legs } = this;
    return {
      x, y, radians, legs
    };
  }

  get position(): Point {
    return this.model.position.clone();
  }

  get radians(): number {
    return this.model.radians;
  }

  get progress(): number {
    return this.model.progress;
  }

  set progress(value: number) {
    const progress = Math.max(0, Math.min(1.0, value));
    this.moveSegment(progress);
    this.moveJoints();
    // this.moveFeet(progress);
    this.updateProgress(progress);
  }

  private moveSegment(progress: number) {
    const { position, target, start } = this.model;
    position.x = (target.x - start.x) * progress + start.x;
    position.y = (target.y - start.y) * progress + start.y;
    this.model.radians = normalizeRadians((target.angle - start.angle)
      * progress + start.angle);
  }

  private moveJoints() {
    const { layout, position, radians } = this.model;
    layout.legs.forEach((leg, index) => {
      const jointLayout = layout.legs[index].joint;
      const jointRadians = jointLayout.radians + radians;
      const jointPoint = new Point(
        Math.cos(jointRadians) * jointLayout.distance + position.x,
        Math.sin(jointRadians) * jointLayout.distance + position.y,
      );
      this.model.legs[index].moveJoint(jointPoint, jointRadians);
    });
  }

  private moveFeet(progress: number) {
    this.model.legs[this.step].progress = progress;
  }

  private updateProgress(progress: number) {
    const { progress: prevProgress } = this.model;
    this.model.progress = progress;
    if (prevProgress < 1 && progress >= 1) {
      this.model.step = this.model.step === 1 ? 0 : 1;
    }
  }

  get step(): number {
    return this.model.step;
  }

  set step(value: number) {
    this.legs[this.step || 0].planted = true;
    this.model.step = constrainStep(value);
    this.legs[this.step].planted = false;
    this.model.progress = 0;
  }

  get target(): Vector {
    return this.model.target;
  }

  set target(value: Vector) {
    this.model.target = value;
    this.model.start = new Vector(this.position, this.radians);

    const { target } = this.model;
    const { position, legs } = this.model.layout;
    const deltaAngle = normalizeRadians(target.angle - position.angle);
    const deltaDistance = Point.distance(target.point, position.point);

    const leg = this.model.legs[this.step];
    const legLayout = legs[this.step];
    const radians = normalizeRadians(legLayout.foot.radians + deltaAngle);
    leg.target = new Point(
      Math.cos(legLayout.foot.distance) * radians + target.point.x,
      Math.sin(legLayout.foot.distance) * radians + target.point.y,
    );

    this.progress = 0;
  }

  get legs(): LegData[] {
    return this.model.legs.map(leg => leg.data);
  }

  get layout(): SegmentLayout {
    const { position, legs } = this.model.layout;
    return {
      position: position.clone(),
      legs: legs.map(leg => ({
        joint: { distance: leg.joint.distance, radians: leg.joint.radians },
        foot: { distance: leg.foot.distance, radians: leg.foot.radians },
      })),
    };
  }

  private writeLayout() {
    const { position, radians, legs } = this.model;
    this.model.layout = {
      position: new Vector(position, radians),
      legs: legs.map(leg => {
        return {
          joint: {
            distance: Point.distance(position, leg.joint),
            radians: Point.radians(position, leg.joint),
          },
          foot: {
            distance: Point.distance(position, leg.foot),
            radians: Point.radians(position, leg.foot),
          }
        };
      }),
    };
  }
}

function constrainStep(value: number): number {
  return Math.round(Math.max(0, Math.min(1, value)));
}