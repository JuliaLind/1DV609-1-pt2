import { Rule } from './Rule.js'
import { CardCollection } from '../logic/CardCollection.js'

export class SameOfAKind extends Rule {
  #rankCount

  constructor(value, name, rankCount) {
    if (new.target === SameOfAKind) {
      throw new Error('SameOfAKind is an abstract class')
    }

    super(value, name)
    this.#rankCount = rankCount
  }

  _test(cards) {
    const ranks = cards.getRanks()
    const rankCounts = Object.values(ranks)

    return rankCounts.some(count => count >= this.#rankCount)
  }
}