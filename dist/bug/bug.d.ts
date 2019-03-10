export interface BugOptions {
    x?: number;
    y?: number;
}
declare class Bug {
    private model;
    constructor(options?: BugOptions);
    readonly x: number;
    readonly y: number;
}
export default Bug;
