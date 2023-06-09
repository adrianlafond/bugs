import * as PIXI from 'pixi.js'
import * as grid from './grid'
import { LegDemo } from './leg-demo'
import { Leg } from '../bug'

let instance: DemoApp

export type DemoType = 'leg'

class DemoApp {
  private readonly containerElement: HTMLElement
  private readonly app: PIXI.Application<HTMLCanvasElement>

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

  start (demo: DemoType = 'leg'): void {
    grid.render(this.app)
    switch (demo) {
      case 'leg':
        const leg = new Leg()
        const legDemo = new LegDemo(this.app.stage, leg)
        leg.position = { x: 100, y: 100}
        legDemo.render()
        break
    }
  }
}

export function start (): void {
  instance = instance ?? new DemoApp()
  instance.start()
}
