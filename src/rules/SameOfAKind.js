export class SameOfAKind {
  #rankCount

  constructor(rankCount) {
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