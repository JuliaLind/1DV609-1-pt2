import { Sequential } from './Sequential.js'

export class StraightFlush extends Sequential {
  constructor() {
    const value = 75
    const name = 'Straight Flush'
    super(value, name)
  }

  test (cards) {
    if(!super._test(cards)) {
      return false
    }

    return this.#isSameSuit(cards)
  }

  #isSameSuit(cards) {
    const firstSuit = cards[0].getAttribute('suit')

    for (const card of cards) {
      if (card.getAttribute('suit') !== firstSuit) {
        return false
      }
    }

    return true
  }
}