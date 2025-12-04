/**
 * Represents the logic of a playing card.
 */
export class Card {
  #rank
  #suite

  /**
   * Creates an instance of Card.
   *
   * @param {string} rank - the rank of the card
   * @param {string} suite - the suite of the card
   */
  constructor (rank, suite) {
    this.#rank = rank
    this.#suite = suite
  }

  /**
   * Returns plain object representation of the current instance.
   *
   * @returns {object} - associative array containing the rank and suite of the current instance.
   */
  toObject () {
    return {
      rank: this.#rank,
      suite: this.#suite
    }
  }
}
