import { Point, PointData, Vector, VectorData } from '@adrianlafond/geom';
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
    protected model: SegmentModel;
    constructor(options: SegmentOptions);
    target: Point;
    defineTarget(progress?: number): Vector;
    updateTarget(target: Vector): void;
    tick(): void;
    step(): void;
    restartStep(): void;
    private moveSegment;
    private moveLegs;
    x: number;
    y: number;
    radians: number;
    readonly maxDistance: number;
    readonly data: SegmentData;
}
