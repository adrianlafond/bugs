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
});