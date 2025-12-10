/**
 * Represents the logic of a playing card.
 */
export class Card {
  #rank

  /**
   * Creates an instance of Card.
   *
   * @param {string} rank - the rank of the card
   */
  constructor (rank) {
    this.#rank = rank
  }

  /**
   * Getter for the rank attribute.
   *
   * @returns {string} - the rank of the card
   */
  get rank () {
    return this.#rank
  }
}
