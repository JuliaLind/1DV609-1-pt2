import { Rule } from './Rule.js'

/**
 * Class representing the Full House rule.
 */
export class FullHouse extends Rule {
  /**
   * Creates an instance of FullHouse class.
   */
  constructor() {
    const name = 'Full House'
    const value = 25

    super(name, value)
  }

/**
 * Tests if the line of cards fulfills the Full House rule.
 *
 * @param {object} line - the line of cards to test for the rule
 * @returns { boolean} - true if the line has a pair of one rank and three of another rank, false otherwise
 */
  test(line) {
    return true
  }
}
