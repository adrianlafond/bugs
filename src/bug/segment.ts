import { Angle, Point, PointData, Vector, VectorData } from '@adrianlafond/geom';
import Leg from './leg';

export interface SegmentModel {
  vector: Vector;
  legs: Leg[][];
  maxRotation: number;
  maxDistance: number;
  progress: number;
  target: Point;
  tickTarget: Vector;
  vectorStart: Vector;
  step: number;
  onTargetReached: (target?: Point) => void | null;
}

export interface SegmentData extends VectorData {
  legs: PointData[][][];
}

export interface SegmentOptions {
  vector?: Vector;
  legs?: Leg[][];
  maxRotation?: number;
  maxDistance?: number;
  target?: Point;
  onTargetReached?: (target?: Point) => void;
}

export default class Segment {
  protected model: SegmentModel = {
    vector: new Vector(),
    legs: [
      [new Leg({ joints: [new Point(2, -5), new Point(12, -14)] }),
        new Leg({ joints: [new Point(0, -5), new Point(0, -16)] }),
        new Leg({ joints: [new Point(-4, -5), new Point(-8, -12)] })],
      [new Leg({ joints: [new Point(2, 5), new Point(12, 14)] }),
        new Leg({ joints: [new Point(0, 5), new Point(0, 16)] }),
        new Leg({ joints: [new Point(-4, 5), new Point(-8, 12)] })],
    ],
    maxRotation: Math.PI * 0.5,
    maxDistance: 10,
    target: new Point(),
    tickTarget: new Vector(),
    vectorStart: new Vector(),
    step: 0,
    onTargetReached: null,
  };

  constructor(options: SegmentOptions) {
    this.model = { ...this.model, ...options };
    this.model.vectorStart = this.model.vector.clone();
    this.model.legs.forEach(side => {
      side.forEach(leg => {
        leg.offsetAll(this.model.vector);
      });
    });
    this.step();
  }

  get target(): Point {
    return this.model.target.clone();
  }
  set target(value: Point) {
    this.model.target = value;
  }

  defineTarget(progress = 0): Vector {
    const { target, vector, vectorStart, maxDistance, maxRotation } = this.model;
    const distance = Math.min(maxDistance, Point.distance(target, vectorStart.point));
    const targetRadians = Math.atan2(target.y - vectorStart.y, target.x - vectorStart.x);
    const deltaRadians = Math.max(-maxRotation, Math.min(maxRotation,
      Angle.delta(vector.radians, targetRadians)));
    const targetVector = new Vector();
    targetVector.radians = Angle.normalize(vectorStart.radians) + deltaRadians * progress;
    targetVector.x = vectorStart.x + Math.cos(targetVector.radians) * (distance * progress);
    targetVector.y = vectorStart.y + Math.sin(targetVector.radians) * (distance * progress);
    this.model.progress = progress;
    return targetVector;
  }

  updateTarget(target: Vector) {
    this.model.tickTarget = target;
  }

  // tick(progress = 0) {
  //   const { tickTarget, vectorStart, maxDistance } = this.model;
  //   const distance = Math.min(maxDistance, Point.distance(tickTarget, vectorStart.point));
  //   this.moveSegment(progress, distance);
  //   this.moveLegs(progress, distance);
  // }
  tick() {
    const { maxDistance, tickTarget, vector } = this.model;
    const distance = Math.min(maxDistance, Point.distance(tickTarget.point, vector.point));
    this.moveSegment();
    this.moveLegs(distance);
  }

  step() {
    this.restartStep();
    this.model.step = (this.model.step + 1) % this.model.legs.length;
  }

  restartStep() {
    this.model.vectorStart = this.model.vector.clone();
    this.model.legs.forEach(side => {
      side.forEach(leg => {
        leg.restartStep();
      })
    });
  }

  private moveSegment() {
    const { tickTarget, vector } = this.model;
    vector.radians = tickTarget.radians;
    vector.x = tickTarget.x;
    vector.y = tickTarget.y;
  }

  // private moveSegment(progress: number, distance: number) {
  //   const { target, vector, vectorStart, maxDistance, maxRotation, onTargetReached } = this.model;

  //   const targetRadians = Math.atan2(target.y - vectorStart.y, target.x - vectorStart.x);
  //   const deltaRadians = Math.max(-maxRotation, Math.min(maxRotation,
  //     Angle.delta(vector.radians, targetRadians)));
  //   vector.radians = Angle.normalize(vectorStart.radians) + deltaRadians * progress;

  //   vector.x = vectorStart.x + Math.cos(vector.radians) * (distance * progress);
  //   vector.y = vectorStart.y + Math.sin(vector.radians) * (distance * progress);

  //   if (onTargetReached) {
  //     if (Point.distance(target, vector.point) <= maxDistance) {
  //       onTargetReached(target);
  //     }
  //   }
  // }

  private moveLegs() {
    const { legs, progress, tickTarget, vector } = this.model;
    legs.forEach((side, sideIndex) => {
      side.forEach(leg => {
        leg.offset(vector);
      });
      if (sideIndex === this.model.step) {
        side.forEach(leg => {
          leg.tick(tickTarget, progress);
        });
      }
    });
  }

  // private moveLegs(progress: number, distance: number) {
  //   const { legs, vector, vectorStart } = this.model;
  //   legs.forEach((side, sideIndex) => {
  //     side.forEach(leg => {
  //       leg.offset(vector);
  //     });
  //     if (sideIndex === this.model.step) {
  //       const targetVector = new Vector(
  //         vectorStart.x + Math.cos(vector.radians) * distance,
  //         vectorStart.y + Math.sin(vector.radians) * distance,
  //         vector.radians);
  //       side.forEach(leg => {
  //         leg.tick(targetVector, progress);
  //       });
  //     }
  //   });
  // }

  get x(): number {
    return this.model.vector.x;
  }
  set x(value: number) {
    this.model.vector.x = value;
  }

  get y(): number {
    return this.model.vector.y;
  }
  set y(value: number) {
    this.model.vector.y = value;
  }

  get radians(): number {
    return this.model.vector.radians;
  }
  set radians(value: number) {
    this.model.vector.radians = value;
  }

  get maxDistance(): number {
    return this.model.maxDistance;
  }

  get data(): SegmentData {
    return {
      ...this.model.vector.data,
      legs: this.model.legs.map((side: Leg[]) => (
        side.map((leg: Leg) => leg.data)
      )),
    };
  }
}
