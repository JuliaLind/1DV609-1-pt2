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
    this.#shuffleInPlace()
  }

  /**
   * Shuffles the cards in the deck in place using the Fisher-Yates algorithm.
   */
  #shuffleInPlace() {
    for (let index = this.#cards.length - 1; index > 0; index--) {
      const randomIndex = this.#selectRandomIndex(index + 1)

      this.#swapCards(index, randomIndex)
    }
  }

  /**
   * Selects a random index up to the given upper limit.
   *
   * @param {number} upperLimit - the upper limit (exclusive) for the random index
   * @returns {number} - the selected random index
   */
  #selectRandomIndex(upperLimit) {
    return Math.floor(Math.random() * upperLimit)
  }

  /**
   * Swaps two cards in the deck.
   *
   * @param {number} index1 - index position of first card
   * @param {number} index2 - index position of second card
   */
  #swapCards(index1, index2) {
    [this.#cards[index1], this.#cards[index2]] = [this.#cards[index2], this.#cards[index1]]
  }

  /**
   * Picks the top card from the deck.
   *
   * @returns {Card} - the top card from the deck
   */
  drawCard() {
    if (this.#cards.length === 0) {
      throw new Error('No cards left')
    }
    return this.#cards.pop()
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
