import * as PIXI from 'pixi.js'
import { Leg } from '../bug';

export class LegDemo {
  constructor (private stage: PIXI.Container, private leg: Leg) {}

  render() {
    const gfx = new PIXI.Graphics()
    const leg = this.leg.render()
    console.log(leg);
    gfx.lineStyle({ width: 1, color: 0x000000 })
    gfx.moveTo(leg.start.x, leg.start.x)
    gfx.lineTo(leg.end.x, leg.end.y)
    this.stage.addChild(gfx)
  }
}
