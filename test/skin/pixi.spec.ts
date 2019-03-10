import Bug from '../../src/bug/bug';
import Pixi from '../../src/skin/pixi';

describe('Pixi', () => {
  let bug: Bug;
  let skin: Pixi;

  describe('defaults', () => {
    beforeEach(() => {
      bug = new Bug();
      skin = new Pixi(bug);
    });
    it('has a bug property that matches what it is instantiated with', () => {
      expect(skin.bug).toEqual(bug);
    });
  });

  describe('remder', () => {
    it('returns itself for chaining', () => {
      expect(skin.render()).toBe(skin);
    });
    it('accepts a delta param', () => {
      expect(skin.render(0)).toBe(skin);
    });
  });
});
