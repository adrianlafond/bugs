import * as PIXI from 'pixi.js'
import { Background } from './background/background'
import { Bug, BugOptionsSegmentLegs, BugRender, BugSide, SegmentData } from '../bug'
import { Point, Vector } from '@adrianlafond/geom'
import { BaseDemo } from './base-demo'

const COLOR = 0x301030
const BG_COLOR = 0x902090
const TARGET_COLOR = 0x301030

const segmentRadius = [
  5,
  10,
  9,
  10,
  8,
  9,
  11
]

function getLegs(): BugOptionsSegmentLegs {
  return {
    left: [[
      new Point(-7, -2),
      new Point(-24, -14)
    ], [
      new Point(-7, 2),
      new Point(-24, 3)
    ]],
    right: [[
      new Point(7, -2),
      new Point(24, -14)
    ], [
      new Point(7, 2),
      new Point(24, 3)
    ]]
  }
}

export class Bug009 extends BaseDemo {
  protected readonly bug: Bug

  private readonly background: Background
  private readonly segmentsGfx = new PIXI.Graphics()
  private readonly legsGfx = new PIXI.Graphics()

  constructor (app: PIXI.Application) {
    super(app)
    const clientRect = (app.view.getBoundingClientRect != null) ? app.view?.getBoundingClientRect() : null
    this.targetColor = TARGET_COLOR
    this.bug = new Bug({
      stageRect: (clientRect != null)
        ? {
            x: 0,
            y: 0,
            width: clientRect.width,
            height: clientRect.height
          }
        : undefined,
      segments: [{
        position: new Point(0, 0)
      }, {
        position: new Point(0, 15),
        legs: getLegs(),
      }, {
        position: new Point(0, 15),
        legs: getLegs(),
      }, {
        position: new Point(0, 15),
        legs: getLegs(),
      }, {
        position: new Point(0, 15),
        legs: getLegs(),
      }, {
        position: new Point(0, 15),
        legs: getLegs(),
      }, {
        position: new Point(0, 15),
      }, {
        position: new Point(0, 12),
      }, {
        position: new Point(0, 9),
      }, {
        position: new Point(0, 6),
      }, {
        position: new Point(0, 3),
      }],
      millisecondsPerStep: 180,
      maxStepPx: 16,
      maxDistractionPx: 12,
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

  private renderHead (gfx: PIXI.Graphics, segment: SegmentData): void {
    gfx.lineStyle({ width: 1, color: COLOR })
    gfx.drawCircle(0, -2, 5)

    // antenae
    gfx.lineStyle({ width: 0.5, color: COLOR })
    gfx.moveTo(-1, -7)
    gfx.bezierCurveTo(0, -7, -5, -56, -39, -66)
    gfx.moveTo(1, -7)
    gfx.bezierCurveTo(0, -7, 5, -56, 39, -66)

    // eyes
    gfx.lineStyle({ width: 1, color: COLOR })
    gfx.drawCircle(-3, -7, 5)
    gfx.drawCircle(3, -7, 5)
  }

  private renderSegment (segment: SegmentData, activeSide: BugSide, index: number): void {
    const gfx = this.renderSegmentBase(segment)
    gfx.lineStyle({ width: 1, color: COLOR })
    if (index === 0) {
      this.renderHead(gfx, segment)
    } else if (index < 6) {
      gfx.drawEllipse(0, 0, segmentRadius[index], segmentRadius[index] * 1.5)
      this.renderSegmentLegs(segment, activeSide)
    } else if (index >= 6) {
      const n = (15 - (index - 6) * 3) * 0.5
      gfx.drawPolygon(
        -(n - 1), -n,
        n - 1, -n,
        n - 1.5, n,
        -(n - 1.5), n,
      )
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
