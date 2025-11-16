import { Rule } from './Rule.js'

export class TwoPair extends Rule {
  #ranks
  #pairCount

  constructor() {
    const value = 5
    const name = 'Two Pair'

    super(value, name)
  }

  test(cards) {
    this.#reset()

    for (const card of cards) {
      if (!card) {
        continue
      }

      this.#processRank(card.getAttribute('rank'))

      if (this.#pairCount === 2) {
        return true
      } 
    }

    return false
  }

  #processRank(rank) {
    if (this.#ranks.includes(rank)) {
        this.#pairCount++
        this.#ranks.splice(this.#ranks.indexOf(rank), 1)
      } else {
        this.#ranks.push(rank)
      }
  }
    

  #reset() {
    this.#pairCount = 0
    this.#ranks = []
  }
}