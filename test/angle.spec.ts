import Angle, {
  degreesToRadians,
  radiansToDegrees,
  normalizeRadians,
  normalizeDegrees
} from '../src/geom/angle';

function isClose(a: number, b: number): boolean {
  return Math.abs(+a.toFixed(5)) === Math.abs(+b.toFixed(5));
}

describe('Angle', () => {
  it('normalizes degrees with 0 pointing straight up into radians', () => {
    expect(degreesToRadians()).toEqual(Math.PI * 1.5);
    expect(degreesToRadians(0)).toEqual(Math.PI * 1.5);
    expect(degreesToRadians(45)).toEqual(Math.PI * 1.75);
    expect(degreesToRadians(90)).toEqual(0);
    expect(degreesToRadians(135)).toEqual(Math.PI * 0.25);
    expect(degreesToRadians(180)).toEqual(Math.PI * 0.5);
    expect(degreesToRadians(225)).toEqual(Math.PI * 0.75);
    expect(degreesToRadians(270)).toEqual(Math.PI);
    expect(degreesToRadians(315)).toEqual(Math.PI * 1.25);
    expect(degreesToRadians(360)).toEqual(Math.PI * 1.5);
    expect(degreesToRadians(-45)).toEqual(Math.PI * 1.25);
    expect(degreesToRadians(405)).toEqual(Math.PI * 1.75);
  });

  it('normalizes radians into degrees with 0 pointing straight up', () => {
    expect(radiansToDegrees()).toEqual(90);
    expect(radiansToDegrees(0)).toEqual(90);
    expect(radiansToDegrees(-Math.PI * 0.5)).toEqual(0);
    expect(radiansToDegrees(Math.PI * 0.25)).toEqual(135);
    expect(radiansToDegrees(Math.PI * 0.5)).toEqual(180);
    expect(radiansToDegrees(Math.PI * 0.75)).toEqual(225);
    expect(radiansToDegrees(Math.PI)).toEqual(270);
    expect(radiansToDegrees(Math.PI * 1.25)).toEqual(315);
    expect(radiansToDegrees(Math.PI * 1.5)).toEqual(0);
    expect(radiansToDegrees(Math.PI * 1.75)).toEqual(45);
    expect(radiansToDegrees(Math.PI * 3.5)).toEqual(0);
  });

  it('normalizes radians to between 0 and Math.PI * 2 inclusive', () => {
    expect(normalizeRadians()).toBe(0);
    expect(normalizeRadians(-Math.PI)).toBe(Math.PI);
    expect(isClose(normalizeRadians(-Math.PI * 9), Math.PI)).toBe(true);
    expect(normalizeRadians(Math.PI * 3)).toBe(Math.PI);
    expect(isClose(normalizeRadians(Math.PI * 15), Math.PI)).toBe(true);
  });

  it('normalizes degress to between 0 and 359 inclusive', () => {
    expect(normalizeDegrees()).toBe(0);
    expect(normalizeDegrees(-540)).toBe(180);
    expect(normalizeDegrees(900)).toEqual(180);
  });

  it('instantiates with a default angle of 0', () => {
    const angle = new Angle();
    expect(angle.degrees).toEqual(0);
  });
  it('instantiates by converting angles to radians', () => {
    const angle = new Angle(25);
    expect(angle.radians).toBe(degreesToRadians(25));
  });
  it('instantiates optionally with radians', () => {
    const angle = new Angle(Math.PI, true);
    expect(angle.radians).toEqual(Math.PI);
    expect(angle.degrees).toEqual(270);
  });
  it('updates radians when degrees are set', () => {
    const angle = new Angle(25);
    expect(angle.radians).toBe(degreesToRadians(25));
    angle.degrees = 150;
    expect(angle.radians).toBe(degreesToRadians(150));
  });
  it('updates degress when radians are set', () => {
    const angle = new Angle(25);
    expect(angle.degrees).toEqual(25);
    angle.radians = Math.PI / 2;
    expect(angle.degrees).toEqual(radiansToDegrees(Math.PI / 2));
  });
});
