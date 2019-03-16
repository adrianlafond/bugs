import * as PIXI from 'pixi.js';
import Skin from './skin';
import Bug from '../bug';

const BODY_RADIUS = 8;

class Pixi implements Skin {
  container: PIXI.Container;
  segments: PIXI.Container[];
  nose: PIXI.Sprite;

  constructor(public bug: Bug, public app: PIXI.Application) {
    this.createParts();
    this.app.stage.addChild(this.container);
    this.render();
  }

  public render(delta: number = 1): Pixi {
    // console.log('Pixi.render().delta:', delta);
    this.bug.tick(delta);
    this.segments.forEach((segment, index) => {
      segment.x = this.bug.segments[index].x;
      segment.y = this.bug.segments[index].y;
      segment.rotation = this.bug.segments[index].radians;
    });
    return this;
  }

  protected createParts() {
    this.container = new PIXI.Container();
    this.createSegments();
  }

  protected createSegments() {
    this.segments = this.bug.segments.map(segment => {
      const container = new PIXI.Container();
      container.pivot = new PIXI.Point(BODY_RADIUS, BODY_RADIUS);

      const gfx = new PIXI.Graphics();
      gfx.lineStyle(1, 0x000000, 1);
      gfx.drawCircle(BODY_RADIUS, BODY_RADIUS, BODY_RADIUS);
      const texture = this.app.renderer.generateTexture(gfx, 1, 1);
      const sprite = new PIXI.Sprite(texture);

      container.addChild(sprite);
      container.addChild(this.createNose())
      this.container.addChild(container);
      return container;
    });
  }

  protected createNose() {
    const gfx = new PIXI.Graphics();
    gfx.beginFill(0x000000, 1);
    gfx.drawPolygon([
      new PIXI.Point(BODY_RADIUS + BODY_RADIUS * -0.5, BODY_RADIUS),
      new PIXI.Point(BODY_RADIUS + BODY_RADIUS * 0.5, BODY_RADIUS),
      new PIXI.Point(BODY_RADIUS, BODY_RADIUS - BODY_RADIUS),
    ]);
    gfx.endFill();
    const texture = this.app.renderer.generateTexture(gfx, 1, 1);
    return new PIXI.Sprite(texture);
  }
}

export default Pixi;
