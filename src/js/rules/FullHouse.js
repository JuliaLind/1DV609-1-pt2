import { Rule } from './Rule.js'

/**
 * Class representing the Full House rule.
 */
export class FullHouse extends Rule {
  /**
   * Creates an instance of FullHouse class.
   */
  constructor () {
    const name = 'Full House'
    const value = 25

    super(name, value)
  }
}
