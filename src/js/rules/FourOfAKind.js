import { SameOfAKind } from './SameOfAKind.js'

/**
 * Class representing the Four Of A Kind rule.
 */
export class FourOfAKind extends SameOfAKind {
  /**
   * Creates an instance of FourOfAKind class.
   */
  constructor () {
    const sameRankCount = 4
    const name = 'Four Of A Kind'
    const value = 50

    super(sameRankCount, name, value)
  }
}
