import { SameOfAKind } from './SameOfAKind.js'

export class OnePair extends SameOfAKind {
  constructor() {
    const value = 2
    const name = 'One Pair'
    const rankCount = 2

    super(value, name, rankCount)
  }
}