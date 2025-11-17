import { Rule } from './Rule.js'
import { CardCollection } from '../logic/CardCollection.js'

export class TwoPair extends Rule {
  #ranks
  #pairCount

  constructor() {
    const value = 5
    const name = 'Two Pair'

    super(value, name)
  }

  test(cards) {
    let pairCount = 0
    const ranks = cards.getRanks()

    for (const count of Object.values(ranks)) {
      if (count >= 2) {
        pairCount += 1

        if (pairCount === 2) {
          return true
        }
      }
    }
    return false
  }

}