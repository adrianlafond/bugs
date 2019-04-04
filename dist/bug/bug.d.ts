import { Point, PointData } from '@adrianlafond/geom';
import Segment, { SegmentData } from './segment';
import Grid, { GridData } from './grid';
export interface BugOptions {
    x?: number;
    y?: number;
    radians?: number;
    target?: {
        x?: number;
        y?: number;
    };
    grid?: GridData;
    onTargetReached?: (target?: Point) => void;
}
interface BugModel {
    segments: Segment[];
    target: Point;
    progress: number;
    grid: Grid | null;
    onTargetReached: (target?: Point) => void;
}
declare class Bug {
    protected model: BugModel;
    constructor(options?: BugOptions);
    tick(delta?: number): Bug;
    target: PointData;
    grid: GridData;
    x: number;
    y: number;
    radians: number;
    readonly segments: SegmentData[];
    private onTargetReached;
}
export default Bug;
