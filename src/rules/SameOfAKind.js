import { Rule } from './Rule.js'

export class SameOfAKind extends Rule {
  #rankCount

  constructor(points, name, rankCount) {
    if (new.target === SameOfAKind) {
      throw new Error('SameOfAKind is an abstract class')
    }

    super(points, name)
    this.#rankCount = rankCount
  }

  _test(cards) {
    const ranks = {}

    for (const card of cards) {
      const rank = card.getAttribute('rank')

      ranks[rank] = (ranks[rank] || 0) + 1

      if (ranks[rank] === this.#rankCount) {
        return true
      }
    }
    return false
  }
}