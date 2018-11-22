import Bug from '../src';

describe('Bug', () => {
  let bug: Bug;

  beforeAll(() => {
    bug = new Bug();
  });

  describe('id', () => {
    it('sets a default "id" value', () => {
      expect(bug.id).toBeTruthy();
    });
    it('sets a unique "id" value', () => {
      const bug2: Bug = new Bug();
      expect(bug2.id).toBeDefined();
      expect(bug2.id).not.toEqual(bug.id);
    });
  });

  describe('tick', () => {
    it('starts with "ticks" == 0', () => {
      expect(bug.ticks).toEqual(0);
    });
    it('increments ticks on tick()', () => {
      bug.tick();
      expect(bug.ticks).toEqual(1);
    });
  });
});
