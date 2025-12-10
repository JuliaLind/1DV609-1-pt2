import { Rule } from './Rule.js'

/**
 * Class representing the Flush rule.
 */
export class Flush extends Rule {
  /**
   * Creates an instance of Flush rule.
   */
  constructor() {
    const name = 'Flush'
    const value = 20

    super(name, value)
  }

  /**
   * Tests if the hand contains five cards of same suit.
   *
   * @param {object} line - the line of cards to test for the rule
   * @returns { boolean} - true if the line has five cards of the same suit, false otherwise
   */
  test(line) {
    const suiteFrequencies = line.getSuiteFrequencies()
    const frequencies = Object.values(suiteFrequencies)

    if (frequencies.length >= 2) {
      return false
    }

    return true
  }
}
