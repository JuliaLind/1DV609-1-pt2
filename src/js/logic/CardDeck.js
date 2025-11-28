import { Card } from './Card.js'
import { CardFactory } from './CardFactory.js'

export class CardDeck {
  #cards = []
  #factory

  constructor(factory = new CardFactory()) {
    this.#factory = factory
    this.#createCards()
    this.#shuffle()
  }

  #createCards() {
    const suites = Card.SUITES

    for (const suite of suites) {
      this.#appendSuiteCards(suite)
    }
  }

  #appendSuiteCards(suite) {
    const ranks = Object.keys(Card.RANKS)

    for (const rank of ranks) {
      const card = this.#factory.createCard(suite, rank)

      this.#cards.push(card)
    }
  }

  #shuffle() {
    for (let index = this.#cards.length - 1; index > 0; index--) {
      const randomIndex = this.#selectRandomIndex(index)

      this.#switchCards(index, randomIndex)
    }
  }

  #selectRandomIndex(index) {
    return Math.floor(Math.random() * (index + 1))
  }

  #switchCards(index1, index2) {
    [this.#cards[index1], this.#cards[index2]] = [this.#cards[index2], this.#cards[index1]]
  }

  drawCard() {
    this.#validateCardsLeft()

    return this.#cards.pop()
  }

  #validateCardsLeft() {
    if (this.#cards.length === 0) {
      throw new Error('No cards left')
    }
  }
}