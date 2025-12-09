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

    super(sameRankCount)
  }
}
