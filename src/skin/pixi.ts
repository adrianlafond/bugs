import * as PIXI from 'pixi.js';
import Skin from './skin';
import Bug from '../bug';

const BODY_RADIUS = 8;

class Pixi implements Skin {
  container: PIXI.Container;
  segments: PIXI.Container[];
  legs: PIXI.Graphics[] = [];

  constructor(public bug: Bug, public app: PIXI.Application) {
    this.createParts();
    this.app.stage.addChild(this.container);
    this.render();
  }

  public render(delta: number = 1): Pixi {
    this.bug.tick(delta);
    this.destroyLegs();
    this.renderSegments();
    this.renderLegs();
    return this;
  }

  protected renderSegments() {
    this.segments.forEach((segment, index) => {
      const bugSegment = this.bug.segments[index];
      segment.x = bugSegment.x;
      segment.y = bugSegment.y;
      segment.rotation = bugSegment.radians;
    });
  }

  protected renderLegs() {
    this.bug.legs.forEach(leg => {
      const gfx = new PIXI.Graphics();
      gfx.lineStyle(1, 0x000000, 1);
      leg.forEach((point, index) => {
        const method = index === 0 ? 'moveTo' : 'lineTo';
        gfx[method](point.x + Math.random() * 10 - 5, point.y);
      });
      this.legs.push(gfx);
      this.container.addChild(gfx);
    });
  }

  protected createParts() {
    this.container = new PIXI.Container();
    this.createSegments();
  }

  protected createSegments() {
    this.segments = this.bug.segments.map(() => {
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

  protected destroyLegs() {
    this.legs.forEach(leg => {
      leg.parent.removeChild(leg);
      leg.destroy();
    });
    this.legs = [];
  }
}

export default Pixi;
