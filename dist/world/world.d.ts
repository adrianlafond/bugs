import { Vector } from '@adrianlafond/geom';
export interface Obstacle {
    id?: string;
    x: number;
    y: number;
    width: number;
    height: number;
}
export declare class World {
    private obstacles;
    addObstacle(obstacle: Obstacle): {
        id?: string;
        x: number;
        y: number;
        width: number;
        height: number;
    };
    removeObstacle(id: string | Obstacle): void;
    /**
     * @param {Vector} vector Location and direction a bug.
     * @param {number} threshold Pixels distance between vector and obstacle.
     * @returns {Vector} Compenstation for obstacle, if any.
     */
    accountForObstacles(vector: Vector, threshold: number): Vector;
}
