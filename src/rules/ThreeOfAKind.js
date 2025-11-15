export class ThreeOfAKind {
  #value = 10
  #name = 'Three of a Kind'

  getValue() {
    return this.#value
  }

  toString() {
    return this.#name
  }

  test(cards) {
    const ranks = {}

    for (const card of cards) {
      const rank = card.getAttribute('rank')

      ranks[rank] = (ranks[rank] || 0) + 1

      if (ranks[rank] === 3) {
        return true
      }
    }
    return false
  }
}