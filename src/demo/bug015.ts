import * as PIXI from 'pixi.js'
import { Background } from './background/background'
import { Bug, BugRender, BugSide, SegmentData } from '../bug'
import { Point, Vector } from '@adrianlafond/geom'
import { BaseDemo } from './base-demo'

const COLOR = 0x1050b0
const BG_COLOR = 0xfe8800
const TARGET_COLOR = 0xc0c000

export class Bug015 extends BaseDemo {
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
        legs: {
          left: [[
            new Point(-3, 0),
            new Point(-36, -28)
          ], [
            new Point(-3, 0),
            new Point(-28, 0)
          ], [
            new Point(-3, 0),
            new Point(-22, 18)
          ]],
          right: [[
            new Point(3, 0),
            new Point(36, -28)
          ], [
            new Point(3, 0),
            new Point(28, 0)
          ], [
            new Point(3, 0),
            new Point(22, 18)
          ]],
        }
      }, {
        position: new Point(0, 15),
      }],
      millisecondsPerStep: 120,
      maxStepPx: 16,
      maxDistractionPx: 36,
      maxJigglePx: 2,
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
    this.renderHead(bug.segments[0], bug.activeSide)
    this.renderEnd(bug.segments[1])
  }

  private renderHead(segment: SegmentData, activeSide: BugSide): void {
    const gfx = this.renderSegmentBase(segment)
    gfx.beginFill(COLOR)
    gfx.drawEllipse(0, -19, 3, 15)
    gfx.endFill()

    // eyes and antennae
    gfx.lineStyle({ width: 1, color: COLOR })
    gfx.drawCircle(-5, -33, 3)
    gfx.drawCircle(5, -33, 3)
    gfx.lineStyle({ width: 0.5, color: COLOR })
    gfx.moveTo(-5, -25)
    gfx.bezierCurveTo(
      -25, -25,
      -8, -25,
      -15, -80,
    )
    gfx.moveTo(5, -25)
    gfx.bezierCurveTo(
      25, -25,
      8, -25,
      15, -80,
    )
    gfx.lineStyle({ width: 0 })

    gfx.beginFill(COLOR)
    gfx.drawCircle(0, 0, 3)
    gfx.endFill()
    this.renderSegmentLegs(segment, activeSide)
  }

  private renderEnd(segment: SegmentData): void {
    const gfx = this.renderSegmentBase(segment)
    gfx.beginFill(COLOR)
    gfx.drawEllipse(0, -5, 3, 6)
    gfx.drawEllipse(0, 5, 6, 10)
    gfx.drawPolygon(
      -2, 10,
      2, 10,
      0, 32
    )
    gfx.endFill()
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

    gfx.lineStyle({ width: 1, color: COLOR })
    gfx.moveTo(socket.x, socket.y)
    if (joint != null) {
      gfx.lineTo(joint.x, joint.y)
      gfx.lineStyle({ width: 0, color: COLOR })
      gfx.beginFill(COLOR)
      gfx.drawPolygon(
        joint.x + 2, joint.y,
        joint.x - 2, joint.y,
        claw.x, claw.y
      )
      gfx.endFill()
    } else {
      gfx.lineTo(claw.x, claw.y)
    }
  }
}
