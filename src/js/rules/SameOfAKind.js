import { Rule } from './Rule.js'

/**
 * Abstract class representing a rule that checks
 * for a certain number of cards of the same rank.
 */
export class SameOfAKind extends Rule {
  #sameRankCount

  /**
   * Creates an instance of SameOfAKind.
   *
   * @param {number} sameRankCount - the number of same rank cards required to fulfill the rule
   * @param {string} name - name of the rule
   * @param {number} value - value is the number of points the rule is worth
   * @throws {Error} If instantiated directly.
   */
  constructor (sameRankCount, name, value) {
    if (new.target === SameOfAKind) {
      throw new Error('SameOfAKind is an abstract class')
    }

    super(name, value)

    this.#setSameRankCount(sameRankCount)
  }

  /**
   * Sets the required rank count to fulfill the rule.
   *
   * @param {number} rankCount - the exact count of same rank required to fulfill the fule
   */
  #setSameRankCount (rankCount) {
    this.#validateRankCount(rankCount)

    this.#sameRankCount = rankCount
  }

  /**
   * Checks that the rank count has been provided.
   *
   * @param {number} rankCount - the required rankCount to fulfill the rule
   */
  #validateRankCount (rankCount) {
    if (!rankCount) {
      throw new Error('rankCount missing')
    }
  }

  /**
   * Tests if the given line of cards fulfills the rule.
   *
   * @param {object} line - the line of cards to test for the rule
   * @returns {boolean} - true if the line fulfills the rule, false otherwise
   */
  test (line) {
    const rankFrequencies = line.getRankFrequencies()
    const frequencies = Object.values(rankFrequencies)

    return frequencies.includes(this.#sameRankCount)
  }

  /**
   * Gets the number of same rank cards required to fulfill the rule.
   * For testing purposes.
   *
   * @returns {number} - the number of same rank cards required
   */
  get sameRankCount () {
    return this.#sameRankCount
  }
}
