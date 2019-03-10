
export interface BugOptions {
  x?: number;
  y?: number;
}

interface BugModel {
  x: number;
  y: number;
}

class Bug {
  private model: BugModel = {
    x: 0,
    y: 0,
  };

  constructor(options: BugOptions = {}) {
    this.model = { ...this.model, ...options};
  }

  get x(): number {
    return this.model.x;
  }

  get y(): number {
    return this.model.y;
  }
}

export default Bug;
