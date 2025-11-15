import { SameOfAKind } from './SameOfAKind.js'

export class ThreeOfAKind extends SameOfAKind {  
  constructor() {
    const points = 10
    const name = 'Three of a Kind'
    const rankCount = 3

    super(points, name, rankCount)
  }

  test(cards) {
    return super._test(cards)
  }
}