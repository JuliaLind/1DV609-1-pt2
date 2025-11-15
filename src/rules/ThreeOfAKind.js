import { SameOfAKind } from './SameOfAKind.js'

export class ThreeOfAKind extends SameOfAKind {
  #value = 10
  #name = 'Three of a Kind'

  
  constructor() {
    const rankCount = 3

    super(rankCount)
  }

  getValue() {
    return this.#value
  }

  toString() {
    return this.#name
  }

  test(cards) {
    return super._test(cards)
  }
}