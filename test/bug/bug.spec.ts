import Bug from '../../src/bug';

describe('Bug', () => {
  let bug: Bug;

  describe('defaults', () => {
    beforeEach(() => {
      bug = new Bug();
    });
    it('sets default x to 0', () => {
      expect(bug.x).toEqual(0);
    });
    it('sets default y to 0', () => {
      expect(bug.y).toEqual(0);
    });
    it('sets default radians to 0', () => {
      expect(bug.radians).toEqual(0);
    });
  });

  describe('instantiation', () => {
    it('sets x from options', () => {
      bug = new Bug({ x: 5 });
      expect(bug.x).toEqual(5);
    });
    it('sets y from options', () => {
      bug = new Bug({ y: 7 });
      expect(bug.y).toEqual(7);
    });
    it('sets set rotation from options', () => {
      bug = new Bug({ radians: 0.555 });
      expect(bug.radians).toBe(0.555);
    });
  });

  describe('setters', () => {
    beforeEach(() => {
      bug = new Bug();
    });
    it('allows setting x', () => {
      bug.x = 15;
      expect(bug.x).toEqual(15);
    });
    it('allows setting y', () => {
      bug.y = 19;
      expect(bug.y).toEqual(19);
    });
    it('allows setting rotation', () => {
      bug.radians = 1.333;
      expect(bug.radians).toEqual(1.333);
    });
  });

  describe('segments', () => {
    it('has a single segment at [0, 0] by default', () => {
      bug = new Bug();
      expect(bug.segments.length).toEqual(1);
      expect(bug.segments[0].x).toEqual(0);
      expect(bug.segments[0].y).toEqual(0);
      expect(bug.segments[0].radians).toEqual(0);
    });
    it('has a segment at index 0 with same x, y, radians as parent Bug instance', () => {
      bug = new Bug({ x: 23, y: 37, radians: 0.5 });
      expect(bug.segments[0].x).toEqual(23);
      expect(bug.segments[0].y).toEqual(37);
      expect(bug.segments[0].radians).toEqual(0.5);
    });
  });

  describe('legs', () => {
    describe('defaults', () => {
      it('has 2 legs', () => {
        bug = new Bug();
        expect(bug.legs.length).toBe(2);
      });
    });
  });

  describe('tick()', () => {
    beforeEach(() => {
      bug = new Bug();
    });
    it('returns reference own Bug instance', () => {
      expect(bug.tick()).toBe(bug);
    });
  });
});
