import * as PIXI from 'pixi.js';
import Skin from './skin';
import Bug from '../bug';

const BODY_RADIUS = 8;

class Pixi implements Skin {
  container: PIXI.Container;
  body: PIXI.Sprite;
  nose: PIXI.Sprite;

  constructor(public bug: Bug, public app: PIXI.Application) {
    this.createParts();
    this.app.stage.addChild(this.container);
  }

  createParts() {
    this.container = new PIXI.Container();
    this.container.pivot = new PIXI.Point(BODY_RADIUS, BODY_RADIUS);
    this.createBody();
    this.createNose();
  }

  createBody() {
    const gfx = new PIXI.Graphics();
    gfx.lineStyle(1, 0x000000, 1);
    gfx.drawCircle(BODY_RADIUS, BODY_RADIUS, BODY_RADIUS);
    const texture = this.app.renderer.generateTexture(gfx, 1, 1);
    this.body = new PIXI.Sprite(texture);
    this.container.addChild(this.body);
  }

  createNose() {
    const gfx = new PIXI.Graphics();
    gfx.beginFill(0x000000, 1);
    gfx.drawPolygon([
      new PIXI.Point(BODY_RADIUS + BODY_RADIUS * -0.5, BODY_RADIUS),
      new PIXI.Point(BODY_RADIUS + BODY_RADIUS * 0.5, BODY_RADIUS),
      new PIXI.Point(BODY_RADIUS, BODY_RADIUS - BODY_RADIUS),
    ]);
    gfx.endFill();
    const texture = this.app.renderer.generateTexture(gfx, 1, 1);
    this.nose = new PIXI.Sprite(texture);
    this.container.addChild(this.nose);
  }

  render(delta: number = 1): Pixi {
    // console.log('Pixi.render().delta:', delta);
    this.container.x = this.bug.x;
    this.container.y = this.bug.y;
    this.container.rotation = this.bug.rotation;
    return this;
  }
}

export default Pixi;
