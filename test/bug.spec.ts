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
});
