import * as PIXI from 'pixi.js'
import { Background } from './background/background'
import { Bug, BugRender, BugSide, SegmentData } from '../bug'
import { Point, Vector } from '@adrianlafond/geom'
import { BaseDemo } from './base-demo'

const COLOR = 0xd0e8ff
const BG_COLOR = 0x001133
const TARGET_COLOR = 0x335577

const segmentRadius = [
  9, // head
  7, // front legs
  8,
  9,
  7,
  8, // back legs
  7,
  6,
  5,
  4,
  3,
  2,
  1,
]

export class Bug013 extends BaseDemo {
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
            new Point(-24, 0)
          ]],
          right: [[
            new Point(9, 0),
            new Point(24, 0)
          ]],
        }
      }, {
        position: new Point(0, 9),
      }, {
        position: new Point(0, 9),
      }, {
        position: new Point(0, 9),
      }, {
        position: new Point(0, 9),
        legs: {
          left: [[
            new Point(-9, 0),
            new Point(-18, 0)
          ]],
          right: [[
            new Point(9, 0),
            new Point(18, 0)
          ]],
        }
      }, {
        position: new Point(0, 9)
      }, {
        position: new Point(0, 8)
      }, {
        position: new Point(0, 7)
      }, {
        position: new Point(0, 6)
      }, {
        position: new Point(0, 5)
      }, {
        position: new Point(0, 4)
      }, {
        position: new Point(0, 3)
      }],
      millisecondsPerStep: 220,
      maxStepPx: 18,
      maxDistractionPx: 24,
      maxJigglePx: 2,
      // timingFunction: 'easeOutBounce'
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

    gfx.drawCircle(-7, -14, 3)
    gfx.drawCircle(7, -14, 3)
  }

  private renderSegment (segment: SegmentData, activeSide: BugSide, index: number): void {
    const gfx = this.renderSegmentBase(segment)
    gfx.lineStyle({ width:1, color: COLOR })
    gfx.drawCircle(0, 0, segmentRadius[index])
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

    gfx.lineStyle({ width:1, color: COLOR })
    gfx.drawCircle(socket.x, socket.y, 2)
    if (joint != null) {
      gfx.drawCircle(joint.x, joint.y, 2)
    }
    gfx.drawCircle(claw.x, claw.y, 3)
  }
}
