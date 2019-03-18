import { PointData, VectorData } from '@adrianlafond/geom';
import Segment from './segment';
import Leg from './leg';
export interface BugOptions {
    x?: number;
    y?: number;
    radians?: number;
}
interface BugModel {
    segments: Segment[];
    legs: Leg[];
}
declare class Bug {
    protected model: BugModel;
    constructor(options?: BugOptions);
    tick(delta?: number): Bug;
    x: number;
    y: number;
    radians: number;
    readonly segments: VectorData[];
    readonly legs: Array<PointData[]>;
}
export default Bug;
