export function degreesToRadians(value: number = 0): number {
  return normalizeRadians(Math.PI * (value - 90) / 180);
}

export function radiansToDegrees(value: number = 0): number {
  return normalizeDegrees((value + Math.PI / 2) * 180 / Math.PI);
}

export function normalizeRadians(value: number = 0): number {
  const fullPi = Math.PI * 2;
  return shave(value >= 0 ? value % fullPi : (value % fullPi) + fullPi);
}

export function normalizeDegrees(value: number = 0): number {
  return shave(value >= 0 ? value % 360 : (value % 360) + 360);
}

function shave(value: number): number {
  const rounded = Math.round(value);
  return Math.abs(rounded - value) < 0.00005 ? rounded : value;
}

export interface AngleModel {
  degrees?: number;
  radians?: number;
}

export default class Angle {
  private model: AngleModel = {};

  constructor(value: number = 0, isRadians: boolean = false) {
    if (isRadians) {
      this.radians = value;
    } else {
      this.degrees = value;
    }
  }

  get degrees(): number {
    return this.model.degrees;
  }

  set degrees(value: number) {
    this.model.degrees = value;
    this.model.radians = degreesToRadians(value);
  }

  get radians(): number {
    return this.model.radians;
  }

  set radians(value: number) {
    this.model.radians = value;
    this.model.degrees = radiansToDegrees(value);
  }
}