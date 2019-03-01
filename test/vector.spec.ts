import Vector from '../src/geom/vector';
import Point from '../src/geom/point';

describe('Vector', () => {
  describe('instantiation', () => {
    it('sets a point and radians by default', () => {
      const vector = new Vector();
      expect(vector.point.data).toEqual({ x: 0, y: 0 });
      expect(vector.radians).toEqual(0);
    });
    it('sets args point and radians', () => {
      const vector = new Vector(new Point(25, 35), Math.PI);
      expect(vector.point.data).toEqual({ x: 25, y: 35 });
      expect(vector.radians).toEqual(Math.PI);
    });
    it('sets args x, y, z into a point and an angle', () => {
      const vector = new Vector(25, 35, Math.PI);
      expect(vector.point.data).toEqual({ x: 25, y: 35 });
      expect(vector.radians).toEqual(Math.PI);
    });
  });

  describe('util', () => {
    it('clones itself', () => {
      const v1 = new Vector(11, 17, Math.PI);
      const v2 = v1.clone();
      expect(v1).not.toBe(v2);
      expect(v2.point.data).toEqual({ x: 11, y: 17 });
      expect(v2.radians).toEqual(Math.PI);
    });
    it('outputs a string via toString()', () => {
      expect(new Vector(3, 5, 2).toString()).toEqual(JSON.stringify({ x: 3, y: 5, radians: 2 }));
    });
  });
});