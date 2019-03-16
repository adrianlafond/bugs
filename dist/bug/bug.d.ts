import Segment, { SegmentData } from './segment';
export interface BugOptions {
    x?: number;
    y?: number;
    radians?: number;
}
interface BugModel {
    segments: Segment[];
}
declare class Bug {
    protected model: BugModel;
    constructor(options?: BugOptions);
    tick(delta?: number): Bug;
    x: number;
    y: number;
    radians: number;
    readonly segments: SegmentData[];
}
export default Bug;
