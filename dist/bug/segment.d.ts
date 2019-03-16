import { Vector, VectorData } from '@adrianlafond/geom';
export default class Segment {
    protected model: Vector;
    constructor(options: Vector);
    x: number;
    y: number;
    radians: number;
    readonly data: VectorData;
}
