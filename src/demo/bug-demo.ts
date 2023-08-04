import * as PIXI from 'pixi.js'
import { Bug, BugRender, Leg } from '../bug'
import { Point } from '@adrianlafond/geom'

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
    const bug = this.bug.tick(deltaMs)
    this.bug.on('targetReached', this.handleTargetReached)
    this.renderTarget(bug.target)
    this.renderHead(bug)
    this.renderLegs(bug)
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
  }

  private readonly renderLeg = (leg: Leg): void => {
    const socket = leg.getLive(0)
    const claw = leg.getLive(1)
    this.legs.lineStyle({ width: 1, color: 0x000000 })
    this.legs.moveTo(socket.x, socket.y)
    this.legs.lineTo(claw.x, claw.y)

    this.legs.lineStyle({ width: 0 })
    this.legs.beginFill(0x000000)
    this.legs.drawCircle(socket.x, socket.y, 3)
    this.legs.drawCircle(claw.x, claw.y, leg.isMoving() ? 3 : 2)
    this.legs.endFill()
  }

  private updateTarget (): void {
    this.bug.updateTarget(new Point(
      Math.floor(Math.random() * this.app.view.width),
      Math.floor(Math.random() * this.app.view.height)
    ))
  }
}
