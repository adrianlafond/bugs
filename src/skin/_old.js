const SEGMENT_RADIUS = 6;
const JOINT_RADIUS = 2;
const FOOT_RADIUS = 3;

function createApp() {
  const app = new PIXI.Application({
    width: 320,
    height: 320,
    antialias: true,
    resolution: 2,
  });
  app.renderer.backgroundColor = 0xEFEFEF;
  app.renderer.autoResize = true;
  document.querySelector('.bug').appendChild(app.view);
  return app;
}

function drawBug() {
  console.log('bug:', bug.data)
  gfx.container = new PIXI.Container();
  drawSegment(gfx.container);
  drawLegs(gfx.container);
  app.stage.addChild(gfx.container);
}

function drawSegment(container) {
  const segmentGfx = new PIXI.Graphics();
  segmentGfx.lineStyle(1, 0x000000, 1);
  segmentGfx.drawCircle(0, 0, SEGMENT_RADIUS);
  const segmentTexture = app.renderer.generateTexture(segmentGfx);
  gfx.segment = new PIXI.Sprite.from(segmentTexture);
  container.addChild(gfx.segment);
}

function drawLegs(container) {
  gfx.legs = [];
  bug.data.segments[0].legs.forEach((leg, i) => {
    const jointGfx = new PIXI.Graphics();
    const footGfx = new PIXI.Graphics();
    jointGfx.lineStyle(1, 0x000000, 1);
    jointGfx.drawCircle(0, 0, JOINT_RADIUS);
    footGfx.lineStyle(1, 0x000000, 1);
    footGfx.drawCircle(0, 0, FOOT_RADIUS);
    const jointTexture = app.renderer.generateTexture(jointGfx);
    const footTexture = app.renderer.generateTexture(footGfx);
    gfx.legs[i] = {
      joint: new PIXI.Sprite.from(jointTexture),
      foot: new PIXI.Sprite.from(footTexture),
    };
    container.addChild(gfx.legs[i].joint);
    container.addChild(gfx.legs[i].foot);
  });
}

function updateBug() {
  const segment = bug.data.segments[0];
  gfx.container.x = bug.data.x;
  gfx.container.y = bug.data.y;
  gfx.segment.x = segment.x - SEGMENT_RADIUS;
  gfx.segment.y = segment.y - SEGMENT_RADIUS;
  gfx.legs.forEach((leg, i) => {
    leg.joint.x = segment.legs[i].joint.x - JOINT_RADIUS;
    leg.joint.y = segment.legs[i].joint.y - JOINT_RADIUS;
    leg.foot.x = segment.legs[i].foot.x - FOOT_RADIUS;
    leg.foot.y = segment.legs[i].foot.y - FOOT_RADIUS;
  });
}

const app = createApp();
const bug = new Bug.default({
  x: 100,
  y: 100
});
const gfx = {};
drawBug();
updateBug();
app.ticker.stop();
app.ticker.add(delta => {
  console.log(delta);
  updateBug();
});