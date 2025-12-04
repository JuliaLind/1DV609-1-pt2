import { Card } from './Card.js'

/**
 * Represents a factory that creates cards.
 */
export class CardFactory {
  /**
   * Creates all 52 cards.
   *
   * @returns {Card[]} - array of created cards
   */
  createCards () {
    return Card.SUITES.flatMap((suite) => this.#createCardsOfSuite(suite))
  }

  /**
   * Creates a set 2-A of cards for a given suite.
   *
   * @param {string} suite - the suite of the cards to create.
   * @returns {Card[]} - array of created cards for the given suite
   */
  #createCardsOfSuite (suite) {
    const ranks = Object.keys(Card.RANKS)

    return ranks.map((rank) => new Card(rank, suite))
  }
}
