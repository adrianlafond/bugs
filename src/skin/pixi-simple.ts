import Skin from './skin';
import { BugData } from '../bug';
import {
  Application,
  Container,
  Graphics,
  RenderTexture,
  Sprite,
} from 'pixi.js';

const SEGMENT_RADIUS = 6;
const JOINT_RADIUS = 2;
const FOOT_RADIUS = 3;

interface Legs {
  joint: Sprite;
  foot: Sprite;
}

class PixiSimpleSkin implements Skin {
  app: Application;
  container: Container;
  segment: Container;
  segmentGfx: Sprite;
  legs: Legs[];
  bug: BugData;

  constructor(app: Application, container: Container) {
    this.app = app;
    this.container = container;
  }

  create(bug: BugData) {
    this.bug = bug;
    this.createSegment();
    this.createLegs();
    this.update();
  }

  update(bug: BugData = this.bug) {
    this.bug = bug;
    const segment = this.bug.segments[0];
    this.container.x = bug.x;
    this.container.y = bug.y;
    this.segment.rotation = segment.radians + Math.PI / 2;
    this.segmentGfx.x = segment.x - SEGMENT_RADIUS;
    this.segmentGfx.y = segment.y - SEGMENT_RADIUS;
    this.legs.forEach((leg, i) => {
      leg.joint.x = segment.legs[i].joint.x - JOINT_RADIUS;
      leg.joint.y = segment.legs[i].joint.y - JOINT_RADIUS;
      // leg.joint.rotation = this.segment.rotation;
      leg.foot.x = segment.legs[i].foot.x - FOOT_RADIUS;
      leg.foot.y = segment.legs[i].foot.y - FOOT_RADIUS;
    });
  }

  private createSegment() {
    const gfx: Graphics = new PIXI.Graphics();
    gfx.lineStyle(1, 0x000000, 1);
    gfx.drawCircle(0, 0, SEGMENT_RADIUS);
    gfx.drawCircle(0, -2, JOINT_RADIUS);
    const texture: RenderTexture = this.app.renderer.generateTexture(gfx);
    this.segmentGfx = new PIXI.Sprite(texture);
    this.segmentGfx.x = -SEGMENT_RADIUS;
    this.segmentGfx.y = -SEGMENT_RADIUS;
    this.segment = new PIXI.Container();
    this.segment.addChild(this.segmentGfx);
    this.container.addChild(this.segment);
  }

  private createLegs() {
    this.legs = [];
    this.bug.segments[0].legs.forEach((leg, i) => {
      const jointGfx = new PIXI.Graphics();
      const footGfx = new PIXI.Graphics();
      const hex = i === 0 ? 0xff0000 : 0x009900;
      jointGfx.lineStyle(1, hex, 1);
      jointGfx.drawCircle(0, 0, JOINT_RADIUS);
      footGfx.lineStyle(1, hex, 1);
      footGfx.drawCircle(0, 0, FOOT_RADIUS);
      const jointTexture = this.app.renderer.generateTexture(jointGfx);
      const footTexture = this.app.renderer.generateTexture(footGfx);
      this.legs[i] = {
        joint: new PIXI.Sprite(jointTexture),
        foot: new PIXI.Sprite(footTexture),
      };
      this.container.addChild(this.legs[i].joint);
      this.container.addChild(this.legs[i].foot);
    });
  }
}

export default PixiSimpleSkin;
