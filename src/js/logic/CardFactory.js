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
    const cards = []
    for (const suite of Card.SUITES) {
      for (const rank of Object.keys(Card.RANKS)) {
        cards.push(new Card(rank, suite))
      }
    }

    return cards
  }
}
