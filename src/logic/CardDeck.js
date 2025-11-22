import { PokerCard } from '../components/poker-card/poker-card'
import { CardFactory } from './CardFactory.js'

export class CardDeck {
  #cards = []

  constructor(factory = new CardFactory()) {
    this.#createCards(factory)
    this.#shuffle()
  }

  #createCards(factory) {
    const suites = PokerCard.SUITES
    const ranks = Object.keys(PokerCard.RANKS)
    for (const suite of suites) {
      for (const rank of ranks) {
        const card = factory.createCard(suite, rank)
        this.#cards.push(card)
      }
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
    if (this.#cards.length === 0) {
      throw new Error('No cards left')
    }

    return this.#cards.pop()
  }
}