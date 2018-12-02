import Bug from '../src';
import { SegmentData } from '../src/segment';

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

  describe('segment (defaults)', () => {
    let segment: SegmentData;
    beforeEach(() => {
      segment = bug.segments[0];
    })
    it('has a segment', () => {
      expect(segment.x).not.toEqual(NaN);
      expect(segment.y).not.toEqual(NaN);
      expect(segment.radians).not.toEqual(NaN);
    });
    it('has legs', () => {
      expect(segment.legs.length).toBeGreaterThanOrEqual(2);
    });
  });
});
