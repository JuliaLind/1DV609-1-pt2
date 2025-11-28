import { describe, it, expect } from 'vitest'
import { CardFactory } from '../../src/js/logic/CardFactory.js'
import { Card } from '../../src/js/logic/Card.js'

describe('CardFactory.createCard()', () => {
  const sut = new CardFactory()
  const card = sut.createCard('hearts', 'A')

  it('Should return an instnace of Card', () => {
    expect(card).toBeInstanceOf(Card)
  })

  it('createCard(hearts, a) should create a Card with rank A', () => {
    expect(card.getRank()).toBe('A')
  })

  it('createCard(hearts, a) should create a Card with suite hearts', () => {
    expect(card.getSuite()).toBe('hearts')
  })

})