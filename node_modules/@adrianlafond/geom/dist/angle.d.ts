export default class Angle {
    /**
     * @param value {number} degrees
     */
    static toRadians(value: number): number;
    /**
    * @param value {number} radians
    */
    static toDegrees(value: number): number;
    /**
     *
     */
    static delta(r1: number, r2: number): number;
    /**
    * @param r1 in radians
    * @param r2 in radians
    * @param progress percent expressed as a value between 0 and 1
    */
    static interpolate(r1: number, r2: number, progress: number): number;
    static normalize(value: number): number;
}
