import { Sequential } from './Sequential.js'

export class StraightFlush extends Sequential {
  constructor() {
    const value = 75
    const name = 'Straight Flush'
    super(value, name)
  }
}