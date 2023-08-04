import Point from './point';
export interface VectorData {
    x: number;
    y: number;
    radians: number;
}
export default class Vector {
    private model;
    constructor(x_point?: number | Point, y_point?: number, radians?: number);
    readonly point: Point;
    x: number;
    y: number;
    radians: number;
    readonly data: VectorData;
    clone(): Vector;
    toString(): string;
}
