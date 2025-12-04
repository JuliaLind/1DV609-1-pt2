import { Rule } from './Rule.js'

/**
 * Class representing the Straight rule.
 */
export class Straight extends Rule {
  /**
   * Creates an instance of Straight rule.
   */
  constructor () {
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
  test (line) {
    const rankFrequencies = line.getRankFrequencies()
    const uniqueRanks = Object.keys(rankFrequencies)

    return this.#hasFiveUniqueRanks(uniqueRanks) && this.#isConsecutive(uniqueRanks)
  }

  /**
   * Returns true if the array contains five unique ranks.
   *
   * @param {number[]} uniqueRanks - checks it the array contains 5 items
   * @returns {boolean} - true if the array contains 5 items, false otherwise
   */
  #hasFiveUniqueRanks (uniqueRanks) {
    return uniqueRanks.length === 5
  }

  /**
   * Checks if the given ranks are consecutive.
   *
   * @param {number[]} ranks - the array of ranks
   * @returns {boolean} - true if the ranks are consecutive, false otherwise
   */
  #isConsecutive (ranks) {
    const highestRank = this.#getHighestRank(ranks)
    const lowestRank = this.#getLowestRank(ranks)

    return highestRank - lowestRank === ranks.length - 1
  }

  /**
   * Returns the highest rank from the given ranks.
   *
   * @param {number[]} ranks - array of ranks
   * @returns {number} - highest rank
   */
  #getHighestRank (ranks) {
    return Math.max(...ranks)
  }

  /**
   * Reurns the lowest rank from the given ranks.
   *
   * @param {number[]} ranks - array of ranks
   * @returns {number} - lowest rank
   */
  #getLowestRank (ranks) {
    return Math.min(...ranks)
  }
}
