import { Point } from '@adrianlafond/geom';

export type hitFromType = 'top' | 'right' | 'bottom' | 'left' | 'unknown';
export type obstacleHitType = {
  obstacle: Obstacle;
  from: hitFromType;
} | null;
export type willHitObstacleType = (location: Point, stepTarget: Point, ultimateTarget: Point, threshold: number) => Point;

export type navigateWorldType = (current: Point, target: Point) => Point;
export interface WorldApi {
  navigateWorld: navigateWorldType;
}

export interface WorldBlock {
  point: Point;
  filled: boolean;
}

export interface Obstacle {
  id?: string;
  x: number;
  y: number;
  width: number;
  height: number;
}

export class World implements WorldApi {
  private obstacles: Obstacle[] = [];

  private grid: WorldBlock[][];

  constructor(private width = 320, private height = 320, private blockSize = 20) {
    this.createGrid();
  }

  private createGrid() {
    this.grid = [];
    const cols = Math.floor(this.width / this.blockSize);
    const rows = Math.floor(this.height / this.blockSize);
    for (let c = 0; c < cols; c++) {
      this.grid[c] = [];
      for (let r = 0; r < rows; r++) {
        this.grid[c][r] = {
          point: new Point(
            c * this.blockSize + this.blockSize / 2,
            r * this.blockSize + this.blockSize / 2),
          filled: false,
        };
      }
    }
  }

  fillBlock(x: number, y: number) {
    const block = this.getBlockFromXY(x, y);
    if (block) {
      block.filled = true;
    }
    return block ? block.point.clone() : null;
  }

  clearBlock(x: number, y: number) {
    const block = this.getBlockFromXY(x, y);
    if (block) {
      block.filled = false;
    }
    return block ? block.point.clone() : null;
  }

  navigateWorld(current: Point, target: Point): Point {
    return current;
  }

  private getBlockFromXY(x: number, y: number) {
    const col = Math.floor((x + this.blockSize / 2) / this.width * this.grid.length);
    const row = Math.floor((y + this.blockSize / 2) / this.height * this.grid[0].length);
    return (this.grid[col] && this.grid[col][row]) ? this.grid[col][row] : null;
  }

  willHitObstacleY(current: Point, stepTarget: Point, ultimateTarget: Point, threshold: number): Point {
    const { x: cx, y: cy } = current;
    const { x: tx, y: ty } = stepTarget;
    let redirectedTarget = stepTarget.clone();

    this.obstacles.some(obstacle => {
      const x1 = obstacle.x - threshold;
      const y1 = obstacle.y - threshold;
      const x2 = obstacle.x + obstacle.width + threshold;
      const y2 = obstacle.y + obstacle.height + threshold;

      const thruX = (cx < x2 && tx > x1) || (cx > x1 && tx < x2);
      const thruY = (cy < y2 && ty > y1) || (cy > y1 && ty < y2);

      if (thruX && thruY) {
        const corners = [
          new Point(x1, y1),
          new Point(x2, y1),
          new Point(x2, y2),
          new Point(x1, y2),
        ];

        // Find closest corner:
        let closestDistance = Number.MAX_VALUE;
        let closestCorner: Point;
        corners.forEach(testPoint => {
          const testDistance = Point.distance(current, testPoint);
          if (testDistance < closestDistance) {
            closestDistance = testDistance;
            closestCorner = testPoint;
          }
        });

        // Then find target corner:
        closestDistance = Number.MAX_VALUE;
        corners.forEach(testPoint => {
          if (testPoint.x === closestCorner.x || testPoint.y === closestCorner.y) {
            const testDistance = Point.distance(ultimateTarget, testPoint);
            if (testDistance < closestDistance) {
              closestDistance = testDistance;
              redirectedTarget = testPoint;
            }
          }
        });
        return true;
      }
    });

    return redirectedTarget;
  }

  willHitObstacleX(current: Point, target: Point, threshold: number): obstacleHitType {
    const { x: cx, y: cy } = current;
    const radians = Math.atan2(target.y - cy, target.x - cx);
    const tx = cx + Math.cos(radians) * threshold;
    const ty = cy + Math.sin(radians) * threshold;

    let from: hitFromType = 'top';
    const obstacle = this.obstacles.find(testObstacle => {
      const { x, y, width, height } = testObstacle;
      const x2 = x + width;
      const y2 = y + height;

      const crossesXL = cx < tx && cx + threshold < x && tx - threshold >= x;
      const crossesXR = cx > tx && cx - threshold > x2 && tx + threshold <= x2;
      const isOnX = tx + threshold >= x && tx - threshold <= x2;

      const crossesYT = cy < ty && cy + threshold < y && ty - threshold >= y;
      const crossesYB = cy > ty && cy - threshold > y2 && ty + threshold <= y2;
      const isOnY = ty + threshold >= y && ty - threshold <= y2;

      const hitsX = crossesXL || crossesXR || isOnX;
      const hitsY = crossesYT || crossesYB || isOnY;

      if (hitsX && hitsY) {
        if (crossesXL) {
          from = 'left';
        } else if (crossesXR) {
          from = 'right';
        } else if (crossesYT) {
          from = 'top';
        } else if (crossesYB) {
          from = 'bottom';
        } else {
          const xDis = x - cx;
          const x2Dis = cx - x2;
          const yDis = y - cy;
          const y2Dis = cy - y2;

          if (xDis >= 0 && yDis >= 0) {
            from = xDis >= yDis ? 'left' : 'top';
          } else if (x2Dis >= 0 && yDis >= 0) {
            from = x2Dis >= yDis ? 'right' : 'top';
          } else if (xDis >= 0 && y2Dis >= 0) {
            from = xDis >= y2Dis ? 'left' : 'bottom';
          } else if (x2Dis >= 0 && y2Dis >= 0) {
            from = x2Dis >= y2Dis ? 'right' : 'bottom';
          } else if (xDis >= 0) {
            from = 'left';
          } else if (x2Dis >= 0) {
            from = 'right';
          } else if (yDis >= 0) {
            from = 'top';
          } else if (y2Dis >= 0) {
            from = 'bottom';
          } else {
            from = 'unknown';
          }
        }
        return true;
      }
    });

    return obstacle ? {
      obstacle: { ...obstacle },
      from
    } : null;
  }
}

function hitsX(obstacle: Obstacle, point: Point, threshold: number) {
  const { x, width: w } = obstacle;
  const { x: px } = point;
  return px + threshold >= x && px - threshold <= x + w;
}

function hitsY(obstacle: Obstacle, point: Point, threshold: number) {
  const { y, height: h } = obstacle;
  const { y: py } = point;
  return py + threshold >= y && py - threshold <= y + h;
}

function hitsObstacle(obstacle: Obstacle, point: Point, threshold: number) {
  return hitsX(obstacle, point, threshold) && hitsY(obstacle, point, threshold);
}
