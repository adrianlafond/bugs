import Point from '../src/point';

describe('Point', () => {
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
});
