import { SameOfAKind } from './SameOfAKind.js'

/**
 * Class representing the Three Of A Kind rule.
 */
export class ThreeOfAKind extends SameOfAKind {
  /**
   * Creates an instance of ThreeOfAKind class.
   */
  constructor () {
    const sameRankCount = 3

    super(sameRankCount)
  }
}
