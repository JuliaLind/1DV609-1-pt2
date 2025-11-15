import { SameOfAKind } from './SameOfAKind.js'

export class ThreeOfAKind extends SameOfAKind {  
  constructor() {
    const value = 10
    const name = 'Three of a Kind'
    const rankCount = 3

    super(value, name, rankCount)
  }

  test(cards) {
    return super._test(cards)
  }
}