import * as PIXI from 'pixi.js'
import { Background } from './background/background'
import { Bug, BugSide, SegmentData } from '../bug'
import { Point, Vector } from '@adrianlafond/geom'
import { BaseDemo } from './base-demo'

const COLOR = 0x779900

export class Bug006 extends BaseDemo {
  protected readonly bug: Bug

  private readonly background: Background
  private readonly segmentsGfx = new PIXI.Graphics()
  private readonly legsGfx = new PIXI.Graphics()

  constructor (app: PIXI.Application) {
    super(app)
    this.targetColor = 0x889900
    this.bug = new Bug({
      stageRect: {
        x: 0,
        y: 0,
        width: app.view.width,
        height: app.view.height
      },
      segments: [{
        position: new Point(0, 30),
        legs: {
          left: [[
            new Point(-7, -2),
            new Point(-28, -28)
          ], [
            new Point(-7, 0),
            new Point(-36, -10)
          ], [
            new Point(-7, 2),
            new Point(-32, 10)
          ], [
            new Point(-7, 4),
            new Point(-22, 24)
          ]],
          right: [[
            new Point(7, -2),
            new Point(28, -28)
          ], [
            new Point(7, 0),
            new Point(36, -10)
          ], [
            new Point(7, 2),
            new Point(32, 10)
          ], [
            new Point(7, 4),
            new Point(22, 24)
          ]]
        }
      }],
      millisecondsPerStep: 150,
      maxStepPx: 16,
      maxDistractionPx: 24,
      maxJigglePx: 0
    })

    this.background = new Background(this.app, 0x223300)
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
    this.renderSegment(bug.segments[0], bug.activeSide)
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

  private renderSegment (segment: SegmentData, activeSide: BugSide): void {
    const gfx = this.renderSegmentBase(segment)

    // body, tail, mandibles
    gfx.beginFill(COLOR)
    gfx.drawCircle(0, 0, 7)
    gfx.drawPolygon(-2, 7, 2, 7, 0, 14)
    gfx.drawPolygon(-1, -9, -5, -13, -3, -17)
    gfx.drawPolygon(1, -9, 5, -13, 3, -17)
    gfx.endFill()

    // eyes
    gfx.lineStyle({ width: 1, color: COLOR })
    gfx.drawCircle(-3, -7, 5)
    gfx.drawCircle(3, -7, 5)

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
    if (joint != null) {
      gfx.beginFill(COLOR)
      gfx.drawPolygon(joint.x, joint.y, joint.x + 2, joint.y + 2, socket.x, socket.y)
      gfx.endFill()
      gfx.moveTo(joint.x, joint.y)
    }
    gfx.lineTo(claw.x, claw.y)
    gfx.lineStyle({ width: 0 })
  }
}
