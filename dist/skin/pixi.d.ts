import Skin from './skin';
import Bug from '../bug';
declare class Pixi implements Skin {
    bug: Bug;
    constructor(bug: Bug);
    render(delta?: number): Pixi;
}
export default Pixi;
