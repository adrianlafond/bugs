import { Point } from '@adrianlafond/geom';

export type hitFromType = 'top' | 'right' | 'bottom' | 'left';
export type obstacleHitType = {
  obstacle: Obstacle;
  from: hitFromType;
} | null;
export type willHitObstacleType = (location: Point, target: Point, threshold: number) => obstacleHitType;

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

let n = 0;
function getUid() {
  return `obstacle-${n++}`;
}

export class World implements WorldApi {
  private obstacles: Obstacle[] = [];

  addObstacle(obstacle: Obstacle) {
    const copy = { ...obstacle };
    const existingIndex = this.obstacles.findIndex(item => item.id === copy.id);
    if (existingIndex !== -1) {
      this.obstacles.splice(existingIndex, 1, copy);
    } else {
      copy.id = copy.hasOwnProperty('id') ? copy.id : getUid();
      this.obstacles.push(copy);
    }
    return { ...copy };
  }

  removeObstacle(id: string | Obstacle) {
    const searchId = (typeof id === 'string') ? id : id.id;
    const searchIndex = this.obstacles.findIndex(item => item.id === searchId);
    if (searchIndex !== -1) {
      this.obstacles.splice(searchIndex, 1);
    }
  }

  willHitObstacle(current: Point, target: Point, threshold: number): obstacleHitType {
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
          // TODO: find closest obstacle side to determine correct `from`.
          const distances = [ty - y, x2 - tx, y2 - ty, tx - x];
          const fromValues = ['top', 'right', 'bottom', 'left'];
          let closest = Number.MAX_VALUE;
          distances.forEach((d, i) => {
            if (d >= 0 && d < closest) {
              closest = d;
              from = fromValues[i] as hitFromType;
            }
          });
        }
        return true;
      }
    });

    return obstacle ? {
      obstacle: { ...obstacle },
      from
    } : null;
  }

  /**
   * @param {Vector} vector Location of an object/bug.
   * @param {number} threshold Pixels distance between vector and obstacle.
   * @returns {Vector} Compenstation for obstacle, if any.
   */
  // accountForObstacles(start: Point, vector: Vector, threshold: number): Vector {
  //   this.obstacles.some(obstacle => {
  //     if (hitsObstacle(obstacle, vector.point, threshold)) {
  //       const distance = Point.distance(start, vector.point);
  //       if (hitsX(obstacle, start, threshold)) {
  //         vector.y = start.y;
  //         // const radians = vector.x > start.x ? 0 : Math.PI;
  //         const radians = 0;
  //         vector.x += distance; // Math.cos(radians) * distance;
  //       } else if (hitsY(obstacle, start, threshold)) {
  //         vector.x = start.x;
  //         const radians = vector.y > start.y ? Math.PI * 0.5 : Math.PI * 1.5;
  //         vector.y = start.y + Math.sin(radians) * distance;
  //       }
  //       return true;
  //     }
  //     return false;
  //   });
  //   return vector;
  // }
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
