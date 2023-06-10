import * as PIXI from 'pixi.js'
import * as grid from './grid'
import { LegDemo } from './leg-demo'
import { Leg } from '../bug'

let instance: DemoApp

export type DemoType = 'leg'

class DemoApp {
  private readonly containerElement: HTMLElement
  private readonly app: PIXI.Application<HTMLCanvasElement>
  private playing = false

  constructor (containerElement?: HTMLElement) {
    const defaultContainer: HTMLElement | null = document.querySelector('main#canvas')
    this.containerElement = containerElement != null
      ? containerElement
      : (defaultContainer != null) ? defaultContainer : document.createElement('main')
    this.app = new PIXI.Application({ width: 360, height: 360 })
    this.appendToDom()
  }

  private appendToDom (): void {
    this.containerElement.replaceChildren(this.app.view)
  }

  private readonly togglePlaying = (): void => {
    this.playing = !this.playing
    this.playing ? this.app.start() : this.app.stop()
  }

  start (demo: DemoType = 'leg'): void {
    const demoGfx: Array<{ render: (delta?: number) => void }> = []
    grid.render(this.app)
    switch (demo) {
      case 'leg': {
        const leg = new Leg()
        const legDemo = new LegDemo(this.app.stage, leg)
        leg.position = { x: 100, y: 100 }
        legDemo.render()
        demoGfx.push(legDemo)
        break
      }
    }

    this.app.ticker.add(delta => {
      demoGfx.forEach(gfx => gfx.render(delta))
    })

    this.playing = true
    this.containerElement.addEventListener('mousedown', this.togglePlaying)
  }
}

export function start (): void {
  instance = instance ?? new DemoApp()
  instance.start()
}
