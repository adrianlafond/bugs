import * as PIXI from 'pixi.js'
import { Background } from './background/background'
import { Bug, BugRender, BugSide, SegmentData } from '../bug'
import { Point, Vector } from '@adrianlafond/geom'
import { BaseDemo } from './base-demo'

const COLOR = 0x993300

export class Bug004 extends BaseDemo {
  protected readonly bug: Bug

  private readonly background: Background
  private readonly segmentsGfx = new PIXI.Graphics()
  private readonly legsGfx = new PIXI.Graphics()

  constructor (app: PIXI.Application) {
    super(app)
    this.targetColor = 0x663300
    this.bug = new Bug({
      stageRect: {
        x: 0,
        y: 0,
        width: app.view.width,
        height: app.view.height
      },
      segments: [{
        position: new Point(0, -12)
      }, {
        position: new Point(0, 10),
        legs: {
          left: [[
            new Point(-7, -2),
            new Point(-22, -29)
          ], [
            new Point(-7, 0),
            new Point(-32, -12)
          ], [
            new Point(-7, 2),
            new Point(-32, 2)
          ], [
            new Point(-7, 4),
            new Point(-21, 18)
          ]],
          right: [[
            new Point(7, -2),
            new Point(22, -29)
          ], [
            new Point(7, 0),
            new Point(32, -12)
          ], [
            new Point(7, 2),
            new Point(32, 2)
          ], [
            new Point(7, 4),
            new Point(21, 18)
          ]]
        }
      }],
      millisecondsPerStep: 250,
      maxStepPx: 16,
      maxDistractionPx: 24,
      maxJigglePx: 1
    })

    this.background = new Background(this.app, 0x330000)
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

  private renderHead (segment: SegmentData): void {
    const gfx = this.renderSegmentBase(segment)

    gfx.beginFill(COLOR)
    gfx.drawCircle(0, 0, 3)
    gfx.endFill()

    // antenae
    gfx.lineStyle({ width: 0.5, color: COLOR })
    gfx.moveTo(-1, -4)
    gfx.bezierCurveTo(0, -4, -1, -18, -9, -36)
    gfx.moveTo(1, -4)
    gfx.bezierCurveTo(0, -4, 1, -18, 9, -36)
    gfx.lineStyle({ width: 0 })

    // eyes
    gfx.beginFill(COLOR)
    gfx.drawCircle(-3, -2, 3)
    gfx.drawCircle(3, -2, 3)
    gfx.endFill()
  }

  private renderSegment (segment: SegmentData, activeSide: BugSide): void {
    const gfx = this.renderSegmentBase(segment)

    gfx.beginFill(COLOR)
    gfx.drawCircle(0, 0, 9)
    gfx.drawPolygon(-2, 9, 2, 9, 0, 24)
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
      gfx.lineStyle({ width: 0 })
      gfx.beginFill(color)
      gfx.drawPolygon(joint.x - 1.5, joint.y, joint.x + 1.5, joint.y, claw.x, claw.y)
      gfx.endFill()
    } else {
      gfx.lineTo(claw.x, claw.y)
      gfx.lineStyle({ width: 0 })
    }
  }
}
