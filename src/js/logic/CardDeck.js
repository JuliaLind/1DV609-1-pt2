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
  constructor(cardFactory = new CardFactory()) {
    this.#cards = [...cardFactory.createCards()]
  }


  /**
   * Picks the top card from the deck.
   *
   * @returns {Card} - the top card from the deck
   */
  drawCard () {
    return this.#cards.pop()
  }
}
