import * as PIXI from 'pixi.js'

let instance: LegDemo

class LegDemo {
  constructor (private readonly stage: PIXI.Container) {}

  drawTestGraphic (): void {
    const gfx = new PIXI.Graphics()
    gfx.beginFill(0xff0000)
    gfx.drawRect(130, 130, 100, 100)
    this.stage.addChild(gfx)
  }
}

export function startLegDemo (stage: PIXI.Container): void {
  instance = instance ?? new LegDemo(stage)
  instance.drawTestGraphic()
}
