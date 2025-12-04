import { CardFactory } from './CardFactory.js'

/**
 * Represents a deck of cards.
 */
export class CardDeck {
  #cards

  /**
   * Creates an instance of CardDeck.
   *
   * @param {CardFactory} cardFactory - the factory for creating cards for the deck
   */
  constructor (cardFactory = new CardFactory()) {
    this.#cards = cardFactory.createCards()
  }

  /**
   * Gets the cards in the deck.
   * Keep for testing purposes.
   *
   * @returns {Card[]} - array of cards in the deck
   */
  get cards () {
    return Array.from(this.#cards)
  }
}
