import { Rule } from './Rule.js'


export class TwoPair extends Rule {
  constructor() {
    const value = 5
    const name = 'Two Pair'

    super(value, name)
  }

  test(line) {
    let pairCount = 0
    const ranks = line.getRanks()

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