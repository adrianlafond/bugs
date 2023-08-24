import * as PIXI from 'pixi.js'
import * as grid from './grid'
import { Bug, BugRender, BugSide, Leg, SegmentData } from '../bug'
import { Point, Vector } from '@adrianlafond/geom'
import { BaseDemo } from './base-demo'


export class Simple extends BaseDemo {
  protected readonly bug: Bug

  private readonly segmentsGfx = new PIXI.Graphics()
  private readonly legsGfx = new PIXI.Graphics()

  constructor (app: PIXI.Application) {
    super(app)
    const clientRect = app.view.getBoundingClientRect ? app.view?.getBoundingClientRect() : null
    this.bug = new Bug({
      stageRect: clientRect ? {
        x: 0,
        y: 0,
        width: clientRect.width,
        height: clientRect.height
      } : undefined,
    })

    grid.render(this.app)

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

  private readonly handleTargetReached = (): void => {
    this.updateTargetPattern()
  }

  private clearGfx () {
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

  private renderSegment (segment: SegmentData,  activeSide: BugSide, index: number): void {
    const color = index == 0 ? 0xddeeff : 0xffff00

    const gfx = new PIXI.Graphics()
    this.segmentsGfx.addChild(gfx)

    gfx.lineStyle({ width: 1, color })
    gfx.drawCircle(0, 0, 9)
    gfx.lineStyle({ width: 0 })

    gfx.beginFill(color)
    gfx.moveTo(0, -8)
    gfx.lineTo(5, 8)
    gfx.lineTo(0, 2)
    gfx.lineTo(-5, 8)
    gfx.lineTo(0, -8)
    gfx.endFill()

    gfx.rotation = segment.position.radians
    gfx.position.x = segment.position.x
    gfx.position.y = segment.position.y

    this.renderSegmentLegs(segment, activeSide)
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

    gfx.lineStyle({ width: 1, color: 0xddeeff })
    gfx.moveTo(socket.x, socket.y)
    if (joint != null) {
      gfx.lineTo(joint.x, joint.y)
    }
    gfx.lineTo(claw.x, claw.y)
    gfx.lineStyle({ width: 0 })

    gfx.beginFill(0xddeeff)
    gfx.drawCircle(claw.x, claw.y, isActive ? 2 : 1)
    gfx.endFill()
  }
}
