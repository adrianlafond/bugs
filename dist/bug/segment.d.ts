import { Point, PointData, Vector, VectorData } from '@adrianlafond/geom';
import { Leg } from './leg';
import { WorldApi, idType } from '../world';
export interface SegmentModel {
    uid: idType;
    vector: Vector;
    legs: Leg[][];
    maxRotation: number;
    maxDistance: number;
    target: Point;
    stepTarget: Point;
    vectorStart: Vector;
    step: number;
    onTargetReached: (target?: Point) => void | null;
    world?: WorldApi | null;
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
    world?: WorldApi;
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
