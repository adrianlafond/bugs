import Point from './point';

export default interface LegData {
  joint?: Point;
  foot?: Point;
  start?: Point;
  target?: Point;
  progress?: number;
}
