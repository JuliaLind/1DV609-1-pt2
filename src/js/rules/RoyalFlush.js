import { Rule } from './Rule.js'

/**
 * Class representing the Flush rule.
 */
export class RoyalFlush extends Rule {
  /**
   * Creates an instance of Royal Flush rule.
   *
   */
  constructor () {
    const name = 'Royal Flush'
    const value = 100

    super(name, value)
  }

  /**
   * Tests if the given line satisfies the Royal Flush rule.
   *
   * @param {object} line - the line of cards to test
   * @returns { boolean } - true if the line satisfies the Royal Flush rule, false otherwise
   */
  test (line) {
    return line.hasRank(14)
  }
}
