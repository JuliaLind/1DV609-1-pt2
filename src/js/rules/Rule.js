/**
 * Abstract base class for all rules.
 */
export class Rule {
  #name = ''
  #value = 0

  /**
   * Creates an instance of Rule.
   *
   * @throws {Error} If instantiated directly.
   */
  constructor(name = '', value = 0) {
    if (new.target === Rule) {
      throw new Error('Rule is an abstract class')
    }

    this.#name = name
    this.#value = value
  }

  /**
   * Returns an plain object representation of the rule.
   * 
   * @returns {Object} - an associative array with name and points of the rule
   */
  toObject() {
    return {
      name: this.#name,
      points: this.#value
    }
  }
}