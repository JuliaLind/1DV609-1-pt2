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
    if (!rank) {
      throw new Error('Rank is missing!')
    }
    this.#rank = rank
    this.#suite = suite
  }

  /**
   * Getter for the rank attribute.
   *
   * @returns {string} - the rank of the card
   */
  get rank () {
    return this.#rank
  }

  /**
   * Getter for the suite attribute.
   *
   * @returns {string} - the suite of the card
   */
  get suite () {
    return this.#suite
  }
}
