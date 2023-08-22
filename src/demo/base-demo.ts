import * as PIXI from 'pixi.js'
import { Point } from '@adrianlafond/geom'

import { calculateSpiralPattern } from './patterns/spiral'
import { calculateVerticalPattern } from './patterns/vertical'
import { calculateHorizontalPattern } from './patterns/horizontal'
import { calculateRandomPattern } from './patterns/random'

type Pattern = 'random' | 'horizontal' | 'vertical' | 'spiral'

export class BaseDemo {
  private pattern: Pattern

  constructor (protected readonly app: PIXI.Application) {
    this.pattern = this.updatePattern()
    if (app.view.addEventListener) {
      app.view.addEventListener('pointerdown', this.handlePointerDown)
    }
  }

  changeTarget (_point: Point): void {
    // Designed to be overridden.
  }

  destroy (): void {
    if (this.app.view.removeEventListener) {
      this.app.view.removeEventListener('pointerdown', this.handlePointerDown)
    }
  }

  private handlePointerDown = (event: Event | PointerEvent) => {
    if (this.app.view.getBoundingClientRect) {
      const viewRect = this.app.view.getBoundingClientRect()
      if ('clientX' in event && 'clientY' in event) {
        this.changeTarget(new Point(event.clientX - viewRect.x, event.clientY - viewRect.y))
      }
    }
  }

  protected updateTargetPattern (): void {
    if (this.pattern === 'random') {
      const { point, complete } = calculateRandomPattern(this.app.view.width, this.app.view.height)
      this.changeTarget(point)
      if (complete) {
        this.updatePattern()
      }
    } else if (this.pattern === 'vertical') {
      const { point, complete } = calculateVerticalPattern(this.app.view.width, this.app.view.height)
      this.changeTarget(point)
      if (complete) {
        this.updatePattern()
      }
    } else if (this.pattern === 'horizontal') {
      const { point, complete } = calculateHorizontalPattern(this.app.view.width, this.app.view.height)
      this.changeTarget(point)
      if (complete) {
        this.updatePattern()
      }
    } else if (this.pattern === 'spiral') {
      const { point, complete } = calculateSpiralPattern(Math.min(this.app.view.width, this.app.view.height) * 0.5)
      point.x += this.app.view.width / 2
      point.y += this.app.view.height / 2
      this.changeTarget(point)
      if (complete) {
        this.updatePattern()
      }
    }
  }

  private updatePattern (): Pattern {
    const index = Math.floor(Math.random() * 4)
    const patterns: Pattern[] = ['random', 'horizontal', 'vertical', 'spiral']
    return (this.pattern = patterns[index])
  }
}
