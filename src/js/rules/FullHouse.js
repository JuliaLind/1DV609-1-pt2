import { Rule } from './Rule.js'

export class FullHouse extends Rule {
  constructor() {
    const value = 25
    const name = 'Full House'

    super(value, name)
  }

  test(line) {
    const rankFrequencies = line.getRankFrequencies()
    const frequencies = Object.values(rankFrequencies)

    return this.#hasThreeOfAKind(frequencies) && this.#hasPair(frequencies)
  }

  #hasThreeOfAKind(rankCounts) {
    return rankCounts.some(count => count === 3)
  }

  #hasPair(rankCounts) {
    return rankCounts.some(count => count === 2)
  }
}