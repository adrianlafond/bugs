import * as PIXI from 'pixi.js'
import { Background } from './background/background'
import { Bug, BugRender, BugSide, SegmentData } from '../bug'
import { Point, Vector } from '@adrianlafond/geom'
import { BaseDemo } from './base-demo'

const BG_COLOR = 0x282018
const TARGET_COLOR = 0xb8b0a8
const COLOR = 0xd8d0c8
const TINT_COLOR = 0xf8f0e8

export class Bug011 extends BaseDemo {
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
        position: new Point(0, 0)
      }, {
        position: new Point(0, 17),
        legs: {
          left: [[
            new Point(-5, -3),
            new Point(-24, -36)
          ], [
            new Point(-5, 2),
            new Point(-36, -8)
          ], [
            new Point(-5, 5),
            new Point(-24, 18)
          ]],
          right: [[
            new Point(5, -3),
            new Point(24, -36)
          ], [
            new Point(5, 2),
            new Point(36, -8)
          ], [
            new Point(5, 5),
            new Point(24, 18)
          ]]
        }
      }, {
        position: new Point(0, 11),
      }, {
        position: new Point(0, 7),
      }],
      millisecondsPerStep: 90,
      maxStepPx: 14,
      maxDistractionPx: 24,
      maxJigglePx: 2
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
      this.renderSegment(bug.segments[i], bug.activeSide, i)
    }
  }

  private renderHead (gfx: PIXI.Graphics): void {
    // head
    gfx.beginFill(COLOR)
    gfx.drawEllipse(0, 0, 6, 9)

    // mandibles
    gfx.drawPolygon(
      -1, -8,
      -5, -13,
      -4, -19,
      0, -8,
    )
    gfx.drawPolygon(
      1, -8,
      5, -13,
      4, -19,
      0, -8,
    )
    gfx.endFill()

    // antenae
    gfx.lineStyle({ width: 0.5, color: TINT_COLOR })
    gfx.moveTo(-2, -8)
    gfx.lineTo(-11, -16)
    gfx.lineTo(-12, -28)
    gfx.lineTo(-17, -35)
    gfx.moveTo(2, -8)
    gfx.lineTo(11, -16)
    gfx.lineTo(12, -28)
    gfx.lineTo(17, -35)
    gfx.lineStyle({ width: 0 })

    // eyes
    gfx.beginFill(TINT_COLOR)
    gfx.drawCircle(-4, -5, 4)
    gfx.drawCircle(4, -5, 4)
    gfx.endFill()
  }

  private renderSegment (segment: SegmentData, activeSide: BugSide, index: number): void {
    const gfx = this.renderSegmentBase(segment)
    // gfx.lineStyle({ width: 1, color: COLOR })
    if (index === 0) {
      this.renderHead(gfx)
    } else if (index === 1) {
      // mesosoma
      gfx.beginFill(COLOR)
      gfx.drawEllipse(0, -2, 5, 8)
      gfx.drawEllipse(0, 6, 2, 4)
      gfx.drawEllipse(0, 9, 3, 5)
      gfx.endFill()
      this.renderSegmentLegs(segment, activeSide)
    } else if (index === 2) {
      // petiole
      gfx.beginFill(COLOR)
      gfx.drawPolygon(
        -6, 0,
        -1, -6,
        1, -6,
        6, 0,
        1, 6,
        -1, 6,
        -6, 0
      )
      gfx.endFill()
    } else if (index === 3) {
      // gaster
      gfx.beginFill(COLOR)
      gfx.drawPolygon(
        -4, -4,
        4, -4,
        8, 0,
        7, 2,
        6, 7,
        2, 11,
        -2, 11,
        -6, 7,
        -7, 2,
        -8, 0,
      )
      // stinger
      gfx.drawPolygon(
        -2, 11,
        2, 11,
        0, 19
      )
      gfx.endFill()
    } else {
      gfx.beginFill(COLOR)
      gfx.drawCircle(0, 0, 3)
      this.renderSegmentLegs(segment, activeSide)
      gfx.endFill()
    }

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
    gfx.lineStyle({ width: 2, color })
    gfx.moveTo(socket.x, socket.y)
    if (joint != null) {
      gfx.lineTo(joint.x, joint.y)
    }
    gfx.lineStyle({ width: 1, color })
    gfx.lineTo(claw.x, claw.y)

    // gfx.lineStyle({ width: 1, color })
    // gfx.moveTo(socket.x, socket.y)
    // if (joint != null) {
    //   // gfx.lineTo(joint.x, joint.y)
    //   // gfx.lineStyle({ width: 0 })
    //   gfx.beginFill(color)
    //   gfx.drawPolygon(
    //     joint.x - 2, joint.y,
    //     joint.x + 2, joint.y,
    //     socket.x + 2, socket.y,
    //     socket.x - 2, socket.y
    //   )
    //   gfx.endFill()
    //   gfx.moveTo(joint.x, joint.y)
    //   gfx.lineStyle({ width: 1, color })
    //   gfx.lineTo(claw.x, claw.y)
    //   gfx.lineStyle({ width: 0 })
    // }
  }
}
