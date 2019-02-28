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
    it('has an angle in radians, treating degrees with 0 pointing straight up', () => {
      expect(segment.radians).toEqual(Math.PI * 1.5);
    });
    it('has progress of 0', () => {
      expect(segment.progress).toEqual(0);
    });
    it('sets step to 0', () => {
      expect(segment.step).toEqual(0);
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
    it('has a leg pointing to either side', () => {
      expect(segment.legs.filter(leg => leg.foot.x < 0).length).toEqual(1);
      expect(segment.legs.filter(leg => leg.foot.x > 0).length).toEqual(1);
    });
    it('returns a data object for rendering', () => {
      const d = segment.data;
      expect(d.x).not.toEqual(NaN);
      expect(d.y).not.toEqual(NaN);
      expect(d.radians).not.toEqual(NaN);
    });
  });

  describe('initialization', () => {
    it('sets a position', () => {
      segment = new Segment({ position: new Point(5, 9) });
      expect(segment.position.data).toEqual({ x: 5, y: 9 });
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
    it('sets the step to be 0 or 1', () => {
      segment = new Segment({ step: -1 });
      expect(segment.step).toEqual(0);
      segment.step = 5;
      expect(segment.step).toEqual(1);
      segment.step = 0.125;
      expect(segment.step).toEqual(0);
      segment.step = 0.5;
      expect(segment.step).toEqual(1);
    });
    it('resets progress when step is changed', () => {
      segment = new Segment({ progress: 0.5, step: 0 });
      segment.step = 1;
      expect(segment.progress).toEqual(0);
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
      segment = new Segment({
        radians: 0,
        target: new Vector(10, 10, Math.PI)
      });
    });
    it('does not advance when progress is 0.0', () => {
      segment.progress = 0.0;
      expect(segment.position.x).toEqual(0);
      expect(segment.position.y).toEqual(0);
      expect(segment.radians).toEqual(0);
    });
    it('advances halfway when progress is 0.5', () => {
      segment.progress = 0.5;
      expect(segment.position.x).toEqual(5);
      expect(segment.position.y).toEqual(5);
      expect(segment.radians).toEqual(Math.PI * 0.5);
    });
    it('advances all the way when progress is 1.0', () => {
      segment.progress = 1.0;
      expect(segment.position.x).toEqual(10);
      expect(segment.position.y).toEqual(10);
      expect(segment.radians).toEqual(Math.PI);
    });
    it('changes step when progress reaches 1.0', () => {
      expect(segment.progress).toEqual(0);
      expect(segment.step).toEqual(0);
      segment.progress = 0.5;
      expect(segment.progress).toEqual(0.5);
      expect(segment.step).toEqual(0);
      segment.progress = 1.0;
      expect(segment.progress).toEqual(1.0);
      expect(segment.step).toEqual(1);
      segment.progress = 0.5;
      expect(segment.progress).toEqual(0.5);
      expect(segment.step).toEqual(1);
      segment.progress = 1.0;
      expect(segment.progress).toEqual(1.0);
      expect(segment.step).toEqual(0);
    });

    it('records a base starting layout', () => {
      segment = new Segment({
        position: new Point(3, 7),
        radians: Math.PI,
      });
      const { layout } = segment;
      expect(layout.position.x).toEqual(3);
      expect(layout.position.y).toEqual(7);
      expect(layout.position.angle).toEqual(Math.PI);
      expect(layout.legs.length).toEqual(2);
    });

    it('moves itself and legs towards a target when progress advances', () => {
      segment = new Segment({
        position: new Point(0, 0),
        radians: 0,
        target: new Vector(10, 10, 45),
        step: 0,
      });
      const { legs: legs1 } = segment;
      segment.progress = 0.5;
      const { position, radians, legs: legs2 } = segment;
      expect(position.x).toBeGreaterThan(0);
      expect(position.y).toBeGreaterThan(0);
      expect(radians).toBeGreaterThan(0);
      // Leg 0 is moving:
      // expect(legs1[0].joint.x).not.toEqual(legs2[0].joint.x);
      // expect(legs1[0].joint.y).not.toEqual(legs2[0].joint.y);
      // expect(legs1[0].foot.x).not.toEqual(legs2[0].foot.x);
      // expect(legs1[0].foot.y).not.toEqual(legs2[0].foot.y);
      // Leg 1 is planted, not only joint moves:
      // expect(legs1[1].joint.x).not.toEqual(legs2[1].joint.x);
      // expect(legs1[1].joint.y).not.toEqual(legs2[1].joint.y);
      // expect(legs1[1].foot.x).toEqual(legs2[1].foot.x);
      // expect(legs1[1].foot.y).toEqual(legs2[1].foot.y);
    });
  });
});