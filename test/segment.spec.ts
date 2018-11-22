import Segment from '../src/segment';

describe('Segment', () => {
  let segment: Segment;

  describe('defaults', () => {
    beforeEach(() => {
      segment = new Segment();
    });
    it('has a position with x, y values that default to 0, 0', () => {
      expect(segment.position.x).toEqual(0);
      expect(segment.position.y).toEqual(0);
    });
    it('has an angle that defaults to 0', () => {
      expect(segment.angle).toEqual(0);
    });
  });
});