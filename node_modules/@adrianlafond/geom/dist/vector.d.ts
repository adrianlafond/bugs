import Point from './point';
export interface VectorData {
    x: number;
    y: number;
    radians: number;
}
export default class Vector {
    private model;
    constructor(x_point?: number | Point, y_point?: number, radians?: number);
    get point(): Point;
    get x(): number;
    set x(value: number);
    get y(): number;
    set y(value: number);
    get radians(): number;
    set radians(value: number);
    get data(): VectorData;
    clone(): Vector;
    toString(): string;
}
