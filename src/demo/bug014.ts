import * as PIXI from 'pixi.js'
import { Background } from './background/background'
import { Bug, BugRender, BugSide, SegmentData } from '../bug'
import { Point, Vector } from '@adrianlafond/geom'
import { BaseDemo } from './base-demo'

const COLOR =  0xffff00
const BG_COLOR = 0x0000ff
const TARGET_COLOR = 0xffff00

const segmentRadius = [
  9, // head
  5, // front legs
  8,
  5, // back legs
  2,
  2,
  2,
  2,
  2,
  2,
  3,
]

export class Bug014 extends BaseDemo {
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
        position: new Point(0, 15),
        legs: {
          left: [[
            new Point(-9, 0),
            new Point(-24, -12)
          ]],
          right: [[
            new Point(9, 0),
            new Point(24, -12)
          ]],
        }
      }, {
        position: new Point(0, 15),
      }, {
        position: new Point(0, 15),
        legs: {
          left: [[
            new Point(9, 0),
            new Point(18, 0)
          ]],
          right: [[
            new Point(-9, 0),
            new Point(-18, 0)
          ]],
        }
      }, {
        position: new Point(0, 9)
      }, {
        position: new Point(0, 9)
      }, {
        position: new Point(0, 9)
      }, {
        position: new Point(0, 9)
      }, {
        position: new Point(0, 9)
      }, {
        position: new Point(0, 9)
      }, {
        position: new Point(0, 9)
      }],
      millisecondsPerStep: 160,
      maxStepPx: 18,
      maxDistractionPx: 24,
      maxJigglePx: 2,
      timingFunction: 'easeOutQuad'
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
        this.renderSegment(bug.segments[i], bug.activeSide, i)
      }
    }
  }

  private renderHead(segment: SegmentData): void {
    const gfx = this.renderSegmentBase(segment)
    gfx.lineStyle({ width:1, color: COLOR })
    gfx.drawCircle(0, 0, segmentRadius[0])
    gfx.drawCircle(0, 0, segmentRadius[0] - 3)
    gfx.drawCircle(0, 0, segmentRadius[0] - 6)

    gfx.lineStyle({ width: 1 })
    gfx.beginFill(COLOR)
    gfx.drawCircle(-7, -15, 5)
    gfx.drawCircle(7, -15, 5)
    gfx.endFill()
  }

  private renderSegment (segment: SegmentData, activeSide: BugSide, index: number): void {
    const gfx = this.renderSegmentBase(segment)
    if (index === segmentRadius.length - 1) {
      gfx.beginFill(COLOR)
    } else {
      gfx.lineStyle({ width:1, color: COLOR })
      if (index === 2) {
        gfx.drawCircle(0, 0, segmentRadius[index] - 3)
      }
    }
    gfx.drawCircle(0, 0, segmentRadius[index])
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

    // gfx.lineStyle({ width:1, color: COLOR })
    gfx.beginFill(COLOR)
    gfx.drawCircle(socket.x, socket.y, 2)
    if (joint != null) {
      gfx.drawCircle(joint.x, joint.y, 2)
    }
    gfx.drawCircle(claw.x, claw.y, 3)
    gfx.endFill()

    gfx.lineStyle({ width: 1, color: COLOR })
    gfx.moveTo(socket.x, socket.y)
    if (joint != null) {
      gfx.lineTo(joint.x, joint.y)
    }
    gfx.lineTo(claw.x, claw.y)
  }
}
