import { Point, PointData } from '@adrianlafond/geom';
export interface LegModel {
    joints: Point[];
}
export default class Leg {
    protected model: LegModel;
    constructor(options: LegModel);
    readonly data: PointData[];
}
