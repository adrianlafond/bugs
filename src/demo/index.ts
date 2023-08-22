import * as PIXI from 'pixi.js'
import * as grid from './grid'
import { BugDemo } from './bug-demo'
import { Point } from '@adrianlafond/geom'

let instance: DemoApp

class DemoApp {
  private readonly containerElement: HTMLElement
  private readonly app: PIXI.Application<HTMLCanvasElement>
  private playing = false

  constructor (containerElement?: HTMLElement) {
    const defaultContainer: HTMLElement | null = document.querySelector('#canvas')
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

    grid.onPointerDown((event: PIXI.FederatedPointerEvent): void => {
      const viewRect = this.app.view.getBoundingClientRect()
      bugDemo.changeTarget(new Point(event.clientX - viewRect.x, event.clientY - viewRect.y))
    })
    bugDemo.render()

    this.app.ticker.add(() => {
      bugDemo.render(this.app.ticker.deltaMS)
    })

    this.playing = true
    this.containerElement.addEventListener('dblclick', this.togglePlaying)
  }
}

export function start (): void {
  instance = instance ?? new DemoApp()
  instance.start()
}
