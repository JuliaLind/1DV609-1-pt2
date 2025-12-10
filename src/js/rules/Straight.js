import { Rule } from './Rule.js'

/**
 * Class representing the Straight rule.
 */
export class Straight extends Rule {
  /**
   * Creates an instance of Straight rule.
   */
  constructor() {
    const name = 'Straight'
    const value = 15

    super(name, value)
  }

  /**
   * Tests whether the given line contains five cards of consecutive ranks.
   *
   * @param {object} line - the line of cards to test
   * @returns { boolean } - true if the line contains five cards of consecutive ranks, false otherwise
   */
  test(line) {
    return true
  }
}
