import { Point } from '@adrianlafond/geom';

export type navigateWorldType = (current: Point, target: Point) => Point;
export interface WorldApi {
  fillBlock: (x: number, y: number) => Point | null;
  clearBlock: (x: number, y: number) => Point | null;
  clear: () => void;
  navigateWorld: (current: Point, target: Point) => Point;
}

export interface WorldBlock {
  point: Point;
  column: number;
  row: number;
  filled: boolean;
}

type Direction = 'TL' | 'T' | 'TR' | 'R' | 'BR' | 'B' | 'BL' | 'L';

const go: { [key in Direction]: Direction[] } = {
  TL: ['TL', 'T', 'L', 'TR', 'BL', 'R', 'B', 'BR'],
  T: ['T', 'TR', 'TL', 'R', 'L', 'BR', 'BL', 'B'],
  TR: ['TR', 'R', 'T', 'BR', 'TL', 'B', 'L', 'BL'],
  R: ['R', 'BR', 'TR', 'B', 'T', 'BL', 'TL', 'L'],
  BR: ['BR', 'B', 'R', 'BL', 'TL', 'L', 'T', 'TL'],
  B: ['B', 'BL', 'BR', 'L', 'R', 'TL', 'TR', 'T'],
  BL: ['BL', 'L', 'B', 'TL', 'BR', 'T', 'R', 'TR'],
  L: ['L', 'TL', 'BL', 'T', 'B', 'TR', 'BR', 'R']
};

function isDiagonal(direction: Direction): boolean {
  return direction === 'TL' || direction === 'TR' || direction === 'BR' || direction === 'BL';
}

export class World implements WorldApi {
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
          column: c,
          row: r,
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

  clear() {
    this.grid.forEach(col => {
      col.forEach(row => {
        row.filled = false;
      });
    })
  }

  navigateWorld(current: Point, target: Point): Point {
    const currentBlock = this.getBlockFromXY(current.x, current.y);
    if (currentBlock) {
      const radians = Point.radians(current, target);
      const radius = Math.sqrt((this.blockSize + this.blockSize) * (this.blockSize + this.blockSize));
      let targetBlock = this.getBlockFromXY(
        current.x + Math.cos(radians) * radius,
        current.y + Math.sin(radians) * radius,
      );
      if (targetBlock) {
        targetBlock = this.getBestBlock(currentBlock, targetBlock);
      }
      return (targetBlock || currentBlock).point;
    }
    return target;
  }

  private getBestBlock(currentBlock: WorldBlock, targetBlock: WorldBlock): WorldBlock {
    const { column: cx, row: cy } = currentBlock;
    const { column: tx, row: ty } = targetBlock;
    if (cx > tx && cy > ty) {
      return this.getOpenBlock(currentBlock, go.TL);
    } else if (cx === tx && cy > ty) {
      return this.getOpenBlock(currentBlock, go.T);
    } else if (cx < tx && cy > ty) {
      return this.getOpenBlock(currentBlock, go.TR);
    } else if (cx < tx && cy === ty) {
      return this.getOpenBlock(currentBlock, go.R);
    } else if (cx < tx && cy < ty) {
      return this.getOpenBlock(currentBlock, go.BR);
    } else if (cx === tx && cy < ty) {
      return this.getOpenBlock(currentBlock, go.B);
    } else if (cx > tx && cy < ty) {
      return this.getOpenBlock(currentBlock, go.BL);
    } else if (cx > tx && cy === ty) {
      return this.getOpenBlock(currentBlock, go.L);
    }
    return currentBlock;
  }

  private getOpenBlock(currentBlock: WorldBlock, directions: Direction[]): WorldBlock {
    for (const dir of directions) {
      const block = this.getBlockForDirection(currentBlock, dir);
      if (block && !block.filled) {
        if (isDiagonal(dir)) {
          let b1: WorldBlock | null;
          let b2: WorldBlock | null;
          switch (dir) {
            case 'TL':
              b1 = this.getBlockForDirection(currentBlock, 'T');
              b2 = this.getBlockForDirection(currentBlock, 'L');
              break;
            case 'TR':
              b1 = this.getBlockForDirection(currentBlock, 'R');
              b2 = this.getBlockForDirection(currentBlock, 'T');
              break;
            case 'BR':
              b1 = this.getBlockForDirection(currentBlock, 'B');
              b2 = this.getBlockForDirection(currentBlock, 'R');
              break;
            case 'BL':
              b1 = this.getBlockForDirection(currentBlock, 'L');
              b2 = this.getBlockForDirection(currentBlock, 'B');
              break;
            default:
              break;
          }
          const b1Ok = b1 && !b1.filled;
          const b2Ok = b2 && !b2.filled;
          if (b1Ok && b2Ok) {
            return block;
          } else if (b1Ok && !b2Ok) {
            return b1;
          } else if (!b1Ok && b2Ok) {
            return b2;
          }
        } else {
          return block;
        }
      }
    }
    return currentBlock;
  }

  private getBlockForDirection(currentBlock: WorldBlock, direction: Direction): WorldBlock | null {
    const { column: cx, row: cy } = currentBlock;
    const { columns, rows } = this.maxGridLengths();
    const maxColumn = columns - 1;
    const maxRow = rows - 1;
    switch (direction) {
      case 'TL':
        return cx > 0 && cy > 0 ? this.grid[cx - 1][cy - 1] : null;
      case 'T':
        return cy > 0 ? this.grid[cx][cy - 1] : null;
      case 'TR':
        return cx < maxColumn && cy > 0 ? this.grid[cx + 1][cy - 1] : null;
      case 'R':
        return cx < maxColumn ? this.grid[cx + 1][cy] : null;
      case 'BR':
        return cx < maxColumn && cy < maxRow ? this.grid[cx + 1][cy + 1] : null;
      case 'B':
        return cy < maxRow ? this.grid[cx][cy + 1] : null;
      case 'BL':
        return cx > 0 && cy < maxRow ? this.grid[cx - 1][cy + 1] : null;
      case 'L':
        return cx > 0 ? this.grid[cx - 1][cy] : null;
      default:
        return null;
    }
  }

  private getBlockFromXY(x: number, y: number) {
    const { columns, rows } = this.maxGridLengths();
    const col = Math.max(0, Math.min(columns - 1, Math.floor(x / this.width * columns)));
    const row = Math.max(0, Math.min(rows - 1, Math.floor(y / this.height * rows)));
    return (this.grid[col] && this.grid[col][row]) ? this.grid[col][row] : null;
  }

  private maxGridLengths() {
    return { columns: this.maxColumns(), rows: this.maxRows() };
  }

  private maxColumns() {
    return this.grid.length;
  }

  private maxRows() {
    return this.grid[0].length;
  }
}
