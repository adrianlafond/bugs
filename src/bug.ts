import BugData from './bug-data';

/**
 *
 */
class Bug {
  private data: BugData = {
    id: getUid(),
    ticks: 0
  };

  get id(): string {
    return this.data.id;
  }

  get ticks(): number {
    return this.data.ticks;
  }

  tick() {
    ++this.data.ticks;
  }
}

let uid: number = 0;
function getUid(): string {
  return `bug-${uid++}`;
}

export default Bug;
