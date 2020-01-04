function createApp() {
  const app = new PIXI.Application({
    width: 320,
    height: 320,
    antialias: true,
    resolution: 2,
  });
  app.renderer.backgroundColor = 0xEFEFEF;
  app.renderer.autoDensity = true;
  document.querySelector('.bug').appendChild(app.view);
  return app;
}

function createObstacles() {
  for (let i = 0; i < 20; i++) {
    const x = Math.floor(Math.random() * 320);
    const y = Math.floor(Math.random() * 320);
    const block = world.fillBlock(x, y);
    if (block) {
      const gfx = new PIXI.Graphics();
      gfx.beginFill(0xCCCCCC);
      gfx.drawRect(block.x - 10, block.y - 10, 20, 20);
      app.stage.addChild(gfx);
    }
  }
}

function createWorld() {
  const world = new World.World();
  return world;
}

function createMarker() {
  const marker = new PIXI.Container();

  const line1 = new PIXI.Graphics();
  line1.lineStyle(1, 0xff0000, 1);
  line1.moveTo(-2, 0);
  line1.lineTo(2, 0);
  marker.addChild(line1);

  const line2 = new PIXI.Graphics();
  line2.lineStyle(1, 0xff0000, 1);
  line2.moveTo(0, -2);
  line2.lineTo(0, 2);
  marker.addChild(line2);

  app.stage.addChild(marker);
  return marker;
}

function createBug() {
  return new Bug.Bug({
    x: 20,
    y: 20,
    radians: Math.random() * Math.PI * 2,
    onTargetReached,
    navigateWorld: world.navigateWorld.bind(world),
  });
}

function createSkin() {
  return new Skin.Pixi(bug, app);
}

function createTicker() {
  const pixiTicker = new PIXI.Ticker();
  pixiTicker.autoStart = false;
  return pixiTicker;
}

function toggleTicker() {
  if (ticker.started) {
    ticker.stop();
  } else {
    ticker.start();
  }
}

function resetTarget(event = null) {
  let target;
  if (event) {
    const rect = event.currentTarget.getBoundingClientRect();
    target = {
      x: Math.min(320, Math.max(0, (event.touches ? event.touches[0].pageX :
        event.clientX) - rect.left)),
      y: Math.min(320, Math.max(0, (event.touches ? event.touches[0].pageY :
        event.clientY) - rect.top)),
    };
  } else {
    target = {
      x: Math.random() * 320,
      y: Math.random() * 320,
    };
  }
  marker.x = target.x;
  marker.y = target.y;
  bug.target = target;
}

function onTargetReached() {
  resetTarget();
}

const inputEvent = 'ontouchstart' in window ? 'touchstart' : 'mousedown';
document.querySelector('.main__content--dpr2.bug').addEventListener(inputEvent, event => {
  resetTarget(event);
});

const app = createApp();

const world = createWorld();
const obstacles = createObstacles();

const marker = createMarker();
const bug = createBug();
const skin = createSkin();

const ticker = createTicker();
ticker.add(skin.render.bind(skin));
resetTarget();
toggleTicker();