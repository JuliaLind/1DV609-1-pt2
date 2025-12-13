import { CardDeck } from './CardDeck.js'

/**
 * Represents the main game logic.
 */
export class Game {
  #cardDeck

  /**
   * Creates a new instance of Game.
   *
   * @param {CardDeck} cardDeck - a deck of cards
   */
  constructor (cardDeck = new CardDeck()) {
    this.#cardDeck = cardDeck
  }

  /**
   * Gets the next card to be placed.
   *
   * @returns {Card} - the next card to be placed
   */
  getNextCard () {
    return this.#cardDeck.drawCard()
  }
}
