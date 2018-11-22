import Point from './point';
import Leg, { LegData } from './leg';

export interface SegmentModel {
  position: Point;
  angle: number;
  legs: Leg[];
}

export default class Segment {
  private model: SegmentModel;

  constructor() {
    this.model = {
      position: new Point(),
      angle: 0,
      legs: [new Leg(), new Leg()],
    };
  }

  get position(): Point {
    return this.model.position.clone();
  }

  get angle(): number {
    return this.model.angle;
  }

  get legs(): LegData[] {
    return this.model.legs.map(leg => leg.data);
  }
}
