import Segment, { SegmentData } from './segment';

export interface BugModel {
  id: string;
  ticks: number;
  segments: Segment[];
}

class Bug {
  private model: BugModel;

  constructor() {
    this.model = {
      id: getUid(),
      ticks: 0,
      segments: [new Segment()],
    };
  }

  get id(): string {
    return this.model.id;
  }

  get ticks(): number {
    return this.model.ticks;
  }

  get segments(): SegmentData[] {
    return this.model.segments.map(segment => segment.data);
  }

  tick() {
    ++this.model.ticks;
  }
}

let uid: number = 0;
function getUid(): string {
  return `bug-${uid++}`;
}

export default Bug;
