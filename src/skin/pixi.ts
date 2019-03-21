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
    this.segments.forEach((segment, index) => {
      const bugSegment = this.bug.segments[index];
      segment.x = bugSegment.x;
      segment.y = bugSegment.y;
      segment.rotation = bugSegment.radians;
      bugSegment.legs.forEach(leg => {
        const gfx = new PIXI.Graphics();
        gfx.lineStyle(1, 0x000000, 1);
        leg.forEach((point, index) => {
          const method = index === 0 ? 'moveTo' : 'lineTo';
          gfx[method](point.x + Math.random() * 10 - 5, point.y);
        });
        this.legs.push(gfx);
        this.container.addChild(gfx);
      });
    });
    return this;
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
      container.addChild(this.createFace())
      this.container.addChild(container);
      return container;
    });
  }

  protected createFace() {
    const x = BODY_RADIUS;
    const y = BODY_RADIUS;
    const line1 = new PIXI.Graphics();
    line1.lineStyle(1, 0x000000, 1);
    line1.moveTo(x + 2, y - 4);
    line1.lineTo(x + 6, y - 4);
    const line2 = new PIXI.Graphics();
    line2.lineStyle(1, 0x000000, 1);
    line2.moveTo(x + 4, y - 2);
    line2.lineTo(x + 4, y - 6);
    const line3 = new PIXI.Graphics();
    line3.lineStyle(1, 0x000000, 1);
    line3.moveTo(x + 2, y + 4);
    line3.lineTo(x + 6, y + 4);
    const line4 = new PIXI.Graphics();
    line4.lineStyle(1, 0x000000, 1);
    line4.moveTo(x + 4, y + 2);
    line4.lineTo(x + 4, y + 6);
    const face = new PIXI.Container();
    face.addChild(line1);
    face.addChild(line2);
    face.addChild(line3);
    face.addChild(line4);
    return face;
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
