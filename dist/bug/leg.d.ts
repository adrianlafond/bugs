import { Point, PointData, Vector } from '@adrianlafond/geom';
export interface LegOptions {
    joints: Point[];
}
export interface LegModel extends LegOptions {
    map: Point[];
    jointsStart: Point[];
}
export default class Leg {
    protected model: LegModel;
    constructor(options: LegOptions);
    offset(x: number, y: number, index?: number): void;
    offsetAll(x: number, y: number): void;
    tick(vector: Vector, progress: number): void;
    step(): void;
    readonly data: PointData[];
    private clone;
}
