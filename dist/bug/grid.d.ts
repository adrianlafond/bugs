import { Point, Vector } from '@adrianlafond/geom';
export interface GridData {
    cells: Array<Array<boolean>>;
    resolution: number;
}
declare class Grid {
    data: GridData;
    constructor(data: GridData);
    isSafe(point: Point): boolean;
    aquireTarget(target: Vector): Vector;
}
export default Grid;
