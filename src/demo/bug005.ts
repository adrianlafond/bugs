import * as PIXI from 'pixi.js'
import { Background } from './background/background'
import { Bug, BugRender, BugSide, SegmentData } from '../bug'
import { Point, Vector } from '@adrianlafond/geom'
import { BaseDemo } from './base-demo'

const COLOR = 0xaabb00

export class Bug005 extends BaseDemo {
  protected readonly bug: Bug

  private readonly background: Background
  private readonly segmentsGfx = new PIXI.Graphics()
  private readonly legsGfx = new PIXI.Graphics()

  constructor (app: PIXI.Application) {
    super(app)
    const clientRect = app.view.getBoundingClientRect ? app.view?.getBoundingClientRect() : null
    this.targetColor = 0x998800
    this.bug = new Bug({
      stageRect: clientRect ? {
        x: 0,
        y: 0,
        width: clientRect.width,
        height: clientRect.height
      } : undefined,
      segments: [{
        position: new Point(0, 30),
        legs: {
          left: [[
            new Point(-7, -2),
            new Point(-42, -49)
          ], [
            new Point(-7, 0),
            new Point(-52, -18)
          ], [
            new Point(-7, 2),
            new Point(-42, 18)
          ], [
            new Point(-7, 4),
            new Point(-41, 48)
          ]],
          right: [[
            new Point(7, -2),
            new Point(42, -49)
          ], [
            new Point(7, 0),
            new Point(52, -18)
          ], [
            new Point(7, 2),
            new Point(42, 18)
          ], [
            new Point(7, 4),
            new Point(41, 48)
          ]]
        },
      }],
      millisecondsPerStep: 1000,
      maxStepPx: 24,
      maxDistractionPx: 18,
      maxJigglePx: 1,
      timingFunction: 'easeOutBack',
    })

    this.background = new Background(this.app, 0x443300)
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

  protected clearGfx () {
    super.clearGfx()
    this.segmentsGfx.clear()
    this.segmentsGfx.removeChildren()
    this.legsGfx.clear()
    this.legsGfx.removeChildren()
  }

  private renderSegment (segment: SegmentData,  activeSide: BugSide): void {
    const gfx = this.renderSegmentBase(segment)

    // body, tail, mandibles
    gfx.beginFill(COLOR)
    gfx.drawCircle(0, 0, 7)
    gfx.drawPolygon(-2, 7, 2, 7, 0, 14)
    gfx.drawPolygon(-1, -9, -5, -17, -3, -21)
    gfx.drawPolygon(1, -9, 5, -17, 3, -21)
    gfx.endFill()

    // eyes
    gfx.lineStyle({ width: 1, color: COLOR })
    gfx.drawCircle(-3, -7, 5)
    gfx.drawCircle(3, -7, 5)

    this.renderSegmentLegs(segment, activeSide)
  }

  private renderSegmentBase(segment: SegmentData): PIXI.Graphics {
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
    gfx.lineStyle({ width: 0.5, color })
    if (joint != null) {
      gfx.beginFill(COLOR)
      gfx.drawPolygon(joint.x - 1, joint.y - 1, joint.x + 1, joint.y + 1, socket.x, socket.y)
      gfx.endFill()
      gfx.moveTo(joint.x, joint.y)
    }
    gfx.lineTo(claw.x, claw.y)
    gfx.lineStyle({ width: 0 })
  }
}
