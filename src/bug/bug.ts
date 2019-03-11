
export interface BugOptions {
  x?: number;
  y?: number;
  rotation?: number;
}

interface BugModel {
  x: number;
  y: number;
  rotation: number;
}

class Bug {
  private model: BugModel = {
    x: 0,
    y: 0,
    rotation: 0,
  };

  constructor(options: BugOptions = {}) {
    this.model = { ...this.model, ...options };
  }

  get x(): number {
    return this.model.x;
  }
  set x(value: number) {
    this.model.x = value;
  }

  get y(): number {
    return this.model.y;
  }
  set y(value: number) {
    this.model.y = value;
  }

  /**
   * Value is in radians.
   */
  get rotation(): number {
    return this.model.rotation;
  }
  set rotation(value: number) {
    this.model.rotation = value;
  }
}

export default Bug;
