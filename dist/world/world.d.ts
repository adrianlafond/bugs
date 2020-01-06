import { Point } from '@adrianlafond/geom';
export declare type navigateWorldType = (current: Point, target: Point, prevTarget: Point) => Point;
export interface WorldApi {
    navigateWorld: navigateWorldType;
}
export interface WorldBlock {
    point: Point;
    column: number;
    row: number;
    filled: boolean;
}
export declare class World implements WorldApi {
    private width;
    private height;
    private blockSize;
    private grid;
    constructor(width?: number, height?: number, blockSize?: number);
    private createGrid;
    fillBlock(x: number, y: number): Point;
    clearBlock(x: number, y: number): Point;
    navigateWorld(current: Point, target: Point, prevTarget: Point): Point;
    private getBestBlock;
    private getOpenBlock;
    private getBlockForDirection;
    private getBlockFromXY;
    private maxGridLengths;
    private maxColumns;
    private maxRows;
}
