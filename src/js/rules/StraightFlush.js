import { Rule } from './Rule.js'
import { Straight } from './Straight.js'
import { Flush } from './Flush.js'

/**
 * Class representing the Straight Flush rule.
 */
export class StraightFlush extends Rule {
  #straightRule
  #flushRule

  /**
   * Creates an instance of StraightFlush class.
   *
   * @param {Straight} straightRule - an instance of the Straight rule
   * @param {Flush} flushRule - an instance of the Flush rule
   */
  constructor (straightRule = new Straight(), flushRule = new Flush()) {
    const name = 'Straight Flush'
    const value = 75

    super(name, value)

    this.#straightRule = straightRule
    this.#flushRule = flushRule
  }

  /**
   * Tests whether the given line contains five cards of consecutive ranks and same suit.
   *
   * @param {object} line - the line of cards to test for StraightFlush rule
   * @returns { boolean } - true if both Straight and Flush rules are satisfied, false otherwise
   */
  test (line) {
    return this.#straightRule.test(line) && this.#flushRule.test(line)
  }
}
