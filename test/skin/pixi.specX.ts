import * as PIXI from 'pixi.js';
import Bug from '../../src/bug/bug';
import Pixi from '../../src/skin/pixi';

xdescribe('Pixi', () => {
  const appOpts = {
    width: 320,
    height: 320,
    antialias: true,
    resolution: 2,
  };

  let app: PIXI.Application;
  let bug: Bug;
  let skin: Pixi;

  describe('defaults', () => {
    beforeEach(() => {
      app = new PIXI.Application(appOpts);
      document.body.appendChild(app.view);
      bug = new Bug();
      skin = new Pixi(bug, app);
    });
    it('has a bug property that matches what it is instantiated with', () => {
      expect(skin.bug).toBe(bug);
    });
    it('has a PIXI app that matches what it is instantiated with', () => {
      expect(skin.app).toBe(app);
    });
    it('has a root container: PIXI.Container', () => {
      expect(skin.container).toBeInstanceOf(PIXI.Container);
    });
  });

  describe('render', () => {
    it('returns itself for chaining', () => {
      expect(skin.render()).toBe(skin);
    });
    it('accepts a delta param', () => {
      expect(skin.render(0)).toBe(skin);
    });
  });
});
