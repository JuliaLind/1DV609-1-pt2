import { Rule } from './Rule.js'

export class Straight extends Rule {
  constructor() {
    const value = 15
    const name = 'Straight' 
    super(value, name)
  }
}