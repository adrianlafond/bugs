export interface BugOptions {
    x?: number;
    y?: number;
    rotation?: number;
}
declare class Bug {
    private model;
    constructor(options?: BugOptions);
    x: number;
    y: number;
    /**
     * Value is in radians.
     */
    rotation: number;
}
export default Bug;
