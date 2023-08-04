import * as PIXI from 'pixi.js'
import { Point, Vector } from '@adrianlafond/geom'
import { Leg } from '../bug'

export class LegDemo {
  private readonly gfx = new PIXI.Graphics()
  private legs: Leg[] = []

  constructor (private readonly stage: PIXI.Container) {
    this.initLegs()
    this.initGfx()
  }

  private initLegs() {
    this.legs[0] = new Leg()
    this.legs[1] = new Leg({
      socket: new Vector(100, 140, Math.PI * 0.5),
      claw: new Point(100, 164),
    })
    this.legs[2] = new Leg({
      socket: new Vector(60, 140, Math.PI),
      claw: new Point(36, 140),
    })
    this.legs[3] = new Leg({
      socket: new Vector(60, 100, Math.PI * 1.5),
      claw: new Point(60, 124),
    })
  }

  private initGfx (): void {
    this.stage.addChild(this.gfx)
    this.legs[0].calculateStep(new Vector(100, 100, Math.PI * 1.75))
    this.legs[1].calculateStep(new Vector(100, 140, Math.PI * 0.25))
    this.legs[2].calculateStep(new Vector(60, 140, Math.PI * 0.75))
    this.legs[3].calculateStep(new Vector(60, 100, Math.PI * 1.75))
  }

  private stepMS = 0
  private direction: 'forward' | 'backward' = 'forward'

  render (deltaMS = 0): void {
    this.gfx.clear()
    this.gfx.lineStyle({ width: 1, color: 0x000000 })

    this.stepMS += deltaMS
    const stepProgress = Math.min(1, this.stepMS / 250)
    if (stepProgress >= 1) {
      this.stepMS = 0
      this.direction = this.direction === 'forward' ? 'backward' : 'forward'
    }

    for (let i = 0; i < 4; i++) {
      let socketVector = new Vector;
      if (i === 0) {
        socketVector = new Vector(100, 100, 0)
      } else if (i === 1) {
        socketVector = new Vector(100, 140, Math.PI * 0.5)
      } else if (i === 2) {
        socketVector = new Vector(60, 140, Math.PI)
      } else if (i === 3) {
        socketVector = new Vector(60, 100, Math.PI * 1.5)
      }
      const leg = this.legs[i].render({
        stepProgress,
        socket: socketVector,
      })

      this.gfx.moveTo(leg.socket.x, leg.socket.y)
      this.gfx.lineTo(leg.claw.x, leg.claw.y)
      this.gfx.drawCircle(leg.claw.x, leg.claw.y, 2)

      if (this.stepMS === 0) {
        if (i == 0) {
          const targetRadians = this.direction === 'forward' ? Math.PI * 1.75 : Math.PI * 0.25
          this.legs[0].calculateStep(new Vector(100, 100, targetRadians))
        } else if (i === 1) {
          const targetRadians = this.direction === 'forward' ? Math.PI * 0.25 : Math.PI * 0.75
          this.legs[1].calculateStep(new Vector(100, 140, targetRadians))
        } else if (i === 2) {
          const targetRadians = this.direction === 'forward' ? Math.PI * 1.25 : Math.PI * 0.75
          this.legs[2].calculateStep(new Vector(60, 140, targetRadians))
        } else if (i === 3) {
          const targetRadians = this.direction === 'forward' ? Math.PI * 1.75 : Math.PI * 1.25
          this.legs[3].calculateStep(new Vector(60, 100, targetRadians))
        }
      }
    }
  }
}
