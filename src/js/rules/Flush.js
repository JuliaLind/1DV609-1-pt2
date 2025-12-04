import { Rule } from './Rule.js'

/**
 * Class representing the Flush rule.
 */
export class Flush extends Rule {
  /**
   * Creates an instance of Flush rule.
   */
  constructor () {
    const name = 'Flush'
    const value = 20

    super(name, value)
  }
}
