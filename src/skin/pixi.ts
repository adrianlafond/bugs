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
      bugSegment.legs.forEach(side => {
        side.forEach(leg => {
          const gfx = new PIXI.Graphics();
          gfx.lineStyle(1, 0x000000, 1);
          leg.forEach((point, index) => {
            const method = index === 0 ? 'moveTo' : 'lineTo';
            gfx[method](point.x, point.y);
          });
          this.legs.push(gfx);
          this.container.addChild(gfx);
        });
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
      gfx.beginFill(0x808080);
      gfx.drawCircle(BODY_RADIUS, BODY_RADIUS, BODY_RADIUS);
      gfx.endFill();
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
    line1.moveTo(x + 1, y - 3);
    line1.lineTo(x + 5, y - 3);
    const line2 = new PIXI.Graphics();
    line2.lineStyle(1, 0x000000, 1);
    line2.moveTo(x + 3, y - 1);
    line2.lineTo(x + 3, y - 5);
    const line3 = new PIXI.Graphics();
    line3.lineStyle(1, 0x000000, 1);
    line3.moveTo(x + 1, y + 3);
    line3.lineTo(x + 5, y + 3);
    const line4 = new PIXI.Graphics();
    line4.lineStyle(1, 0x000000, 1);
    line4.moveTo(x + 3, y + 1);
    line4.lineTo(x + 3, y + 5);
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
