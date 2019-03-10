import Bug from '../../src/bug/bug';

describe('Bug', () => {
  let bug: Bug;

  describe('defaults', () => {
    beforeEach(() => {
      bug = new Bug();
    });
    it('sets default x to 0', () => {
      expect(bug.x).toEqual(0);
    });
    it('sets default y to 0', () => {
      expect(bug.y).toEqual(0);
    });
  });

  describe('options', () => {
    it('sets x from options', () => {
      bug = new Bug({ x: 5 });
      expect(bug.x).toEqual(5);
    });
    it('sets y from options', () => {
      bug = new Bug({ y: 7 });
      expect(bug.y).toEqual(7);
    });
  });
});
