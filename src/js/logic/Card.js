/**
 * Represents the logic of a playing card.
 */
export class Card {
  static SUITES = Object.freeze(['Hearts', 'Diamonds', 'Clubs', 'Spades'])
  static RANKS = Object.freeze({
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: 10,
    J: 11,
    Q: 12,
    K: 13,
    A: 14
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
    this.#setSuite(suite)
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
      throw new Error(`Invalid rank: '${rank}'`)
    }
  }

  /**
   * Setter for the suite attribute.
   *
   * @param {string} suite - the suite of the card
   */
  #setSuite(suite) {
    this.#validateSuite(suite)
    this.#suite = suite
  }

  /**
   * Validates the suite of the card.
   *
   * @param {string} suite - the suite of the card
   * @throws {Error} - if the suite is invalid
   */
  #validateSuite(suite) {
    if (!Card.SUITES.includes(suite)) {
      throw new Error(`Invalid suite: '${suite}'`)
    }
  }

  /**
   * Getter for the rank attribute.
   *
   * @returns {string} - the rank of the card
   */
  get rank() {
    return this.#rank
  }

  /**
   * Getter for the suite attribute.
   *
   * @returns {string} - the suite of the card
   */
  get suite() {
    return this.#suite
  }

  /**
   * Returns the numeric value of the card's rank, e.g. K = 13.
   *
   * @returns {number} the numeric value of the card's rank.
   */
  valueOf() {
    return Card.RANKS[this.#rank]
  }

}
