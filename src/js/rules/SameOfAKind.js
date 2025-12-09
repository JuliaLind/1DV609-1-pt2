/**
 * Abstract class representing a rule that checks
 * for a certain number of cards of the same rank.
 */
export class SameOfAKind {
  /**
   * Creates an instance of SameOfAKind.
   *
   * @param {number} sameRankCount - the number of same rank cards required to fulfill the rule
   */
  constructor(sameRankCount) {
    if (new.target === SameOfAKind) {
      throw new Error('SameOfAKind is an abstract class')
    }

    this.#validateRankCount(sameRankCount)
  }

/**
 * Checks that the rank count has been provided.
 *
 * @param {number} rankCount - the required rankCount to fulfill the rule
 */
  #validateRankCount(rankCount) {
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
  test(line) {
    return true
  }
}
