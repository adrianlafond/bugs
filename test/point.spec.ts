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

    it('clones a point with same coords', () => {
      const p1 = new Point(5, 10);
      const p2 = p1.clone();
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

    it('adds a point', () => {
      const p1 = new Point(2, 4);
      const p2 = new Point(3, 5);
      p1.add(p2);
      expect(p1.x).toBe(5);
      expect(p1.y).toBe(9);
    });

    it('subtracts a point', () => {
      const p1 = new Point(2, 4);
      const p2 = new Point(3, 7);
      p1.subtract(p2);
      expect(p1.x).toBe(-1);
      expect(p1.y).toBe(-3);
    });
  });

  describe('data', () => {
    it('returns a POJO', () => {
      const p = new Point(3, 9);
      expect(p.data).toEqual({ x: 3, y: 9 });
    });
  });

  describe('static', () => {
    describe('distance', () => {
      it('returns the distance between 2 points', () => {
        const p1 = new Point(3, 3);
        const p2 = new Point(9, 9);
        expect(Point.distance(p1, p2)).toEqual(Math.sqrt((p1.x - p2.x) * (p1.x - p2.x) + (p1.y - p2.y) * (p1.y - p2.y)));
      });
    });

    describe('radians', () => {
      const p1 = new Point(10, 10);
      const p2 = new Point(0, 10);
      expect(Point.radians(p1, p2)).toEqual(Math.PI);
    });
  });
});
