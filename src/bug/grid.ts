import { Point, Vector, Angle } from '@adrianlafond/geom';

export interface GridData {
  cells: Array<Array<boolean>>;
  resolution: number;
}

class Grid {

  constructor(public data: GridData) {}

  isSafe(point: Point): boolean {
    const { cells, resolution } = this.data;
    const column = Math.floor(point.x / resolution);
    if (cells[column]) {
      const row = Math.floor(point.y / resolution);
      if (row) {
        return cells[column][row];
      }
    }
    return false;
  }

  aquireTarget(target: Vector): Vector {
    if (this.isSafe(target.point)) {
      return target;
    }
    console.log('unsafe');
    let newTarget = target.clone();
    newTarget.radians = Angle.normalize(newTarget.radians + 0.1);
    newTarget.x += Math.cos(newTarget.radians) * 1;
    newTarget.y += Math.sin(newTarget.radians) * 1;
    while (!this.isSafe(newTarget.point)) {
      newTarget.radians = Angle.normalize(newTarget.radians + 0.1);
      newTarget.x += Math.cos(newTarget.radians) * 1;
      newTarget.y += Math.sin(newTarget.radians) * 1
    }
    return newTarget;
  }
}

export default Grid;
