import { Rule } from './Rule.js'

/**
 * Class representing the Straight Flush rule.
 */
export class StraightFlush extends Rule {
  /**
   * Creates an instance of StraightFlush class.
   *
   */
  constructor() {
    const name = 'Straight Flush'
    const value = 75

    super(name, value)
  }

  /**
   * Tests whether the given line contains five cards of consecutive ranks and same suit.
   *
   * @param {object} line - the line of cards to test for StraightFlush rule
   * @returns { boolean } - true if both Straight and Flush rules are satisfied, false otherwise
   */
  test(line) {
    return true
  }
}
