import { Point, PointData } from '@adrianlafond/geom';
import { Segment, SegmentData } from './segment';
import { willHitObstacleType } from '../world';
export interface BugOptions {
    x?: number;
    y?: number;
    radians?: number;
    target?: {
        x?: number;
        y?: number;
    };
    onTargetReached?: (target?: Point) => void;
    willHitObstacle?: willHitObstacleType;
}
interface BugModel {
    segments: Segment[];
    target: Point;
    progress: number;
    onTargetReached: (target?: Point) => void;
    willHitObstacle?: willHitObstacleType;
}
export declare class Bug {
    protected model: BugModel;
    constructor(options?: BugOptions);
    tick(delta?: number): Bug;
    target: PointData;
    x: number;
    y: number;
    radians: number;
    readonly segments: SegmentData[];
    private onTargetReached;
}
export {};
