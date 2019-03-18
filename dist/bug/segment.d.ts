import { Vector, VectorData } from '@adrianlafond/geom';
export interface SegmentModel {
    vector: Vector;
}
export interface SegmentOptions {
    vector?: Vector;
}
export default class Segment {
    protected model: SegmentModel;
    constructor(options: SegmentOptions);
    x: number;
    y: number;
    radians: number;
    readonly data: VectorData;
}
