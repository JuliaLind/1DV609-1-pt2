import { Sequential } from './Sequential.js'

export class Straight extends Sequential {
  constructor() {
    const value = 15
    const name = 'Straight'
    super(value, name)
  }

  test(cards) {
    return super._test(cards)
  }
}