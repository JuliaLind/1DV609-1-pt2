/**
 * Abstract class representing a rule that checks
 * for a certain number of cards of the same rank.
 */
export class SameOfAKind {
  #rankCount

  /**
   * Creates an instance of SameOfAKind.
   * 
   * @param {number} rankCount - the number of same rank cards required to fulfill the rule
   */
  constructor(rankCount) {
    if (new.target === SameOfAKind) {
      throw new Error('SameOfAKind is an abstract class')
    }

    this.#setRankCount(rankCount)
  }

  /**
   * Sets the rank count required for the rule.
   *
   * @param {number} rankCount - the number of cards required of the same rank
   */
  #setRankCount(rankCount) {
    this.#rankCount = rankCount
  }

  /**
   * Tests if the given line of cards fulfills the rule.
   *
   * @param {object} line - the line of cards to test for the rule 
   * @returns {boolean} - true if the line fulfills the rule, false otherwise
   */
  test(line) {
    const rankFrequencies = line.getRankFrequencies()
    const frequencies = Object.values(rankFrequencies)

    for (const frequency of frequencies) {
      if (frequency >= this.#rankCount) {
        return true
      }
    }
  }
}