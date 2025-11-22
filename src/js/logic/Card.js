export class Card {
  static SUITES = Object.freeze(['hearts', 'diamonds', 'clubs', 'spades'])

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

  #suite = ''
  #rank = ''

  constructor(suite, rank) {
    this.#setSuite(suite)
    this.#setRank(rank)

    Object.freeze(this)
  }

  #setRank(value) {
    if (!this.#isValidRank(value)) {
      throw new Error(`Invalid rank value: ${value}`)
    }

    this.#rank = value
  }

  #isValidRank(value) {
    return Object.keys(this.constructor.RANKS).includes(value)
  }

  #setSuite(value) {
    if (!this.#isValidSuite(value)) {
      throw new Error(`Invalid suite value: ${value}`)
    }

    this.#suite = value
  }

  #isValidSuite(value) {
    return this.constructor.SUITES.includes(value)
  }


  valueOf() {
    return this.constructor.RANKS[this.#rank]
  }

  getRank() {
    return this.#rank
  }

  getSuite() {
    return this.#suite
  }
}