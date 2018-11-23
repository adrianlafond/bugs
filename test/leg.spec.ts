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
    it('is planted', () => {
      expect(leg.planted).toBe(true);
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
    it('sets progress positions', () => {
      leg = new Leg({ progress: 0.5 });
      expect(leg.progress).toEqual(0.5);
    });
    it('sets maximum length', () => {
      leg = new Leg({ maxLength: 100 });
      expect(leg.maxLength).toBe(100);
    });
    it('sets planted flag', () => {
      leg = new Leg({ planted: false });
      expect(leg.planted).toBe(false);
    });
    it('sets target position', () => {
      leg = new Leg({
        foot: new Point(),
        target: new Point(3, 6),
        maxLength: 1000
      });
      expect(leg.target.x).toEqual(3);
      expect(leg.target.y).toEqual(6);
    });
    it('constrains target by max length', () => {
      const MAX = 10;
      leg = new Leg({
        foot: new Point(),
        target: new Point(100, 100),
        maxLength: MAX
      });
      expect(leg.target.x).toBeLessThan(MAX);
      expect(leg.target.y).toBeLessThan(MAX);
    });
    it('returns relevant joint, foot, planted data', () => {
      leg = new Leg({
        joint: new Point(5, 10),
        foot: new Point(14, 25),
        planted: false,
      });
      expect(leg.data).toEqual({
        joint: { x: 5, y: 10 },
        foot: { x: 14, y: 25 },
        planted: false,
      });
    });
  });

  describe('moveBy', () => {
    beforeEach(() => {
      leg = new Leg({
        joint: new Point(2, 3),
        foot: new Point(10, 5),
      });
    });

    it('moves by x, y, and radians', () => {
      const { radians } = leg;
      leg.moveBy(new Point(10, 10), Math.PI / 2);
      expect(leg.joint.x).toBe(12);
      expect(leg.joint.y).toBe(13);
      expect(leg.radians).toBe(radians + Math.PI / 2);
    });

    it('moveBy moves foot when not planted', () => {
      const m = { x: 7, y: 11, radians: Math.PI / 2};
      leg.planted = false;
      const { x: fx, y: fy } = leg.foot;
      const { radians } = leg;
      leg.moveBy(new Point(m.x, m.y), m.radians);
      expect(leg.foot.x).toEqual(Math.cos(radians + m.radians) * fx + m.x);
      expect(leg.foot.y).toEqual(Math.sin(radians + m.radians) * fy + m.y);
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

    it('cannot move to progress that is < 0', () => {
      const foot = leg.foot;
      leg.target = new Point(100, 100);
      leg.progress = -0.5;
      expect(leg.foot.x).toEqual(foot.x);
      expect(leg.foot.y).toEqual(foot.y);
    });

    it('cannot move to progress that is > 1.0', () => {
      leg.target = new Point(100, 100);
      const { foot, target} = leg;
      leg.progress = 1.5;
      expect(leg.foot.x).toEqual(target.x);
      expect(leg.foot.y).toEqual(target.y);
    });
  });
});
