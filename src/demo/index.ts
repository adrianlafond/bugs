import * as PIXI from 'pixi.js'
import * as grid from './grid'
import { startLegDemo } from './leg-demo'

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
        startLegDemo(this.app.stage)
        break
    }
  }
}

export function start (): void {
  instance = instance ?? new DemoApp()
  instance.start()
}
