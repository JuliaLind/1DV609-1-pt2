import { StraightFlush } from './StraightFlush.js'

export class RoyalFlush extends StraightFlush {
  constructor() {
    const value = 100
    const name = 'Royal Flush'

    super(value, name)
  }
}