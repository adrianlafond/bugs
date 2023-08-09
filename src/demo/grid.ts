import * as PIXI from 'pixi.js'

let instance: Grid

const LINE_COLOR = 0x112233

class Grid {
  pointerDownHandler: (event: PIXI.FederatedPointerEvent) => void = () => undefined

  constructor (private app: PIXI.Application) {}

  udpateApp (app: PIXI.Application): void {
    this.app = app
  }

  render (px: number): void {
    const background = new PIXI.Graphics()
    background.eventMode = 'static'
    background.on('pointerdown', this.handlePointerDown)

    background.beginFill(0x000000)
    background.drawRect(0, 0, this.app.view.width, this.app.view.height)
    this.app.stage.addChild(background)

    let n = px
    while (n < this.app.view.height) {
      const line = new PIXI.Graphics()
      line.beginFill(LINE_COLOR)
      line.drawRect(0, n, this.app.view.width, 1)
      this.app.stage.addChild(line)
      n += px
    }

    n = px
    while (n < this.app.view.width) {
      const line = new PIXI.Graphics()
      line.beginFill(LINE_COLOR)
      line.drawRect(n, 0, 1, this.app.view.height)
      this.app.stage.addChild(line)
      n += px
    }
  }

  onPointerDown (handler: (event: PIXI.FederatedPointerEvent) => void): void {
    this.pointerDownHandler = handler
  }

  private readonly handlePointerDown = (event: PIXI.FederatedPointerEvent): void => {
    this.pointerDownHandler(event)
  }
}

export function render (app: PIXI.Application, px = 10): void {
  instance = instance ?? new Grid(app)
  instance.udpateApp(app)
  instance.render(px)
}

export function onPointerDown (handler: (event: PIXI.FederatedPointerEvent) => void): void {
  if (instance != null) {
    instance.onPointerDown(handler)
  }
}
