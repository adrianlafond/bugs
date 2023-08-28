import * as PIXI from 'pixi.js'

export class Background {
  pointerDownHandler: (event: PIXI.FederatedPointerEvent) => void = () => undefined

  constructor (protected app: PIXI.Application, protected bgColor: number = 0x000000) {}

  render (app: PIXI.Application = this.app): void {
    const background = new PIXI.Graphics()

    background.beginFill(this.bgColor)
    background.drawRect(0, 0, this.app.view.width, this.app.view.height)
    background.endFill()

    background.eventMode = 'static'
    background.on('pointerdown', this.handlePointerDown)
    this.app = app
    this.app.stage.addChild(background)
  }

  onPointerDown (handler: (event: PIXI.FederatedPointerEvent) => void): void {
    this.pointerDownHandler = handler
  }

  private readonly handlePointerDown = (event: PIXI.FederatedPointerEvent): void => {
    this.pointerDownHandler(event)
  }
}
