import * as PIXI from 'pixi.js';
import Skin from './skin';
import Bug from '../bug';
declare class Pixi implements Skin {
    bug: Bug;
    app: PIXI.Application;
    container: PIXI.Container;
    segments: PIXI.Container[];
    legs: PIXI.Graphics[];
    constructor(bug: Bug, app: PIXI.Application);
    render(delta?: number): Pixi;
    protected renderSegments(): void;
    protected renderLegs(): void;
    protected createParts(): void;
    protected createSegments(): void;
    protected createNose(): PIXI.Sprite;
    protected destroyLegs(): void;
}
export default Pixi;
