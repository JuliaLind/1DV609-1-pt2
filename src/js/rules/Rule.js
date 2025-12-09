/**
 * Abstract base class for all rules.
 */
export class Rule {
  #name
  #value

  /**
   * Creates an instance of Rule.
   *
   * @param {string} name - name of the rule
   * @param {number} value - value is the number of points the rule is worth
   * @throws {Error} If instantiated directly.
   */
  constructor (name = '', value = 0) {
    if (new.target === Rule) {
      throw new Error('Rule is an abstract class')
    }

    this.#name = name
    this.#value = value
  }

  /**
   * Returns an plain object representation of the rule.
   *
   * @returns {object} - an associative array with name and points of the rule
   */
  toObject () {
    return {
      name: this.#name,
      points: this.#value
    }
  }

  /**
   * Returns a default plain object representation of the Rule.
   *
   * @returns {object} - an associative array with name and points of the rule
   */
  static toObject () {
    return {
      name: '',
      points: 0
    }
  }
}
