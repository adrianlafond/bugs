import * as PIXI from 'pixi.js'
import { Background } from './background/background'
import { Bug, BugRender, BugSide, SegmentData } from '../bug'
import { Point, Vector } from '@adrianlafond/geom'
import { BaseDemo } from './base-demo'

const COLOR = 0x224400
const BG_COLOR = 0x779900
const TARGET_COLOR = 0x557700

export class Bug012 extends BaseDemo {
  protected readonly bug: Bug

  private readonly background: Background
  private readonly segmentsGfx = new PIXI.Graphics()
  private readonly legsGfx = new PIXI.Graphics()

  constructor (app: PIXI.Application) {
    super(app)
    this.targetColor = TARGET_COLOR
    this.bug = new Bug({
      stageRect: {
        x: 0,
        y: 0,
        width: app.view.width,
        height: app.view.height
      },
      segments: [{
        position: new Point(0, 0),
      }, {
        position: new Point(0, 30),
        legs: {
          left: [[
            new Point(-7, 0),
            new Point(-32, 0)
          ], [
            new Point(7, 0),
            new Point(32, 0)
          ]],
          right: []
        }
      }, {
        position: new Point(0, 30),
        legs: {
          left: [],
          right: [[
            new Point(-7, 0),
            new Point(-32, 0)
          ], [
            new Point(7, 0),
            new Point(32, 0)
          ]],
        }
      }, {
        position: new Point(0, 30),
        legs: {
          left: [[
            new Point(-7, 0),
            new Point(-32, 0)
          ], [
            new Point(7, 0),
            new Point(32, 0)
          ]],
          right: []
        }
      }],
      millisecondsPerStep: 150,
      maxStepPx: 24,
      maxDistractionPx: 24,
      maxJigglePx: 0,
      timingFunction: 'easeOutBounce'
    })

    this.background = new Background(this.app, BG_COLOR)
    this.background.render()

    this.app.stage.addChild(this.targetGfx)
    this.app.stage.addChild(this.legsGfx)
    this.app.stage.addChild(this.segmentsGfx)
    this.updateTargetPattern()
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
    super.changeTarget(point)
    this.bug.updateTarget(point)
  }

  destroy (): void {
    super.destroy()
    this.clearGfx()
  }

  protected clearGfx (): void {
    super.clearGfx()
    this.segmentsGfx.clear()
    this.segmentsGfx.removeChildren()
    this.legsGfx.clear()
    this.legsGfx.removeChildren()
  }

  private renderAllSegments (bug: BugRender): void {
    for (let i = bug.segments.length - 1; i >= 0; i--) {
      if (i === 0) {
        this.renderHead(bug.segments[i])
      } else {
        this.renderSegment(bug.segments[i], bug.activeSide)
      }
    }
  }

  private renderHead(segment: SegmentData): void {
    const gfx = this.renderSegmentBase(segment)
    gfx.beginFill(COLOR)
    gfx.drawRect(-10, -4, 20, 20)
    gfx.drawRect(-16, -6, 8, 8)
    gfx.drawRect(8, -6, 8, 8)
    gfx.endFill()

    gfx.lineStyle({ width: 1, color: COLOR})
    gfx.moveTo(-2, -4)
    gfx.lineTo(-2, -14)
    gfx.lineTo(-6, -14)
    gfx.lineTo(-6, -26)
    gfx.moveTo(2, -4)
    gfx.lineTo(2, -14)
    gfx.lineTo(6, -14)
    gfx.lineTo(6, -26)
    gfx.lineStyle({ width: 0 })
  }

  private renderSegment (segment: SegmentData, activeSide: BugSide): void {
    const gfx = this.renderSegmentBase(segment)
    gfx.beginFill(COLOR)
    gfx.drawRect(-6, -15, 12, 30)
    gfx.endFill()
    this.renderSegmentLegs(segment, activeSide)
  }

  private renderSegmentBase (segment: SegmentData): PIXI.Graphics {
    const gfx = new PIXI.Graphics()
    this.segmentsGfx.addChild(gfx)
    gfx.rotation = segment.position.radians
    gfx.position.x = segment.position.x
    gfx.position.y = segment.position.y
    return gfx
  }

  private renderSegmentLegs (segment: SegmentData, activeSide: BugSide): void {
    segment.legs.left.forEach(leg => this.renderLeg(leg, activeSide === 'left'))
    segment.legs.right.forEach(leg => this.renderLeg(leg, activeSide === 'right'))
  }

  private renderLeg (leg: Vector[], _isActive: boolean): void {
    const socket = leg[0]
    const joint = leg.length >= 2 ? leg[1] : null
    const claw = leg.length >= 2 ? leg[2] : leg[1]

    const gfx = new PIXI.Graphics()
    this.legsGfx.addChild(gfx)

    const color = COLOR
    gfx.lineStyle({ width: 1, color })
    gfx.moveTo(socket.x, socket.y)
    if (joint != null) {
      gfx.lineTo(joint.x, joint.y)
    }
    gfx.lineStyle({ width: 4, color })
    gfx.lineTo(claw.x, claw.y)
    gfx.lineStyle({ width: 0 })
  }
}
