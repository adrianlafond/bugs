import * as PIXI from 'pixi.js'

let instance: Grid

const LINE_COLOR = 0xbbddff

class Grid {
  constructor (private app: PIXI.Application) {}

  udpateApp (app: PIXI.Application): void {
    this.app = app
  }

  render (px: number): void {
    const background = new PIXI.Graphics()
    background.beginFill(0xffffff)
    background.drawRect(0, 0, this.app.view.width, this.app.view.height)
    this.app.stage.addChild(background)

    // let n = px
    // while (n < this.app.view.height) {
    //   const line = new PIXI.Graphics()
    //   line.beginFill(LINE_COLOR)
    //   line.drawRect(0, n, this.app.view.width, 1)
    //   this.app.stage.addChild(line)
    //   n += px
    // }

    // n = px
    // while (n < this.app.view.width) {
    //   const line = new PIXI.Graphics()
    //   line.beginFill(LINE_COLOR)
    //   line.drawRect(n, 0, 1, this.app.view.height)
    //   this.app.stage.addChild(line)
    //   n += px
    // }
  }
}

export function render (app: PIXI.Application, px = 20): void {
  instance = instance ?? new Grid(app)
  instance.udpateApp(app)
  instance.render(px)
}
