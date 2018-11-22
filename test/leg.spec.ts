import Leg, { MAXIMUM_LENGTH } from '../src/leg';
import Point from '../src/point';

describe('Leg', () => {
  let leg: Leg;

  describe('defaults', () => {
    beforeEach(() => {
      leg = new Leg();
    });
    it('has a joint with x and y numbers', () => {
      const { x, y } = leg.joint;
      expect(x).toEqual(0);
      expect(y).toEqual(0);
    });
    it('has a foot with x and y numbers', () => {
      const { x, y } = leg.foot;
      expect(x).not.toBeNaN();
      expect(y).not.toBeNaN();
    });
  });

  describe('initialization', () => {
    it('sets joint position', () => {
      leg = new Leg({ joint: new Point(99, 999)});
      expect(leg.joint.x).toEqual(99);
      expect(leg.joint.y).toEqual(999);
    });
    it('sets foot position', () => {
      leg = new Leg({ foot: new Point(99, 999) });
      expect(leg.foot.x).toEqual(99);
      expect(leg.foot.y).toEqual(999);
    });
    it('sets start position', () => {
      leg = new Leg({ start: new Point(99, 999) });
      expect(leg.start.x).toEqual(99);
      expect(leg.start.y).toEqual(999);
    });
    it('sets target position', () => {
      leg = new Leg({ target: new Point(99, 999) });
      expect(leg.target.x).toEqual(99);
      expect(leg.target.y).toEqual(999);
    });
    it('sets progress positions', () => {
      leg = new Leg({ progress: 0.5 });
      expect(leg.progress).toEqual(0.5);
    });
  });

  describe('movement', () => {
    beforeEach(() => {
      leg = new Leg({ foot: new Point(0, 0) });
    });

    it('sets a target point', () => {
      leg.target = new Point(99, 99);
      const { x, y } = leg.target;
      expect(leg.target.x).toEqual(x);
      expect(leg.target.y).toEqual(y);
    });

    it('moves the joint', () => {
      const xx: number = 99;
      const yy: number = 99;
      expect(leg.joint.x).not.toEqual(xx);
      expect(leg.joint.y).not.toEqual(yy);
      leg.joint = new Point(xx, yy);
      expect(leg.joint.x).toEqual(xx);
      expect(leg.joint.y).toEqual(yy);
    });

    it('steps towards target by given percentage', () => {
      const { x: x1, y: y1 } = leg.foot;
      const targetPx = Math.sqrt(MAXIMUM_LENGTH);
      const x2 = targetPx;
      const y2 = targetPx;
      const perc = 0.5;
      leg.target = new Point(x2, y2);
      leg.progress = perc;
      expect(leg.foot.x).toEqual((x1 + x2) * perc);
      expect(leg.foot.y).toEqual((y1 + y2) * perc);
    });

    it('resets start position when target is reset', () => {
      const targetPx = Math.sqrt(MAXIMUM_LENGTH);
      const { x: fx, y: fy } = leg.foot;
      const { x: sx, y: sy } = leg.foot;
      expect(sx).toEqual(fx);
      expect(sy).toEqual(fy);
      leg.target = new Point(targetPx, targetPx);
      leg.progress = 0.5;
      expect(leg.foot.x).not.toEqual(fx);
      expect(leg.foot.y).not.toEqual(fy);
      expect(leg.start.x).toEqual(sx);
      expect(leg.start.y).toEqual(sy);
      leg.target = new Point(-targetPx, -targetPx);
      expect(leg.start.x).toEqual(leg.foot.x);
      expect(leg.start.y).toEqual(leg.foot.y);
      expect(leg.progress).toEqual(0);
    });

    it('cannot set a target further than maximum length', () => {
      leg.target = new Point(MAXIMUM_LENGTH * 2, MAXIMUM_LENGTH * 2);
      expect(leg.target.x).toBeLessThan(MAXIMUM_LENGTH);
      expect(leg.target.y).toBeLessThan(MAXIMUM_LENGTH);
    });
  });
});
