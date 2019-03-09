
export interface BugOptions {
  name?: string;
}

class Bug {
  constructor(options: BugOptions = {}) {
    console.log('Bug.options:', options);
  }
}

export default Bug;
