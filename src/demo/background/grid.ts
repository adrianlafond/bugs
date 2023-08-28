import * as PIXI from 'pixi.js'
import { Background } from './background'

const LINE_COLOR = 0x113355
const BLOCK_SIZE = 10

export class Grid extends Background {
  render (app?: PIXI.Application): void {
    super.render(app)
    let n = BLOCK_SIZE
    while (n < this.app.view.height) {
      const line = new PIXI.Graphics()
      line.beginFill(LINE_COLOR)
      line.drawRect(0, n, this.app.view.width, 1)
      this.app.stage.addChild(line)
      n += BLOCK_SIZE
    }

    n = BLOCK_SIZE
    while (n < this.app.view.width) {
      const line = new PIXI.Graphics()
      line.beginFill(LINE_COLOR)
      line.drawRect(n, 0, 1, this.app.view.height)
      this.app.stage.addChild(line)
      n += BLOCK_SIZE
    }
  }
}
