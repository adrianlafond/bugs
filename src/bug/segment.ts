import { Angle, Point, PointData, Vector, VectorData } from '@adrianlafond/geom';
import { Leg } from './leg';
import { willHitObstacleType } from '../world';

export interface SegmentModel {
  vector: Vector;
  legs: Leg[][];
  maxRotation: number;
  maxDistance: number;
  target: Point;
  stepTarget: Point;
  vectorStart: Vector;
  step: number;
  onTargetReached: (target?: Point) => void | null;
  willHitObstacle: willHitObstacleType | null;
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
  willHitObstacle?: willHitObstacleType;
}

export class Segment {
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
    stepTarget: new Point(),
    vectorStart: new Vector(),
    step: 0,
    onTargetReached: null,
    willHitObstacle: null,
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

  tick(progress = 0) {
    const { target, vectorStart, maxDistance } = this.model;
    const distance = Math.min(maxDistance, Point.distance(target, vectorStart.point));
    this.moveSegment(progress, distance);
    this.moveLegs(progress, distance);
  }

  step() {
    this.restartStep();
    this.model.step = (this.model.step + 1) % this.model.legs.length;
  }

  restartStep() {
    const { maxDistance: threshold, vector, target, willHitObstacle } = this.model;
    this.model.vectorStart = vector.clone();
    this.model.stepTarget = target.clone();

    if (willHitObstacle) {
      this.model.stepTarget = willHitObstacle(vector.point, this.model.stepTarget, target, threshold);
      // const { stepTarget, vectorStart } = this.model;
      // const hit = willHitObstacle(vector.point, target, threshold);
      // if (hit) {
      //   if (hit.from === 'left') {
      //     stepTarget.x = hit.obstacle.x - threshold * 2;
      //   } else if (hit.from === 'right') {
      //     stepTarget.x = hit.obstacle.x + hit.obstacle.width + threshold * 2;
      //   } else if (hit.from === 'top') {
      //     stepTarget.y = hit.obstacle.y - threshold * 2;
      //   } else if (hit.from === 'bottom') {
      //     stepTarget.y = hit.obstacle.y + hit.obstacle.height + threshold * 2;
      //   }

      //   if (hit.from === 'left' || hit.from === 'right') {
      //     const topIsClosest = stepTarget.y - hit.obstacle.y <
      //       hit.obstacle.y + hit.obstacle.height - stepTarget.y
      //     stepTarget.y = topIsClosest ? (hit.obstacle.y - threshold) :
      //       (hit.obstacle.y + hit.obstacle.height + threshold);
      //   } else {
      //     const leftIsClosest = stepTarget.x - hit.obstacle.x <
      //       hit.obstacle.x + hit.obstacle.width - stepTarget.x;
      //     stepTarget.x = leftIsClosest ? (hit.obstacle.x - threshold) :
      //       (hit.obstacle.x + hit.obstacle.width + threshold);
      //   }
      // }
    }
    this.model.legs.forEach(side => {
      side.forEach(leg => {
        leg.restartStep();
      })
    });
  }

  private moveSegment(progress: number, distance: number) {
    const { stepTarget, target, vector, vectorStart, maxDistance, maxRotation, onTargetReached } = this.model;

    const targetRadians = Math.atan2(stepTarget.y - vectorStart.y, stepTarget.x - vectorStart.x);
    const deltaRadians = Math.max(-maxRotation, Math.min(maxRotation,
      Angle.delta(vector.radians, targetRadians)));
    vector.radians = Angle.normalize(vectorStart.radians) + deltaRadians * progress;

    const radiansDelta = Math.abs(Angle.normalize(targetRadians) - vector.radians);
    const radiansDamper = 1 - radiansDelta / (Math.PI * 2);
    const moveDistance = distance * progress * radiansDamper;
    vector.x = vectorStart.x + Math.cos(targetRadians) * moveDistance;
    vector.y = vectorStart.y + Math.sin(targetRadians) * moveDistance;

    if (onTargetReached) {
      if (Point.distance(target, vector.point) <= maxDistance) {
        onTargetReached(target);
      }
    }
  }

  private moveLegs(progress: number, distance: number) {
    const { legs, vector, vectorStart } = this.model;
    legs.forEach((side, sideIndex) => {
      side.forEach(leg => {
        leg.offset(vector);
      });
      if (sideIndex === this.model.step) {
        const targetVector = new Vector(
          vectorStart.x + Math.cos(vector.radians) * distance,
          vectorStart.y + Math.sin(vector.radians) * distance,
          vector.radians);
        side.forEach(leg => {
          leg.tick(targetVector, progress);
        });
      }
    });
  }

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

  get data(): SegmentData {
    return {
      ...this.model.vector.data,
      legs: this.model.legs.map((side: Leg[]) => (
        side.map((leg: Leg) => leg.data)
      )),
    };
  }
}
