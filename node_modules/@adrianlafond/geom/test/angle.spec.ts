import { Angle } from '../src';

describe('Angle', () => {
  it('converts radians to degrees', () => {
    expect(Angle.toDegrees(Math.PI)).toEqual(Math.PI * 180 / Math.PI);
  });
  it('converts degrees to radians', () => {
    expect(Angle.toRadians(45)).toEqual(45 * Math.PI / 180);
  });
  it('interpolates between 2 radians values', () => {
    expect(Angle.interpolate(0, Math.PI, 0)).toEqual(0);
    expect(Angle.interpolate(0, Math.PI, 0.25)).toEqual(Math.PI * 0.25);
    expect(Angle.interpolate(0, Math.PI, 0.5)).toEqual(Math.PI * 0.5);
    expect(Angle.interpolate(0, Math.PI, 0.75)).toEqual(Math.PI * 0.75);
    expect(Angle.interpolate(0, Math.PI, 1)).toEqual(Math.PI);
  });
  it('interpolates between 2 radians values (opposite)', () => {
    expect(Angle.interpolate(Math.PI, 0, 0)).toEqual(Math.PI);
    expect(Angle.interpolate(Math.PI, 0, 0.25)).toEqual(Math.PI - Math.PI * 0.25);
    expect(Angle.interpolate(Math.PI, 0, 0.5)).toEqual(Math.PI - Math.PI * 0.5);
    expect(Angle.interpolate(Math.PI, 0, 0.75)).toEqual(Math.PI - Math.PI * 0.75);
    expect(Angle.interpolate(Math.PI, 0, 1)).toEqual(0);
  });

  it(`interpolates betweens 2 radians values upon the shortest arc`, () => {
    const r1 = 0.25;
    const r2 = Math.PI * 2 - 0.25;
    expect(Angle.interpolate(r1, r2, 0)).toEqual(r1);
    expect(Angle.interpolate(r1, r2, 0.5)).toEqual(0);
    expect(Angle.interpolate(r1, r2, 1)).toEqual(r2);
  });

  it(`interpolates betweens 2 radians values upon the shortest arc #2`, () => {
    const r1 = -0.25;
    const r2 = Math.PI * 2 + 0.25;
    expect(Angle.interpolate(r1, r2, 0)).toEqual(Angle.normalize(r1));
    expect(Angle.interpolate(r1, r2, 0.5)).toEqual(0);
    expect(Angle.interpolate(r1, r2, 1)).toEqual(Angle.normalize(r2));
  });

  it(`interpolates betweens 2 radians values upon the shortest arc #3`, () => {
    const r1 = Math.PI - 0.25;
    const r2 = Math.PI + 0.25;
    expect(Angle.interpolate(r1, r2, 0)).toEqual(Angle.normalize(r1));
    expect(Angle.interpolate(r1, r2, 0.5)).toEqual(Math.PI);
    expect(Angle.interpolate(r1, r2, 1)).toEqual(Angle.normalize(r2));
  });
});
