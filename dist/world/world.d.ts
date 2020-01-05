import { Point } from '@adrianlafond/geom';
export declare type hitFromType = 'top' | 'right' | 'bottom' | 'left' | 'unknown';
export declare type obstacleHitType = {
    obstacle: Obstacle;
    from: hitFromType;
} | null;
export declare type willHitObstacleType = (location: Point, stepTarget: Point, ultimateTarget: Point, threshold: number) => Point;
export declare type navigateWorldType = (current: Point, target: Point) => Point;
export interface WorldApi {
    navigateWorld: navigateWorldType;
}
export interface WorldBlock {
    point: Point;
    column: number;
    row: number;
    filled: boolean;
}
export interface Obstacle {
    id?: string;
    x: number;
    y: number;
    width: number;
    height: number;
}
export declare class World implements WorldApi {
    private width;
    private height;
    private blockSize;
    private obstacles;
    private grid;
    constructor(width?: number, height?: number, blockSize?: number);
    private createGrid;
    fillBlock(x: number, y: number): Point;
    clearBlock(x: number, y: number): Point;
    navigateWorld(current: Point, target: Point): Point;
    private isTargetBlockUnsafe;
    private getNextBestBlock;
    private getBlockFromXY;
    private maxGridLengths;
    private maxColumns;
    private maxRows;
    willHitObstacleY(current: Point, stepTarget: Point, ultimateTarget: Point, threshold: number): Point;
    willHitObstacleX(current: Point, target: Point, threshold: number): obstacleHitType;
}
