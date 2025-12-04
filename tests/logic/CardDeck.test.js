import { describe, it, expect, vi } from 'vitest'
import { CardDeck } from '../../src/js/logic/CardDeck.js'

describe('CardDeck', () => {
  it('CardDeck constructor should call the CardFactory.createCards method', () => {
    const cardFactoryMock = {
      createCards: vi.fn()
    }
    new CardDeck(cardFactoryMock) // eslint-disable-line no-new

    expect(cardFactoryMock.createCards).toHaveBeenCalledOnce()
  })
})
