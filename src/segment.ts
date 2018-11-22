import SegmentData from './segment-data';
import Point from './point';
import Leg from './leg';

export default class Segment {
  private data: SegmentData;

  constructor() {
    this.data = {
      position: new Point(),
      angle: 0,
    };
  }

  get position() {
    return Point.clone(this.data.position);
  }

  get angle() {
    return this.data.angle;
  }
}
