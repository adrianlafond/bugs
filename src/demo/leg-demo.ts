import * as PIXI from 'pixi.js'
import { Leg } from '../bug'

export class LegDemo {
  private readonly gfx = new PIXI.Graphics()

  constructor (private readonly stage: PIXI.Container, private readonly leg: Leg) {
    this.initGfx()
  }

  private initGfx (): void {
    this.stage.addChild(this.gfx)
  }

  render (delta = 0): void {
    const leg = this.leg.render(delta)
    this.gfx.clear()
    this.gfx.lineStyle({ width: 1, color: 0x000000 })
    this.gfx.moveTo(leg.start.x, leg.start.x)
    this.gfx.lineTo(leg.end.x, leg.end.y)
  }
}
