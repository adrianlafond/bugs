const WORLD_WIDTH = 320;
const WORLD_HEIGHT = 320;

function createApp() {
  const app = new PIXI.Application({
    width: WORLD_WIDTH,
    height: WORLD_HEIGHT,
    antialias: true,
    resolution: 2,
  });
  app.renderer.backgroundColor = 0xEFEFEF;
  app.renderer.autoDensity = true;
  document.querySelector('.bug').appendChild(app.view);
  return app;
}

function createWorld() {
  return new World.World();
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
    x: Math.random() * WORLD_WIDTH,
    y: Math.random() * WORLD_HEIGHT,
    radians: Math.random() * Math.PI * 2,
    onTargetReached,
    world,
  });
}

function createSkin(bug) {
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
      x: Math.min(WORLD_WIDTH, Math.max(0, (event.touches ? event.touches[0].pageX :
        event.clientX) - rect.left)),
      y: Math.min(WORLD_HEIGHT, Math.max(0, (event.touches ? event.touches[0].pageY :
        event.clientY) - rect.top)),
    };
  } else {
    target = {
      x: Math.random() * WORLD_WIDTH,
      y: Math.random() * WORLD_HEIGHT,
    };
  }
  marker.x = target.x;
  marker.y = target.y;
  bugs.forEach(bug => bug.target = target);
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
const marker = createMarker();
const ticker = createTicker();

const bugs = [];
const skins = [];
for (let i = 0; i < 10; i++) {
  bugs[i] = createBug();
  skins[i] = createSkin(bugs[i]);
  ticker.add(skins[i].render.bind(skins[i]));
}

resetTarget();
toggleTicker();