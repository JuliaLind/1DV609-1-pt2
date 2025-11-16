import { Rule } from './Rule.js'

export class Sequential extends Rule {
  constructor(value, name) {
    if (new.target === Sequential) {
      throw new Error('Sequential is an abstract class')
    }

    super(value, name)
  }

  _test(cards) {
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