import { Point, Vector } from '@adrianlafond/geom'
import { SegmentData } from './segment'

export type BugSide = 'left' | 'right'
export type BugTimingFunction =
  | 'linear'
	| 'easeInQuad'
	| 'easeOutQuad'
	| 'easeInOutQuad'
	| 'easeInCubic'
	| 'easeOutCubic'
	| 'easeInOutCubic'
	| 'easeInQuart'
	| 'easeOutQuart'
	| 'easeInOutQuart'
	| 'easeInQuint'
	| 'easeOutQuint'
	| 'easeInOutQuint'
	| 'easeInSine'
	| 'easeOutSine'
	| 'easeInOutSine'
	| 'easeInExpo'
	| 'easeOutExpo'
	| 'easeInOutExpo'
	| 'easeInCirc'
	| 'easeOutCirc'
	| 'easeInOutCirc'
	| 'easeInBack'
	| 'easeOutBack'
	| 'easeInOutBack'
	| 'easeInElastic'
	| 'easeOutElastic'
	| 'easeInOutElastic'
	| 'easeInBounce'
	| 'easeOutBounce'

export { SegmentData }
export interface BugRender {
  activeSide: BugSide
  segments: SegmentData[]
  target: Point
}

export interface StageRect {
  x: number
  y: number
  width: number
  height: number
}

export interface BugOptionsSegmentLegs {
  left: Point[][]
  right: Point[][]
}

export interface BugOptionsSegment {
  position: Point
  legs?: BugOptionsSegmentLegs
}

export interface BugOptions {
  /**
   * Whether the bug starts its left legs moving or its right. Default is left.
   */
  activeSide?: 'left' | 'right'

  /**
   * Milliseconds each step takes to complete. Default is 250.
   */
  millisecondsPerStep?: number

  /**
   * The maximum distance in pixels that the bug can progress per step. Default
   * is 16.
   */
  maxStepPx?: number

  /**
   * Position and direction on the stage where the lead segment of the bug
   * starts. Default are random values within the confines of the stage rect.
   */
  position?: Vector

  /**
   * Position of the segments of the bug relative to each other. Each segment
   * can have its own sets of legs. Default is a single segment at (0, 0) with
   * 3 legs on each side.
   */
  segments?:  BugOptionsSegment[]

  /**
   * Percent offset from distance between socket and claw that the joint
   * (comparable to an elbow or knee) should offset (or bent). Default is 0.25.
   */
  jointOffset?: number

  /**
   * The distance the bug stays away from the target and the edges of the stage.
   * Useful if the bug's skin is wide. Default is 0.
   */
  repulsionPx?: number

  /**
   * Random jiggling applied on each time tick. A small number will make the bug
   * look smooth; a large number is will make it look like a spaz. Default is 3.
   */
  maxJigglePx?: number

  /**
   * Random distraction in the target per each step. A large number will lead
   * the bug in strange directions with each step, although the end target will
   * not be forgotten. Default is 24.
   */
  maxDistractionPx?: number

  /**
   * If `position` is not defined, `stageRect` is used to calculate random
   * starting x and y coordinates.
   */
  stageRect?: StageRect

  /**
   * Timing function to ease the step motion. Default is easeOutCubic.
   */
  timingFunction?: BugTimingFunction

  /**
   * The target coordinates towards which the bug should direct itself.
   */
  target?: Vector
}
