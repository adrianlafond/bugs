import * as PIXI from 'pixi.js'
import page from 'page'
import { BugDemo } from './bug-demo'
import { Bug001 } from './bug001'
import { BaseDemo } from './base-demo'

let instance: DemoApp

type Bug =
  | 'demo'
  | 'bug001'

const bugsMap = {
  demo: BugDemo,
  bug001: Bug001,
}

class DemoApp {
  private readonly containerElement: HTMLElement
  private readonly app: PIXI.Application<HTMLCanvasElement>
  private playing = false
  private bug: Bug = 'demo'
  private bugs: Bug[] = ['demo', 'bug001']
  private liveBug: BaseDemo | null = null

  constructor (selector: string) {
    const element = document.querySelector(selector)
    if (element instanceof HTMLElement) {
      this.containerElement = element
    } else {
      throw new Error('Canvas element "#bugs-canvas" not found.');
    }
    this.app = new PIXI.Application({ width: 360, height: 360 })
    this.initializePage()
    this.appendToDom()
    this.start()
  }

  private initializePage (): void {
    page('/bugs/demo', () => this.updateBug('demo'))
    page('/bugs/bug001', () => this.updateBug('bug001'))
    page('*', () => this.updateBug('demo'))

    page({ window }) // <- avoids "Uncaught TypeError: window2 is undefined"
    const prevEl = document.querySelector('.bugs__btn-prev')
    const nextEl = document.querySelector('.bugs__btn-next')
    if (prevEl) {
      prevEl.addEventListener('click', this.handlePrevClick)
    }
    if (nextEl) {
      nextEl.addEventListener('click', this.handleNextClick)
    }
  }

  private readonly handlePrevClick = (): void => {
    let index = this.bugs.findIndex(bug => bug === this.bug)
    if (index !== -1) {
      index -= 1
      if (index < 0) {
        index = this.bugs.length - 1
      }
      page(`/bugs/${this.bugs[index]}`)
    }
  }

  private readonly handleNextClick = (): void => {
    let index = this.bugs.findIndex(bug => bug === this.bug)
    if (index !== -1) {
      index += 1
      if (index >= this.bugs.length) {
        index = 0
      }
      page(`/bugs/${this.bugs[index]}`)
    }
  }

  private appendToDom (): void {
    this.containerElement.replaceChildren(this.app.view)
    this.containerElement.addEventListener('dblclick', this.togglePlaying)
  }

  private readonly togglePlaying = (): void => {
    this.playing = !this.playing
    this.playing ? this.app.start() : this.app.stop()
  }

  private updateBug (bug: Bug): void {
    this.bug = bug
    this.restart()
  }

  private restart (): void {
    if (this.liveBug) {
      this.liveBug.destroy()
    }
    this.liveBug = new bugsMap[this.bug](this.app)
    this.liveBug.render()
    if (!this.playing) {
      this.playing = true
      this.app.start()
    }
  }

  start (): void {
    this.app.ticker.add(() => {
      if (this.liveBug) {
        this.liveBug.render(this.app.ticker.deltaMS)
      }
    })
  }
}

export function start (selector: string): void {
  instance = instance ?? new DemoApp(selector)
}
