import { Rule } from './Rule.js'

/**
 * Class representing the Two Pairs rule.
 */
export class TwoPairs extends Rule {
  /**
   * Creates an instance of TwoPairs class.
   */
  constructor() {
    const name = 'Two Pairs'
    const value = 5

    super(name, value)
  }

  /**
 * Tests whether the line contains two pairs.
 *
 * @param {object} line - the line of cards to test for the rule
 * @returns {boolean} - true if the line contains two pairs, false otherwise
 */
  test(line) {
    const rankFrequencies = line.getRankFrequencies()
    const frequencies = Object.values(rankFrequencies)

    const pairsOnly = frequencies.filter(count => count === 2)

    return pairsOnly.length === 2
  }
}
