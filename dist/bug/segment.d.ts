import { Point, PointData, Vector, VectorData } from '@adrianlafond/geom';
import { Leg } from './leg';
import { navigateWorldType } from '../world';
export interface SegmentModel {
    vector: Vector;
    legs: Leg[][];
    maxRotation: number;
    maxDistance: number;
    target: Point;
    stepTarget: Point;
    previousStepTarget: Point;
    vectorStart: Vector;
    step: number;
    onTargetReached: (target?: Point) => void | null;
    navigateWorld?: navigateWorldType | null;
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
    navigateWorld?: navigateWorldType;
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
