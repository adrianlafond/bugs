import * as PIXI from 'pixi.js'
import { Point, Vector } from '@adrianlafond/geom'
import { Background } from './background/background'
import { Bug, BugRender, BugSide, SegmentData } from '../bug'
import { BaseDemo } from './base-demo'

const BG_COLOR = 0x082040
const TARGET_COLOR = 0x6699bb
const COLOR = 0x286878

export class Bug007 extends BaseDemo {
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
        position: new Point(0, 10),
        legs: {
          left: [[
            new Point(-7, -2),
            new Point(-18, -28)
          ], [
            new Point(7, 0),
            new Point(56, 0)
          ], [
            new Point(-7, 4),
            new Point(-22, 12)
          ]],
          right: [[
            new Point(-7, 0),
            new Point(-26, -10)
          ]]
        }
      }],
      millisecondsPerStep: 350,
      maxStepPx: 16,
      maxDistractionPx: 24,
      maxJigglePx: 3
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
    gfx.drawCircle(3, 2, 5)
    gfx.endFill()

    // antennae
    gfx.lineStyle({ width: 0.5, color: COLOR })
    gfx.moveTo(2, -10)
    gfx.bezierCurveTo(-8, -41, 0, -41, -16, -41)
    gfx.moveTo(2, -10)
    gfx.bezierCurveTo(42, -37, 0, -37, 42, -37)

    // eyes
    gfx.beginFill(BG_COLOR)
    gfx.lineStyle({ width: 2, color: COLOR })
    gfx.drawCircle(0, -7, 3)
    gfx.drawCircle(5, -5, 3)
    gfx.endFill()
  }

  private renderSegment (segment: SegmentData, activeSide: BugSide): void {
    const gfx = this.renderSegmentBase(segment)

    // body, tail, mandibles
    gfx.beginFill(COLOR)
    gfx.drawCircle(0, 0, 7)
    gfx.drawPolygon(
      2, 3,
      -2, 3,
      -5, 13,
      5, 17,
      -2, 13,
    )
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

  private renderLeg (leg: Vector[], isActive: boolean): void {
    const socket = leg[0]
    const joint = leg.length >= 2 ? leg[1] : null
    const claw = leg.length >= 2 ? leg[2] : leg[1]

    const gfx = new PIXI.Graphics()
    this.legsGfx.addChild(gfx)

    const color = COLOR
    const fatten = isActive ? 4 : 2
    gfx.lineStyle({ width: 1, color })
    gfx.moveTo(socket.x, socket.y)
    if (joint != null) {
      gfx.lineTo(joint.x, joint.y)
      gfx.beginFill(COLOR)
      gfx.drawPolygon(joint.x, joint.y, joint.x + fatten, joint.y + fatten, claw.x, claw.y)
      gfx.endFill()
    } else {
      gfx.lineTo(claw.x, claw.y)
    }
  }
}
