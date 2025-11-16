import { Rule } from './Rule.js'

export class Straight extends Rule {
  constructor() {
    const value = 15
    const name = 'Straight'
    super(value, name)
  }

  test(cards) {
    if (cards.includes(undefined)) {
      return false
    }

    return this.#areSequential(cards)
  }

  #areSequential(cards) {
    const sortedCards = this.#sortLowestToHighest(cards)
    const lastIndex = sortedCards.length - 1

    return sortedCards[lastIndex].getValue() - sortedCards[0].getValue() === 4
  }

  #sortLowestToHighest(cards) {
    return [...cards].sort((a, b) => a.getValue() - b.getValue())
  }
}