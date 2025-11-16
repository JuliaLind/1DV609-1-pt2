import { StraightFlush } from './StraightFlush.js'

export class RoyalFlush extends StraightFlush {
  constructor() {
    const value = 100
    const name = 'Royal Flush'

    super(value, name)
  }

  test(cards) {
    if (!super.test(cards)) {
      return false
    }

    return this.#hasRank(cards, 'A') && this.#hasRank(cards, '10')
  }

  #hasRank(cards, rank) {
    return cards.some(card => card.getAttribute('rank') === rank)
  }
}