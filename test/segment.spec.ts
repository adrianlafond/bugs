import Segment from '../src/segment';
import Leg from '../src/leg';
import Point from '../src/geom/point';
import Vector from '../src/geom/vector';

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
      expect(segment.degrees).toEqual(0);
    });
    it('has an angle in radians, treating degrees with 0 pointing straight up', () => {
      expect(segment.radians).toEqual(Math.PI * 1.5);
    });
    it('has progress of 0', () => {
      expect(segment.progress).toEqual(0);
    });
    it('has a target that is a Vector', () => {
      expect(segment.target.data).toEqual({
        x: 0,
        y: 0,
        angle: 0,
      });
    });
    it('has 2 legs', () => {
      expect(segment.legs.length).toEqual(2);
    });
  });

  describe('initialization', () => {
    it('sets a position', () => {
      segment = new Segment({ position: new Point(5, 9) });
      expect(segment.position.data).toEqual({ x: 5, y: 9 });
    });
    it('sets degrees', () => {
      segment = new Segment({ degrees: 180 });
      expect(segment.degrees).toEqual(180);
    });
    it('sets radians', () => {
      segment = new Segment({ radians: Math.PI });
      expect(segment.radians).toEqual(Math.PI);
    });
    it('sets progress', () => {
      segment = new Segment({ progress: 0.5 });
      expect(segment.progress).toEqual(0.5);
    });
    it('does not allow progress < 0', () => {
      segment = new Segment({ progress: -0.5 });
      expect(segment.progress).toEqual(0);
    });
    it('does not allow progress > 1', () => {
      segment = new Segment({ progress: 1.5 });
      expect(segment.progress).toEqual(1);
    });
    it('sets a target', () => {
      segment = new Segment({ target: new Vector() });
      expect(segment.target instanceof Vector).toBe(true);
    });
    it('sets legs', () => {
      segment = new Segment({ legs: [
        new Leg(),
        new Leg(),
        new Leg(),
      ]});
      expect(segment.legs.length).toEqual(3);
    });
  });

  describe('movement', () => {
    let segment: Segment;
    beforeEach(() => {
      segment = new Segment({ target: new Vector(10, 10, 90) });
    });
    it('does not advance when progress is 0.0', () => {
      segment.progress = 0.0;
      expect(segment.position.x).toEqual(0);
      expect(segment.position.y).toEqual(0);
      expect(segment.degrees).toEqual(0);
    });
    it('advances halfway when progress is 0.5', () => {
      segment.progress = 0.5;
      expect(segment.position.x).toEqual(5);
      expect(segment.position.y).toEqual(5);
      expect(segment.degrees).toEqual(45);
    });
    it('advances all the way when progress is 1.0', () => {
      segment.progress = 1.0;
      expect(segment.position.x).toEqual(10);
      expect(segment.position.y).toEqual(10);
      expect(segment.degrees).toEqual(90);
    });
  });
});