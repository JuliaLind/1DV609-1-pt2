export class TwoPair {
  #value = 5

  getValue() {
    return this.#value
  }

  toString() {
    return 'Two Pair'
  }

  test(cards) {
    let pairCount = 0
  
    const ranks = []

    for (const card of cards) {
      const rank = card.getAttribute('rank')

      if (ranks.includes(rank)) {
        pairCount++
        ranks.splice(ranks.indexOf(rank), 1)
      } else {
        ranks.push(rank)
      }

      if (pairCount === 2) {
        return true
      } 
    }

    return false
  }
}