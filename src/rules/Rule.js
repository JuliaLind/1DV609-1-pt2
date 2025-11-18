export class Rule {
  #value
  #name

  constructor(value, name) {
    if (new.target === Rule) {
      throw new Error('Rule is an abstract class')
    }

    this.#value = value
    this.#name = name
  }

  valueOf() {
    return this.#value
  }

  toString() {
    return this.#name
  }
}