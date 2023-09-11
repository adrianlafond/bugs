import * as PIXI from 'pixi.js'
import { Background } from './background/background'
import { Bug, BugRender, BugSide, SegmentData } from '../bug'
import { Point, Vector } from '@adrianlafond/geom'
import { BaseDemo } from './base-demo'

const COLOR = 0x404040
const BG_COLOR = 0xd0d0d0
const TARGET_COLOR = 0xa0a0a0

export class Bug016 extends BaseDemo {
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
            new Point(-26, -12)
          ], [
            new Point(-3, 0),
            new Point(-18, 6)
          ], [
            new Point(-3, 0),
            new Point(-12, 24)
          ]],
          right: [[
            new Point(3, 0),
            new Point(48, -12)
          ]],
        }
      }, {
        position: new Point(0, 15),
      }],
      millisecondsPerStep: 250,
      maxStepPx: 24,
      maxDistractionPx: 36,
      maxJigglePx: 3,
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
    this.renderHead(bug.segments[0], bug.activeSide)
    this.renderEnd(bug.segments[1])
  }

  private renderHead(segment: SegmentData, activeSide: BugSide): void {
    const gfx = this.renderSegmentBase(segment)

    // eyes and antennae
    gfx.lineStyle({ width: 1, color: COLOR })
    gfx.drawCircle(-8, -33, 8)
    gfx.drawCircle(12, -25, 6)
    gfx.moveTo(0, 0)
    gfx.lineTo(-6, -26)
    gfx.moveTo(0, 0)
    gfx.lineTo(8, -20)

    // pupils
    gfx.lineStyle({ width: 0, color: COLOR })
    gfx.beginFill(COLOR)
    gfx.drawCircle(-8, -35, 2)
    gfx.drawCircle(12, -26, 2)

    // body
    gfx.drawRect(-3, -3, 6, 6)
    gfx.endFill()
    this.renderSegmentLegs(segment, activeSide)
  }

  private renderEnd(segment: SegmentData): void {
    const gfx = this.renderSegmentBase(segment)
    gfx.beginFill(COLOR)
    gfx.drawRect(4, 24, 4, 4)
    gfx.endFill()
    gfx.lineStyle({ width: 1, color: COLOR })
    gfx.moveTo(0, -15)
    gfx.lineTo(6, 24)
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
    segment.legs.left.forEach(leg => this.renderLeftLeg(leg, activeSide === 'left'))
    segment.legs.right.forEach(leg => this.renderRightLeg(leg))
  }

  private renderLeftLeg (leg: Vector[], _isActive: boolean): void {
    const socket = leg[0]
    const joint = leg.length >= 2 ? leg[1] : null
    const claw = leg.length >= 2 ? leg[2] : leg[1]

    const gfx = new PIXI.Graphics()
    this.legsGfx.addChild(gfx)

    gfx.lineStyle({ width: 1, color: COLOR })
    gfx.moveTo(socket.x, socket.y)
    if (joint != null) {
      gfx.lineTo(joint.x, joint.y);
      gfx.lineStyle({ width: 0, color: COLOR })
      gfx.beginFill(COLOR)
      gfx.drawPolygon(
        joint.x - 2, joint.y,
        joint.x + 2, joint.y,
        claw.x + 1, claw.y,
        claw.x - 1, claw.y
      )
      gfx.endFill()
    } else {
      gfx.lineStyle({ width: 10, color: COLOR })
      gfx.lineTo(claw.x, claw.y)
    }
  }

  private renderRightLeg(leg: Vector[]): void {
    const socket = leg[0]
    const joint = leg.length >= 2 ? leg[1] : null
    const claw = leg.length >= 2 ? leg[2] : leg[1]

    const gfx = new PIXI.Graphics()
    this.legsGfx.addChild(gfx)
    gfx.lineStyle({ width: 1, color: COLOR })
    gfx.moveTo(socket.x, socket.y)
    if (joint != null) {
      gfx.lineTo(joint.x, joint.y);
      gfx.lineStyle({ width: 0, color: COLOR })
      gfx.beginFill(COLOR)
      gfx.drawPolygon(
        joint.x - 5, joint.y,
        joint.x + 5, joint.y,
        claw.x + 2, claw.y,
        claw.x - 2, claw.y
      )
      gfx.endFill()
    } else {
      gfx.lineStyle({ width: 10, color: COLOR })
      gfx.lineTo(claw.x, claw.y)
    }
  }
}
