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

  _test(cards) {
    const ranks = {}

    for (const card of cards) {
      if (!card) {
        continue
      }

      const rank = card.getAttribute('rank')

      ranks[rank] = (ranks[rank] || 0) + 1

      if (ranks[rank] === this.#rankCount) {
        return true
      }
    }
    return false
  }
}