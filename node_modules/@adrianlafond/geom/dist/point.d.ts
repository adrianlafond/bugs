/**
 *
 */
export interface PointData {
    x: number;
    y: number;
}
export default class Point {
    x: number;
    y: number;
    constructor(x?: number, y?: number);
    readonly data: PointData;
    clone(): Point;
    add(point: Point): Point;
    subtract(point: Point): Point;
    toString(): string;
    static distance(p1: Point, p2: Point): number;
    static radians(p1: Point, p2: Point): number;
}
