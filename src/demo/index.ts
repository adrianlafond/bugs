import * as PIXI from 'pixi.js'
import * as grid from './grid'
// import { LegDemo } from './leg-demo'
import { BugDemo } from './bug-demo'

let instance: DemoApp

export type DemoType = 'bug' | 'leg'

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

  start (): void {
    grid.render(this.app)
    const bugDemo = new BugDemo(this.app)
    bugDemo.render()

    this.app.ticker.add(() => {
      bugDemo.render(this.app.ticker.deltaMS)
    })

    this.playing = true
    this.containerElement.addEventListener('mousedown', this.togglePlaying)
  }
}

export function start (): void {
  instance = instance ?? new DemoApp()
  instance.start()
}
