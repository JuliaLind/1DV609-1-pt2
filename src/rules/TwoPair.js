import { Rule } from './Rule.js'

export class TwoPair extends Rule {
  constructor() {
    const points = 5
    const name = 'Two Pair'

    super(points, name)
  }

  test(cards) {
    let pairCount = 0
  
    const ranks = []

    for (const card of cards) {
      const rank = card.getAttribute('rank')

      if (ranks.includes(rank)) {
        pairCount++
        ranks.splice(ranks.indexOf(rank), 1)
      } else {
        ranks.push(rank)
      }

      if (pairCount === 2) {
        return true
      } 
    }

    return false
  }
}