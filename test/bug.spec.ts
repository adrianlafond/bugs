import Bug from '../src';
import { SegmentData } from '../src/segment';
import Point from '../src/geom/point';

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

  describe('movement', () => {
    it('allows a target and minimum distance to the target to be set', () => {
      bug.setTarget(150, 250, 75);
      expect(bug.getTarget()).toEqual({ x: 150, y: 250, distance: 75 });
    });

    it('defaults all target values to 0', () => {
      bug.setTarget();
      expect(bug.getTarget()).toEqual({ x: 0, y: 0, distance: 0 });
    });
  });
});
