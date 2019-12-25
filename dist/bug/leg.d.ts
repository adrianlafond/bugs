import { Point, PointData, Vector } from '@adrianlafond/geom';
export interface LegOptions {
    joints: Point[];
}
export interface LegModel extends LegOptions {
    map: Vector[];
    jointsStart: Point[];
}
export declare class Leg {
    protected model: LegModel;
    constructor(options: LegOptions);
    offset(vector: Vector, index?: number): void;
    offsetAll(vector: Vector): void;
    tick(vector: Vector, progress: number): void;
    restartStep(): void;
    readonly data: PointData[];
    private clone;
}
