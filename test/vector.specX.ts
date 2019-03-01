import Vector from '../src/geom/vector';
import Point from '../src/geom/point';

describe('Vector', () => {
  describe('instantiation', () => {
    it('sets a point and angle by default', () => {
      const vector = new Vector();
      expect(vector.point.data).toEqual({ x: 0, y: 0 });
      expect(vector.angle).toEqual(0);
    });
    it('sets args point and angle', () => {
      const vector = new Vector(new Point(25, 35), 45);
      expect(vector.point.data).toEqual({ x: 25, y: 35 });
      expect(vector.angle).toEqual(45);
    });
    it('sets args 0,0,0 into a point and an angle', () => {
      const vector = new Vector(25, 35, 45);
      expect(vector.point.data).toEqual({ x: 25, y: 35 });
      expect(vector.angle).toEqual(45);
    });
  });

  describe('util', () => {
    it('clones itself', () => {
      const v1 = new Vector(11, 17, 23);
      const v2 = v1.clone();
      expect(v1).not.toBe(v2);
      expect(v2.point.data).toEqual({ x: 11, y: 17 });
      expect(v2.angle).toEqual(23);
    });
    it('outputs a string via toString()', () => {
      expect(new Vector(3, 5, 2).toString()).toEqual(JSON.stringify({ x: 3, y: 5, angle: 2 }));
    });
  });
});