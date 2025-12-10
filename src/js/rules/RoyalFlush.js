import { Rule } from './Rule.js'
import { StraightFlush } from './StraightFlush.js'

/**
 * Class representing the Flush rule.
 */
export class RoyalFlush extends Rule {
  #straightFlushRule

  /**
   * Creates an instance of Royal Flush rule.
   *
   * @param {StraightFlush} straightFlush - an instance of the StraightFlush rule
   */
  constructor (straightFlush = new StraightFlush()) {
    const name = 'Royal Flush'
    const value = 100

    super(name, value)

    this.#straightFlushRule = straightFlush
  }

  /**
   * Tests if the given line satisfies the Royal Flush rule.
   *
   * @param {object} line - the line of cards to test
   * @returns { boolean } - true if the line satisfies the Royal Flush rule, false otherwise
   */
  test (line) {
    return this.#straightFlushRule.test(line) && line.hasRank(14)
  }
}
