import * as PIXI from 'pixi.js'
import { Bug, BugRender, Leg } from '../bug'
import { Point } from '@adrianlafond/geom'
import { Spiral } from './spiral'

export class BugDemo {
  private readonly target = new PIXI.Graphics()
  private readonly head = new PIXI.Graphics()
  private readonly legs = new PIXI.Graphics()

  private readonly bug: Bug

  constructor (private readonly app: PIXI.Application) {
    this.bug = new Bug()
    this.app.stage.addChild(this.target)
    this.app.stage.addChild(this.legs)
    this.app.stage.addChild(this.head)
    this.updateTarget()
  }

  render (deltaMs = 0): void {
    const bug = this.bug.tick({
      deltaMs,
      stageRect: {
        x: 5,
        y: 5,
        width: this.app.view.width - 5,
        height: this.app.view.height - 5,
      }
    })
    this.bug.on('targetReached', this.handleTargetReached)
    this.renderTarget(bug.target)
    this.renderHead(bug)
    this.renderLegs(bug)
  }

  changeTarget (point: Point): void {
    this.bug.updateTarget(point)
  }

  private readonly handleTargetReached = (): void => {
    this.updateTarget()
  }

  private renderTarget ({ x, y }: BugRender['target']): void {
    const radius = 4
    this.target.clear()
    this.target.lineStyle({ width: 1, color: 0xff0000 })
    this.target.moveTo(x - radius, y - radius)
    this.target.lineTo(x + radius, y + radius)
    this.target.moveTo(x + radius, y - radius)
    this.target.lineTo(x - radius, y + radius)
  }

  private renderHead (bug: BugRender): void {
    this.head.clear()
    this.head.beginFill(0x000000)
    this.head.moveTo(0, -12.5)
    this.head.lineTo(5, 0)
    this.head.lineTo(0, -2.5)
    this.head.lineTo(-5, 0)
    this.head.lineTo(0, 0)
    this.head.rotation = bug.head.radians
    this.head.position.x = bug.head.x
    this.head.position.y = bug.head.y
    this.head.endFill()
  }

  private renderLegs (bug: BugRender): void {
    this.legs.clear()
    bug.legs.left.forEach(this.renderLeg)
    bug.legs.right.forEach(this.renderLeg)

    this.legs.lineStyle({ width: 1, color: 0x000000 })
    const left0 = bug.legs.left[0].getLive(0)
    this.legs.moveTo(left0.x, left0.y)
    for (let i = 1; i < bug.legs.left.length; i++) {
      const leg = bug.legs.left[i].getLive(0);
      this.legs.lineTo(leg.x, leg.y)
    }
    const right0 = bug.legs.right[0].getLive(0)
    this.legs.moveTo(right0.x, right0.y)
    for (let i = 1; i < bug.legs.right.length; i++) {
      const leg = bug.legs.right[i].getLive(0);
      this.legs.lineTo(leg.x, leg.y)
    }
  }

  private readonly renderLeg = (leg: Leg): void => {
    const socket = leg.getLive(0)
    const claw = leg.getLive(1)
    this.legs.lineStyle({ width: 1, color: 0x000000 })
    this.legs.moveTo(socket.x, socket.y)
    this.legs.lineTo(claw.x, claw.y)

    this.legs.lineStyle({ width: 0 })
    this.legs.beginFill(0x000000)
    this.legs.drawCircle(claw.x, claw.y, leg.isMoving() ? 2 : 1)
    this.legs.endFill()
  }

  private updateTarget (): void {
    // this.bug.updateTarget(new Point(
    //   Math.floor(Math.random() * this.app.view.width),
    //   Math.floor(Math.random() * this.app.view.height)
    // ))
    const point = Spiral.getPoint(Math.min(this.app.view.width, this.app.view.height) * 0.5)
    point.x += this.app.view.width / 2
    point.y += this.app.view.height / 2
    this.bug.updateTarget(point)
  }
}
