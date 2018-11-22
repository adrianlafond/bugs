import Point from '../src/point';

describe('Point', () => {
  describe('instance', () => {
    it('defaults to 0, 0', () => {
      const p = new Point();
      expect(p.x).toBe(0);
      expect(p.y).toBe(0);
    });
    it('sets x, y to values passed during instantiation', () => {
      const p = new Point(4, 5);
      expect(p.x).toBe(4);
      expect(p.y).toBe(5);
    });
  })

  describe('static', () => {
    describe('clone', () => {
      it('clones a point with same coords', () => {
        const p1 = new Point(5, 10);
        const p2 = Point.clone(p1);
        expect(p1.x).toEqual(p2.x);
        expect(p1.y).toEqual(p2.y);
        expect(p1).toEqual(p2);
        expect(p1).not.toBe(p2);
        p1.x = 9;
        p1.y = 99;
        expect(p1.x).not.toEqual(p2.x);
        expect(p1.y).not.toEqual(p2.y);
        expect(p1).not.toEqual(p2);
      });
    });
  });
});
