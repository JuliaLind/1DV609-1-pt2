/**
 * Represents the logic of a playing card.
 */
export class Card {
  static RANKS = Object.freeze({
    '2': 2,
    '3': 3,
    '4': 4,
    '5': 5,
    '6': 6,
    '7': 7,
    '8': 8,
    '9': 9,
    '10': 10,
    'J': 11,
    'Q': 12,
    'K': 13,
    'A': 14
  })

  #rank
  #suite

  /**
   * Creates an instance of Card.
   *
   * @param {string} rank - the rank of the card
   * @param {string} suite - the suite of the card
   */
  constructor(rank, suite) {
    this.#setRank(rank)

    this.#suite = suite
  }

  /**
   * Setter for the rank of the card.
   *
   * @param {string} rank - the rank of the card 
   */
  #setRank(rank) {
    this.#validateRank(rank)

    this.#rank = rank
  }

  /**
   * Validates the rank of the card.
   * 
   * @param {string} rank - the rank of the card
   * @throws {Error} - if the rank is invalid 
   */
  #validateRank(rank) {
    if (!Object.keys(Card.RANKS).includes(rank)) {
      throw new Error(`Invalid rank: ${rank}`)
    }
  }

  /**
   * Returns plain object representation of the current instance.
   *
   * @returns {object} - associative array containing the rank and suite of the current instance.
   */
  toObject() {
    return {
      rank: this.#rank,
      suite: this.#suite
    }
  }
}
