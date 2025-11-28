import { Rule } from './Rule.js'

export class Flush extends Rule {
  constructor() {
    const value = 20
    const name = 'Flush'

    super(value, name)
  }

  test(line) {
    return !line.hasEmptySlots() && line.isSameSuite()
  }
}