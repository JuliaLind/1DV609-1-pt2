import { Rule } from './Rule.js'


export class TwoPairs extends Rule {


  constructor() {
    const value = 5
    const name = 'Two Pair'

    super(value, name)
  }

  test(line) {
    return this.#hasTwoPairs(line.getRanks())
  }

  #hasTwoPairs(rankFrequencies) {
    const frequencies = Object.values(rankFrequencies)
    return frequencies.filter((count => count === 2)).length === 2
  }
}