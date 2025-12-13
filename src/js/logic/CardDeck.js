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

    for (let index = this.#cards.length - 1; index > 0; index--) {
      const randomIndex = Math.floor(Math.random() * (index + 1))

      const temp = this.#cards[index]
      this.#cards[index] = this.#cards[randomIndex]
      this.#cards[randomIndex] = temp
    }
  }

  /**
   * Gets the cards in the deck.
   * Keep for testing purposes.
   *
   * @returns {Card[]} - array of cards in the deck
   */
  get cards() {
    return [...this.#cards]
  }
}
