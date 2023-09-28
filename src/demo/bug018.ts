import * as PIXI from 'pixi.js'
import { Background } from './background/background'
import { Bug, BugRender, BugSide, SegmentData } from '../bug'
import { Point, Vector } from '@adrianlafond/geom'
import { BaseDemo } from './base-demo'

const COLOR = 0x111111
const BG_COLOR = 0xF0E68C
const TARGET_COLOR = 0xFF00FF

export class Bug018 extends BaseDemo {
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
        position: new Point(0, 7),
        legs: {
          left: [[
            new Point(-10, 4),
            new Point(-32, -4)
          ]],
          right: [[
            new Point(10, 4),
            new Point(32, -4)
          ]],
        }
      }, {
        position: new Point(0, 12),
        legs: {
          left: [[
            new Point(-3, 16),
            new Point(-36, 24)
          ]],
          right: [[
            new Point(3, 16),
            new Point(36, 24)
          ]],
        }
      }],
      millisecondsPerStep: 120,
      maxStepPx: 16,
      maxDistractionPx: 12,
      maxJigglePx: 1,
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
    this.renderHead(bug.segments[0])
    this.renderMiddle(bug.segments[1], bug.activeSide)
    this.renderEnd(bug.segments[2], bug.activeSide)
  }

  private renderHead(segment: SegmentData): void {
    const gfx = this.renderSegmentBase(segment)
    gfx.beginFill(COLOR)

    gfx.drawPolygon(
      -10, 0,
      -14, -4,
       14, -4,
       10, 0,
    )
    gfx.drawRect(-6, -22, 12, 20)

    gfx.beginFill(TARGET_COLOR)
    gfx.drawRect(-7, -10, 14, 4)

    gfx.endFill()
  }

  private renderMiddle(segment: SegmentData, activeSide: BugSide) {
    const gfx = this.renderSegmentBase(segment)
    gfx.beginFill(COLOR)
    gfx.drawCircle(0, -4, 5)
    gfx.drawPolygon(
      0, 0,
      -12, 4,
      -8, 24,
      8, 24,
      12, 4,
      0, 0
    )
    gfx.beginFill(TARGET_COLOR)
    gfx.drawPolygon(
      -4, 2,
      0, 18,
      4, 2,
    )
    gfx.endFill()
    this.renderSegmentLegs(segment, activeSide)
  }

  private renderEnd(segment: SegmentData, activeSide: BugSide): void {
    const gfx = this.renderSegmentBase(segment)
    gfx.beginFill(COLOR)
    gfx.drawEllipse(0, 8, 8, 12)
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

    gfx.lineStyle({ width: 4, color: COLOR })
    gfx.moveTo(socket.x, socket.y)
    if (joint != null) {
      gfx.lineTo(joint.x, joint.y)
    }
    gfx.lineTo(claw.x, claw.y)
  }
}
