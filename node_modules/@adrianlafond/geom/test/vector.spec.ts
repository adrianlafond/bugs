import Vector from '../src/vector';
import Point from '../src/point';

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
    it('provides a getter for "x"', () => {
      const vector = new Vector(new Point(25, 35));
      expect(vector.x).toEqual(25);
    });
    it('provides a getter for "y"', () => {
      const vector = new Vector(new Point(25, 35));
      expect(vector.y).toEqual(35);
    });
  });

  describe('setting values', () => {
    it('allows point.x to be set', () => {
      const vector = new Vector(new Point(25, 35));
      expect(vector.x).toEqual(25);
      vector.x = 45;
      expect(vector.x).toEqual(45);
    });
    it('allows point.y to be set', () => {
      const vector = new Vector(new Point(25, 35));
      expect(vector.y).toEqual(35);
      vector.y = 45;
      expect(vector.y).toEqual(45);
    });
    it('allows point.radians to be set', () => {
      const vector = new Vector(25, 35, 0.2);
      expect(vector.radians).toEqual(0.2);
      vector.radians = 1.5;
      expect(vector.radians).toEqual(1.5);
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