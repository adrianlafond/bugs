import * as PIXI from 'pixi.js'
import page from 'page'
import { BugDemo } from './bug-demo'
import { BaseDemo } from './base-demo'
import { Bug001 } from './bug001'
import { Bug002 } from './bug002'
import { Bug003 } from './bug003'
import { Bug004 } from './bug004'
import { Bug005 } from './bug005'
import { Bug006 } from './bug006'
import { Bug007 } from './bug007'
import { Bug008 } from './bug008'
import { Bug009 } from './bug009'
import { Bug010 } from './bug010'
import { Bug011 } from './bug011'
import { Bug012 } from './bug012'
import { Bug013 } from './bug013'
import { Bug014 } from './bug014'
import { Bug015 } from './bug015'
import { Bug016 } from './bug016'

let instance: DemoApp

const bugsMap = {
  demo: BugDemo,
  bug001: Bug001,
  bug002: Bug002,
  bug003: Bug003,
  bug004: Bug004,
  bug005: Bug005,
  bug006: Bug006,
  bug007: Bug007,
  bug008: Bug008,
  bug009: Bug009,
  bug010: Bug010,
  bug011: Bug011,
  bug012: Bug012,
  bug013: Bug013,
  bug014: Bug014,
  bug015: Bug015,
  bug016: Bug016,
}

type Bug = keyof typeof bugsMap

class DemoApp {
  private readonly containerElement: HTMLElement
  private readonly app: PIXI.Application<HTMLCanvasElement>
  private playing = false
  private readonly bugs: Bug[] = Object.keys(bugsMap).reverse() as Bug[]
  private bug: Bug = this.bugs[0]
  private liveBug: BaseDemo | null = null

  constructor (selector: string) {
    const element = document.querySelector(selector)
    if (element instanceof HTMLElement) {
      this.containerElement = element
    } else {
      throw new Error('Canvas element "#bugs-canvas" not found.')
    }
    this.bugs = this.bugs.slice(0, this.bugs.length - 1)
    this.app = new PIXI.Application({ width: 360, height: 480 })
    this.initializePage()
    this.appendToDom()
    this.start()
  }

  private initializePage (): void {
    page({
      hashbang: true,
      window // <- avoids "Uncaught TypeError: window2 is undefined"
    })

    page(':id', ({ params }) => this.updateBug(params.id))
    page('*', () => this.updateBug(this.bugs[0]))

    if (window.location.hash.startsWith('#!')) {
      this.updateBug(window.location.hash.substring(2) as Bug)
    } else {
      this.updateBug(this.bugs[0])
    }
    const prevEl = document.querySelector('.bugs__btn-prev')
    const nextEl = document.querySelector('.bugs__btn-next')
    if (prevEl != null) {
      prevEl.addEventListener('click', this.handlePrevClick)
    }
    if (nextEl != null) {
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
      page(`#!${this.bugs[index]}`)
    } else {
      page(`#!${this.bugs[0]}`)
    }
  }

  private readonly handleNextClick = (): void => {
    let index = this.bugs.findIndex(bug => bug === this.bug)
    if (index !== -1) {
      index += 1
      if (index >= this.bugs.length) {
        index = 0
      }
      page(`#!${this.bugs[index]}`)
    } else {
      page(`#!${this.bugs[0]}`)
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
    this.bug = bug in bugsMap || bug === 'demo' ? bug : this.bugs[0]
    this.restart()
  }

  private restart (): void {
    if (this.liveBug != null) {
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
      if (this.liveBug != null) {
        this.liveBug.render(this.app.ticker.deltaMS)
      }
    })
  }
}

export function start (selector: string): void {
  instance = instance ?? new DemoApp(selector)
}
