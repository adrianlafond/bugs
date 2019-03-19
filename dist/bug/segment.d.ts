import { Point, PointData, Vector, VectorData } from '@adrianlafond/geom';
import Leg from './leg';
export interface SegmentModel {
    vector: Vector;
    legs: Leg[];
    maxRotation: number;
    maxDistance: number;
    target: Point;
    vectorStart: Vector;
}
export interface SegmentData extends VectorData {
    legs: Array<PointData[]>;
}
export interface SegmentOptions {
    vector?: Vector;
    legs?: Leg[];
    maxRotation?: number;
    maxDistance?: number;
    target?: Point;
}
export default class Segment {
    protected model: SegmentModel;
    constructor(options: SegmentOptions);
    target: Point;
    tick(progress?: number): void;
    step(): void;
    x: number;
    y: number;
    radians: number;
    readonly data: SegmentData;
}
