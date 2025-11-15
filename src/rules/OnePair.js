import { SameOfAKind } from './SameOfAKind.js'

export class OnePair extends SameOfAKind {
  #value = 2
  #name = 'One Pair'

  constructor() {
    const rankCount = 2

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