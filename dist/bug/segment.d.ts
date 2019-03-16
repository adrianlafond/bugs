import { PointData, Vector, VectorData } from '@adrianlafond/geom';
import Leg from './leg';
export interface SegmentModel {
    vector: Vector;
    legs: Leg[];
}
export interface SegmentData extends VectorData {
    legs: Array<PointData[]>;
}
export interface SegmentOptions {
    vector?: Vector;
    legs?: Leg[];
}
export default class Segment {
    protected model: SegmentModel;
    constructor(options: SegmentOptions);
    x: number;
    y: number;
    radians: number;
    readonly data: SegmentData;
}
