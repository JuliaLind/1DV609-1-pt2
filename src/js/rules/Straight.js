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
}
