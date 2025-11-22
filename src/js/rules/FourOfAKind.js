import { SameOfAKind } from './SameOfAKind.js'

export class FourOfAKind extends SameOfAKind {  
  constructor() {
    const value = 50
    const name = 'Four of a Kind'
    const rankCount = 4

    super(value, name, rankCount)
  }
}