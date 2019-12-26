import { Point } from '@adrianlafond/geom';
export declare type hitFromType = 'top' | 'right' | 'bottom' | 'left' | 'unknown';
export declare type obstacleHitType = {
    obstacle: Obstacle;
    from: hitFromType;
} | null;
export declare type willHitObstacleType = (location: Point, stepTarget: Point, ultimateTarget: Point, threshold: number) => Point;
export interface WorldApi {
    willHitObstacle: willHitObstacleType;
}
export interface Obstacle {
    id?: string;
    x: number;
    y: number;
    width: number;
    height: number;
}
export declare class World implements WorldApi {
    private obstacles;
    addObstacle(obstacle: Obstacle): {
        id?: string;
        x: number;
        y: number;
        width: number;
        height: number;
    };
    removeObstacle(id: string | Obstacle): void;
    willHitObstacle(current: Point, stepTarget: Point, ultimateTarget: Point, threshold: number): Point;
    willHitObstacleX(current: Point, target: Point, threshold: number): obstacleHitType;
}
