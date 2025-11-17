import { Rule } from './Rule.js'

export class FullHouse extends Rule {
  constructor() {
    const value = 25
    const name = 'Full House'

    super(value, name)
  }

  test(cards) {
    const ranks = cards.getRanks()
    const rankCounts = Object.values(ranks)

    return this.#hasThreeOfAKind(rankCounts) && this.#hasPair(rankCounts)
  }

  #hasThreeOfAKind(rankCounts) {
    return rankCounts.some(count => count === 3)
  }

  #hasPair(rankCounts) {
    return rankCounts.some(count => count === 2)
  }
}