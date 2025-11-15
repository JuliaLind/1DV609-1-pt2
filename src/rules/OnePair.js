export class OnePair {
  #value = 2

  getValue() {
    return this.#value
  }

  toString() {
    return 'One Pair'
  }

  test(cards) {
    const ranks = []

    for (const card of cards) {
      const rank = card.getAttribute('rank')
      if (ranks.includes(rank)) {
        return true
      }
      ranks.push(rank)
    }

    return false
  }
}