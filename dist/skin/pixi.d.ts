/// <reference types="pixi.js" />
import { Skin } from './skin';
import { Bug } from '../bug';
export declare class Pixi implements Skin {
    bug: Bug;
    app: PIXI.Application;
    container: PIXI.Container;
    segments: PIXI.Container[];
    legs: PIXI.Graphics[];
    constructor(bug: Bug, app: PIXI.Application);
    render(delta?: number): Pixi;
    protected createParts(): void;
    protected createSegments(): void;
    protected createFace(): PIXI.Container;
    protected destroyLegs(): void;
}
