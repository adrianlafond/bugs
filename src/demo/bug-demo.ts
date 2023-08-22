import * as PIXI from 'pixi.js'
import { Bug, BugRender, BugSide, Leg, SegmentData } from '../bug'
import { Point, Vector } from '@adrianlafond/geom'
import { calculateSpiralPattern } from './patterns/spiral'
import { calculateVerticalPattern } from './patterns/vertical'
import { calculateHorizontalPattern } from './patterns/horizontal'
import { calculateRandomPattern } from './patterns/random'

type Pattern = 'random' | 'horizontal' | 'vertical' | 'spiral'

export class BugDemo {
  private readonly targetGfx = new PIXI.Graphics()
  private readonly segmentsGfx = new PIXI.Graphics()
  private readonly legsGfx = new PIXI.Graphics()

  private readonly bug: Bug

  private pattern: Pattern

  constructor (private readonly app: PIXI.Application) {
    this.pattern = this.updatePattern()
    this.bug = new Bug({
      segments: [{
        position: new Point(),
        legs: {
          left: [[
            new Point(-9, 0),
            new Point(-18, -15)
          ], [
            new Point(-9, 2),
            new Point(-20, -2)
          ], [
            new Point(-9, 4),
            new Point(-16, 8)
          ]],
          right: [[
            new Point(9, 0),
            new Point(18, -15)
          ], [
            new Point(9, 2),
            new Point(20, -2)
          ], [
            new Point(9, 4),
            new Point(16, 8)
          ]]
        },
      }, {
        position: new Point(0, 20),
        legs: {
          left: [[
            new Point(-9, 2),
            new Point(-20, -2)
          ]],
          right: [[
            new Point(9, 2),
            new Point(20, -2)
          ]]
        },
      }, {
        position: new Point(0, 20),
        legs: {
          left: [[
            new Point(-9, 2),
            new Point(-20, -2)
          ]],
          right: [[
            new Point(9, 2),
            new Point(20, -2)
          ]]
        }
      }, {
        position: new Point(0, 20),
        legs: {
          left: [[
            new Point(-9, 2),
            new Point(-20, -2)
          ]],
          right: [[
            new Point(9, 2),
            new Point(20, -2)
          ]]
        }
      }, {
        position: new Point(0, 20),
        legs: {
          left: [[
            new Point(-9, 2),
            new Point(-20, -2)
          ]],
          right: [[
            new Point(9, 2),
            new Point(20, -2)
          ]]
        }
      }],
      maxDistractionPx: 0,
      maxJigglePx: 0,
      timingFunction: 'easeOutSine',
    })
    this.app.stage.addChild(this.targetGfx)
    this.app.stage.addChild(this.legsGfx)
    this.app.stage.addChild(this.segmentsGfx)
    this.updateTarget()
  }

  render (deltaMs = 0): void {
    const bug = this.bug.tick({
      deltaMs,
      stageRect: {
        x: 5,
        y: 5,
        width: this.app.view.width - 5,
        height: this.app.view.height - 5
      }
    })
    this.bug.on('targetReached', this.handleTargetReached)
    this.clearGfx()
    this.renderTarget(bug.target)
    this.renderAllSegments(bug)
  }

  changeTarget (point: Point): void {
    this.bug.updateTarget(point)
  }

  private readonly handleTargetReached = (): void => {
    this.updateTarget()
  }

  private clearGfx () {
    this.targetGfx.clear()
    this.segmentsGfx.clear()
    this.segmentsGfx.removeChildren()
    this.legsGfx.clear()
    this.legsGfx.removeChildren()
  }

  private renderTarget ({ x, y }: BugRender['target']): void {
    const radius = 2
    this.targetGfx.lineStyle({ width: 1, color: 0xffcc99 })
    this.targetGfx.moveTo(x - radius, y - radius)
    this.targetGfx.lineTo(x + radius, y + radius)
    this.targetGfx.moveTo(x + radius, y - radius)
    this.targetGfx.lineTo(x - radius, y + radius)
  }

  private renderAllSegments (bug: BugRender): void {
    for (let i = bug.segments.length - 1; i >= 0; i--) {
      this.renderSegment(bug.segments[i], bug.activeSide, i)
    }
  }

  private renderSegment (segment: SegmentData,  activeSide: BugSide, index: number): void {
    const color = index == 0 ? 0xddeeff : 0xffff00

    const gfx = new PIXI.Graphics()
    this.segmentsGfx.addChild(gfx)

    gfx.lineStyle({ width: 1, color })
    gfx.drawCircle(0, 0, 9)
    gfx.lineStyle({ width: 0 })

    gfx.beginFill(color)
    gfx.moveTo(0, -8)
    gfx.lineTo(5, 8)
    gfx.lineTo(0, 2)
    gfx.lineTo(-5, 8)
    gfx.lineTo(0, -8)
    gfx.endFill()

    gfx.rotation = segment.position.radians
    gfx.position.x = segment.position.x
    gfx.position.y = segment.position.y

    this.renderSegmentLegs(segment, activeSide)
  }

  private renderSegmentLegs (segment: SegmentData, activeSide: BugSide): void {
    segment.legs.left.forEach(leg => this.renderLeg(leg, activeSide === 'left'))
    segment.legs.right.forEach(leg => this.renderLeg(leg, activeSide === 'right'))
  }

  private renderLeg (leg: Vector[], isActive: boolean): void {
    const socket = leg[0]
    const joint = leg.length >= 2 ? leg[1] : null
    const claw = leg.length >= 2 ? leg[2] : leg[1]

    const gfx = new PIXI.Graphics()
    this.legsGfx.addChild(gfx)

    gfx.lineStyle({ width: 1, color: 0xddeeff })
    gfx.moveTo(socket.x, socket.y)
    if (joint != null) {
      gfx.lineTo(joint.x, joint.y)
    }
    gfx.lineTo(claw.x, claw.y)
    gfx.lineStyle({ width: 0 })

    gfx.beginFill(0xddeeff)
    gfx.drawCircle(claw.x, claw.y, isActive ? 2 : 1)
    gfx.endFill()
  }

  private updateTarget (): void {
    if (this.pattern === 'random') {
      const { point, complete } = calculateRandomPattern(this.app.view.width, this.app.view.height)
      this.bug.updateTarget(point)
      if (complete) {
        this.updatePattern()
      }
    } else if (this.pattern === 'vertical') {
      const { point, complete } = calculateVerticalPattern(this.app.view.width, this.app.view.height)
      this.bug.updateTarget(point)
      if (complete) {
        this.updatePattern()
      }
    } else if (this.pattern === 'horizontal') {
      const { point, complete } = calculateHorizontalPattern(this.app.view.width, this.app.view.height)
      this.bug.updateTarget(point)
      if (complete) {
        this.updatePattern()
      }
    } else if (this.pattern === 'spiral') {
      const { point, complete } = calculateSpiralPattern(Math.min(this.app.view.width, this.app.view.height) * 0.5)
      point.x += this.app.view.width / 2
      point.y += this.app.view.height / 2
      this.bug.updateTarget(point)
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
