import { Card } from './Card.js'

/**
 * Represents a factory that creates cards.
 */
export class CardFactory {
  /**
   * Creates a standard deck of 52 playing cards.
   *
   * @returns {Card[]} - array of Card instances
   */
  createCards () {
    const cards = []
    const suites = Card.SUITES
    const ranks = Object.keys(Card.RANKS)

    suites.forEach((suite) => {
      ranks.forEach((rank) => {
        cards.push(new Card(rank, suite))
      })
    })
    return cards
  }
}
