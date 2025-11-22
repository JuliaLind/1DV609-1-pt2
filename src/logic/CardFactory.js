import { Card } from './Card.js'

export class CardFactory {
  createCard(suite, rank) {
    return new Card(suite, rank)
  }
}