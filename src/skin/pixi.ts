import Skin from './skin';
import Bug from '../bug';

class Pixi implements Skin {
  constructor(public bug: Bug) {}

  render(delta: number = 1): Pixi {
    return this;
  }
}

export default Pixi;
