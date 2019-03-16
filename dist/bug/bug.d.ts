import { VectorData } from '@adrianlafond/geom';
import Segment from './segment';
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
    readonly segments: VectorData[];
}
export default Bug;
