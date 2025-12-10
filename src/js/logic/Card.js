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
    if (!rank || !['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'].includes(rank)) {
      throw new Error('Rank is missing!')
    }
    if(!suite || !['Hearts', 'Spades', 'Diamonds', 'Clubs'].includes(suite)) {
      throw new Error('Suite is missing!')
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
