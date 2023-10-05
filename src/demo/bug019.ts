import * as PIXI from 'pixi.js'
import { Background } from './background/background'
import { Bug, BugRender, BugSide, SegmentData } from '../bug'
import { Point, Vector } from '@adrianlafond/geom'
import { BaseDemo } from './base-demo'

const COLOR = 0xffff00
const BG_COLOR = 0x0000ff
const TARGET_COLOR = 0x6699cc
const PRINT_COLOR = 0xffffff

export class Bug019 extends BaseDemo {
  protected readonly bug: Bug

  private readonly background: Background
  private readonly segmentsGfx = new PIXI.Graphics()
  private readonly legsGfx = new PIXI.Graphics()
  private readonly printsGfx = new PIXI.Graphics()

  private prints: {
    x: number
    y: number
  }[] = []

  private currentActiveSide: BugSide = 'left';

  constructor (app: PIXI.Application) {
    super(app)
    this.targetColor = TARGET_COLOR
    this.bug = new Bug({
      activeSide: 'left',
      stageRect: {
        x: 0,
        y: 0,
        width: app.view.width,
        height: app.view.height
      },
      segments: [{
        position: new Point(0, 0),
      }, {
        position: new Point(0, 11),
      }, {
        position: new Point(0, 15),
        legs: {
          left: [[
            new Point(-7, -7),
            new Point(-36, -24)
          ], [
            new Point(-9, 0),
            new Point(-30, 0)
          ], [
            new Point(-7, 7),
            new Point(-24, 16)
          ]],
          right: [[
            new Point(7, -7),
            new Point(36, -24)
          ], [
            new Point(9, 0),
            new Point(30, 0)
          ], [
            new Point(7, 7),
            new Point(24, 16)
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

    this.app.stage.addChild(this.printsGfx)
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
    this.trackPrints(bug)
    this.clearGfx()
    this.renderPrints()
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

  protected trackPrints (bug: BugRender): void {
    if (this.currentActiveSide !== bug.activeSide) {
      this.currentActiveSide = bug.activeSide
      this.prints = this.prints.slice(0, 50)
      bug.segments.forEach(segment => {
        segment.legs[this.currentActiveSide === 'left' ? 'right' : 'left'].forEach(leg => {
          this.prints.unshift(leg[leg.length - 1])
        })
      })
    }
  }

  protected clearGfx (): void {
    super.clearGfx()
    this.printsGfx.clear()
    this.printsGfx.removeChildren()
    this.segmentsGfx.clear()
    this.segmentsGfx.removeChildren()
    this.legsGfx.clear()
    this.legsGfx.removeChildren()
  }

  private renderPrints (): void {
    const gfx = new PIXI.Graphics()
    gfx.lineStyle({ width: 1, color: PRINT_COLOR })
    this.printsGfx.addChild(gfx)
    this.prints.forEach(print => {
      gfx.drawCircle(print.x, print.y, 1)
    })
  }

  private renderAllSegments (bug: BugRender): void {
    this.renderHead(bug.segments[0])
    this.renderMiddle(bug.segments[1], bug.activeSide)
    this.renderEnd(bug.segments[2], bug.activeSide)
    this.renderTail(bug.segments[3])
  }

  private renderHead(segment: SegmentData): void {
    const gfx = this.renderSegmentBase(segment)

    gfx.lineStyle({ width: 0.5, color: COLOR });
    gfx.moveTo(-1, -9)
    gfx.lineTo(-6, -27)
    gfx.moveTo(1, -9)
    gfx.lineTo(6, -27)

    gfx.lineStyle({ width: 1, color: COLOR });
    gfx.drawCircle(0, 0, 3)
    gfx.drawCircle(-5, -7, 4)
    gfx.drawCircle(5, -7, 4)
  }

  private renderMiddle(segment: SegmentData, activeSide: BugSide) {
    const gfx = this.renderSegmentBase(segment)
    gfx.lineStyle({ width: 1, color: COLOR });
    gfx.drawCircle(0, 0, 7)
    this.renderSegmentLegs(segment, activeSide)
  }

  private renderEnd(segment: SegmentData, activeSide: BugSide): void {
    const gfx = this.renderSegmentBase(segment)
    gfx.lineStyle({ width: 1, color: COLOR });
    gfx.drawCircle(0, 0, 9)
    this.renderSegmentLegs(segment, activeSide)
  }

  private renderTail(segment: SegmentData) {
    const gfx = this.renderSegmentBase(segment)
    gfx.lineStyle({ width: 1, color: COLOR });
    gfx.drawCircle(0, 0, 5)
    gfx.lineStyle({ width: 0.5, color: COLOR });
    gfx.moveTo(0, 5)
    gfx.lineTo(0, 17)
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

    gfx.lineStyle({ width: 1, color: COLOR })
    gfx.moveTo(socket.x, socket.y)
    if (joint != null) {
      gfx.lineTo(joint.x, joint.y)
    }
    gfx.lineTo(claw.x, claw.y)
    if (joint != null) {
      gfx.lineTo(joint.x + 4, joint.y + 4)
    }
    gfx.lineTo(socket.x, socket.y)

    // gfx.drawCircle(socket.x, socket.y, 3)
    // gfx.drawCircle(claw.x, claw.y, 3)
  }
}
