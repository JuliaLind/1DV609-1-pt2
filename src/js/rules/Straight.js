import { Rule } from './Rule.js'

/**
 * Class representing the Straight rule.
 */
export class Straight extends Rule {
  /**
   * Creates an instance of Straight rule.
   */
  constructor () {
    const name = 'Straight'
    const value = 15

    super(name, value)
  }

  test (line) {
    const rankFrequencies = line.getRankFrequencies()
    const uniqueRanks = Object.keys(rankFrequencies)
    
    if (uniqueRanks.length !== 5) {
      return false
    }
    
    return true
  }
}
