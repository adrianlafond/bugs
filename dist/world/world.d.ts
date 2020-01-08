import { Point } from '@adrianlafond/geom';
export declare type idType = string | number;
export declare type navigateWorldType = (current: Point, target: Point) => Point;
export interface WorldApi {
    fillBlock: (x: number, y: number, id: idType) => Point | null;
    clearBlock: (x: number, y: number, id: idType) => Point | null;
    clear: () => void;
    navigateWorld: (current: Point, target: Point) => Point;
}
export interface WorldBlock {
    point: Point;
    column: number;
    row: number;
    occupants: Set<idType>;
}
export declare class World implements WorldApi {
    private width;
    private height;
    private blockSize;
    private grid;
    constructor(width?: number, height?: number, blockSize?: number);
    private createGrid;
    fillBlock(x: number, y: number, id: string | number): Point;
    clearBlock(x: number, y: number, id: string | number): Point;
    clear(): void;
    navigateWorld(current: Point, target: Point): Point;
    private getBestBlock;
    private getOpenBlock;
    private getBlockForDirection;
    private getBlockFromXY;
    private maxGridLengths;
    private maxColumns;
    private maxRows;
}
