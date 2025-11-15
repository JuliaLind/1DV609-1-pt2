import { SameOfAKind } from './SameOfAKind.js'

export class OnePair extends SameOfAKind {
  constructor() {
    const points = 2
    const name = 'One Pair'
    const rankCount = 2

    super(points, name, rankCount)
  }

  test(cards) {
    return super._test(cards)
  }
}