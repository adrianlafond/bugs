import * as PIXI from 'pixi.js';
import Skin from './skin';
import Bug from '../bug';
declare class Pixi implements Skin {
    bug: Bug;
    app: PIXI.Application;
    container: PIXI.Container;
    body: PIXI.Sprite;
    nose: PIXI.Sprite;
    constructor(bug: Bug, app: PIXI.Application);
    createParts(): void;
    createBody(): void;
    createNose(): void;
    render(delta?: number): Pixi;
}
export default Pixi;
