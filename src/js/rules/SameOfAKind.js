import { Rule } from './Rule.js'

export class SameOfAKind extends Rule {
  #rankCount

  constructor(value, name, rankCount) {
    if (new.target === SameOfAKind) {
      throw new Error('SameOfAKind is an abstract class')
    }

    super(value, name)
    this.#rankCount = rankCount
  }

  test(line) {
    const ranks = line.getRankFrequencies()
    const rankCounts = Object.values(ranks)

    return rankCounts.some(count => count >= this.#rankCount)
  }
}