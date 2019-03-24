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
  return new Bug.default({
    x: 160,
    y: 160,
    radians: Math.random() * Math.PI * 2,
    onTargetReached,
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
      x: Math.min(320, Math.max(0, (event.touches ? event.touches[0].clientX :
        event.clientX) - rect.left)),
      y: Math.min(320, Math.max(0, (event.touches ? event.touches[0].clientY :
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

document.querySelector('.main__content--dpr2.bug').addEventListener('mousedown', event => {
  resetTarget(event);
});
const app = createApp();
const marker = createMarker();
const bug = createBug();
const skin = createSkin();
const ticker = createTicker();
ticker.add(skin.render.bind(skin));
resetTarget();
toggleTicker();