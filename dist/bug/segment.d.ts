import { Point, PointData, Vector, VectorData } from '@adrianlafond/geom';
import { Leg } from './leg';
export interface SegmentModel {
    vector: Vector;
    legs: Leg[][];
    maxRotation: number;
    maxDistance: number;
    target: Point;
    vectorStart: Vector;
    step: number;
    onTargetReached: (target?: Point) => void | null;
    accountForObstacles: (vector: Vector, threshold: number) => Vector | null;
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
    accountForObstacles?: (vector: Vector, threshold: number) => Vector;
}
export declare class Segment {
    protected model: SegmentModel;
    constructor(options: SegmentOptions);
    target: Point;
    tick(progress?: number): void;
    step(): void;
    restartStep(): void;
    private moveSegment;
    private moveLegs;
    x: number;
    y: number;
    radians: number;
    readonly data: SegmentData;
}
