/**
 *
 */
class Bug {
  private data: object = {};

  public get id(): string {
    return getUid();
  }
}

let uid: number = 0;
function getUid(): string {
  return `bug-${uid++}`;
}

export default Bug;
