import { Vector, VectorData } from '@adrianlafond/geom';


export default class Segment {
  protected model: Vector;

  constructor(options: Vector) {
    this.model = options;
  }

  get x(): number {
    return this.model.x;
  }
  set x(value: number) {
    this.model.x = value;
  }

  get y(): number {
    return this.model.y;
  }
  set y(value: number) {
    this.model.y = value;
  }

  get radians(): number {
    return this.model.radians;
  }
  set radians(value: number) {
    this.model.radians = value;
  }

  get data(): VectorData {
    return this.model.data;
  }
}
