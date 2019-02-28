import { BugData } from '../bug';

export default interface Skin {
  update(bug: BugData): void;
}
