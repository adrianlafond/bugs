import { Point, Vector } from '@adrianlafond/geom'
import { BugOptions } from './bug.types'

export type Defaults = Omit<Required<BugOptions>, 'stageRect'>

export const getDefaults = (): Defaults => ({
  activeSide: 'left',
  millisecondsPerStep: 250,
  maxStepPx: 16,
  position: new Vector(),
  segments: [{
    position: new Point(),
    legs: {
      left: [[
        new Point(-9, 0),
        new Point(-18, -15)
      ], [
        new Point(-9, 2),
        new Point(-20, -2)
      ], [
        new Point(-9, 4),
        new Point(-16, 8)
      ]],
      right: [[
        new Point(9, 0),
        new Point(18, -15)
      ], [
        new Point(9, 2),
        new Point(20, -2)
      ], [
        new Point(9, 4),
        new Point(16, 8)
      ]]
    }
  }],
  jointOffset: 0.25,
  repulsionPx: 0,
  maxJigglePx: 3,
  maxDistractionPx: 24,
  timingFunction: 'easeOutCubic',
  target: new Vector()
})
