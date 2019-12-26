import { Vector } from '@adrianlafond/geom';

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

export class World {
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

  /**
   * @param {Vector} vector Location and direction a bug.
   * @param {number} threshold Pixels distance between vector and obstacle.
   * @returns {Vector} Compenstation for obstacle, if any.
   */
  accountForObstacles(vector: Vector, threshold: number): Vector {
    return new Vector();
  }
}
