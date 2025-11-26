import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest'
import { CardDeck } from '../../src/js/logic/CardDeck.js'
import seedrandom from 'seedrandom'

describe('CardDeck', () => {
  describe('Constructor should initialize with 52 unique cards', () => {
    let cardFactoryMock

    beforeEach(() => {
      cardFactoryMock = {
        createCard: vi.fn()
      }
    })

    afterEach(() => {
      vi.clearAllMocks()
    })

    it('CardFactory should have been called 52 times', () => {
      new CardDeck(cardFactoryMock)

      expect(cardFactoryMock.createCard).toHaveBeenCalledTimes(52)
    })

    it('CardFactory should have been called with boundary values rank 2 suite hearts', () => {
      new CardDeck(cardFactoryMock)

      expect(cardFactoryMock.createCard).toHaveBeenCalledWith('hearts', '2')
    })

    it('CardFactory should have been called with boundary values rank A suite spades', () => {
      new CardDeck(cardFactoryMock)

      expect(cardFactoryMock.createCard).toHaveBeenCalledWith('spades', 'A')
    })

    it('The cards should be in random order', () => {
      const fullCardSet = Array.from({ length: 52 }, () => ({}))
      
      fullCardSet.forEach(card => {
        cardFactoryMock.createCard.mockReturnValueOnce(card)
      })

      const rng = seedrandom('seed-random-for-fixed-order')
      vi.spyOn(Math, 'random').mockImplementation(() => rng())

      const sut = new CardDeck(cardFactoryMock)
      const firstExpectedCard = fullCardSet[44]
      const secondExpectedCard = fullCardSet[13]
      const firstActualCard = sut.drawCard()
      const secondActualCard = sut.drawCard()

      expect(firstActualCard).toBe(firstExpectedCard)
      expect(secondActualCard).toBe(secondExpectedCard)
    })

    it('Should throw error when drawing from empty deck', () => {
      cardFactoryMock.createCard.mockImplementation(() => ({}))
      const sut = new CardDeck(cardFactoryMock)

      for (let i = 0; i < 52; i++) {
        sut.drawCard()
      }
      expect(() => sut.drawCard()).toThrow()
    })
  })
})
