import { describe, it, expect, vitest } from 'vitest'
import { RuleSet } from '../../src/rules/RuleSet.js'
import { RoyalFlush } from '../../src/rules/RoyalFlush.js'
import { StraightFlush } from '../../src/rules/StraightFlush.js'
import { FourOfAKind } from '../../src/rules/FourOfAKind.js'
import { FullHouse } from '../../src/rules/FullHouse.js'
import { Flush } from '../../src/rules/Flush.js'
import { Straight } from '../../src/rules/Straight.js'
import { ThreeOfAKind } from '../../src/rules/ThreeOfAKind.js'
import { TwoPair } from '../../src/rules/TwoPair.js'
import { OnePair } from '../../src/rules/OnePair.js'


describe('RuleSet', () => {
  const sut = new RuleSet()
  let royalFlushMock
  let straightFlushMock
  let fourOfAKindMock
  let fullHouseMock
  let flushMock
  let straightMock
  let threeOfAKindMock
  let twoPairMock
  let onePairMock

  beforeEach(() => {
    royalFlushMock = vitest.spyOn(RoyalFlush.prototype, 'test')
      .mockReturnValue(false)
    straightFlushMock = vitest.spyOn(StraightFlush.prototype, 'test')
      .mockReturnValue(false)
    fourOfAKindMock = vitest.spyOn(FourOfAKind.prototype, 'test')
      .mockReturnValue(false)
    fullHouseMock = vitest.spyOn(FullHouse.prototype, 'test')
      .mockReturnValue(false)
    flushMock = vitest.spyOn(Flush.prototype, 'test')
      .mockReturnValue(false)
    straightMock = vitest.spyOn(Straight.prototype, 'test')
      .mockReturnValue(false)
    threeOfAKindMock = vitest.spyOn(ThreeOfAKind.prototype, 'test')
      .mockReturnValue(false)
    twoPairMock = vitest.spyOn(TwoPair.prototype, 'test')
      .mockReturnValue(false)
    onePairMock = vitest.spyOn(OnePair.prototype, 'test')
      .mockReturnValue(false)
  })

  afterEach(() => {
    vitest.clearAllMocks()
  })

  describe('RuleSet.test() should call rules in correct order', () => {
    it('If RoyalFlush matches, straightFlush, Flush and Straight should not be called', () => {
      royalFlushMock.mockReturnValue(true)

      sut.test({})

      expect(royalFlushMock).toHaveBeenCalled()
      expect(straightFlushMock).not.toHaveBeenCalled()
      expect(flushMock).not.toHaveBeenCalled()
      expect(straightMock).not.toHaveBeenCalled()
    })

    it('If StraightFlush matches, Flush and Straight should not be called', () => {
      straightFlushMock.mockReturnValue(true)

      sut.test({})

      expect(straightFlushMock).toHaveBeenCalled()
      expect(flushMock).not.toHaveBeenCalled()
      expect(straightMock).not.toHaveBeenCalled()
    })

    it('If StraightFlush doesn\'t match, Flush and Straight should be called', () => {
      sut.test({})

      expect(straightFlushMock).toHaveBeenCalled()
      expect(flushMock).toHaveBeenCalled()
      expect(straightMock).toHaveBeenCalled()
    })

    it('If FourOfAKind matches, FullHouse, ThreeOfAKind, TwoPairs and OnePair should not be called', () => {
      fourOfAKindMock.mockReturnValue(true)

      sut.test({})

      expect(fourOfAKindMock).toHaveBeenCalled()
      expect(fullHouseMock).not.toHaveBeenCalled()
      expect(threeOfAKindMock).not.toHaveBeenCalled()
      expect(twoPairMock).not.toHaveBeenCalled()
      expect(onePairMock).not.toHaveBeenCalled()
    })

    it('If FullHouse matches, ThreeOfAKind, TwoPairs and OnePair should not be called', () => {
      fullHouseMock.mockReturnValue(true)

      sut.test({})

      expect(fullHouseMock).toHaveBeenCalled()
      expect(threeOfAKindMock).not.toHaveBeenCalled()
      expect(twoPairMock).not.toHaveBeenCalled()
      expect(onePairMock).not.toHaveBeenCalled()
    })

    it('If ThreeOfAKind matches, TwoPairs and OnePair should not be called', () => {
      threeOfAKindMock.mockReturnValue(true)
      sut.test({})

      expect(threeOfAKindMock).toHaveBeenCalled()
      expect(twoPairMock).not.toHaveBeenCalled()
      expect(onePairMock).not.toHaveBeenCalled()
    })

    it('If TwoPairs matches, OnePair should not be called', () => {
      twoPairMock.mockReturnValue(true)
      sut.test({})

      expect(twoPairMock).toHaveBeenCalled()
      expect(onePairMock).not.toHaveBeenCalled()
    })
  })

  describe('RuleSet.test() returnvalue', () => {
    it('Should return {name: "", points: 0 } if no rule matches', () => {
      const result = sut.test({})
      expect(result).toEqual({name: "", points: 0 })
    })
    
    it('Should return correct result if a rule matches', () => {
      const expected = { name: 'Full House', points: 25 }
     vitest.spyOn(FullHouse.prototype, 'toString').mockReturnValue('Full House')
     vitest.spyOn(FullHouse.prototype, 'valueOf').mockReturnValue(25)
     fullHouseMock.mockReturnValue(true)

     const actual = sut.test({})

     expect(actual).toEqual(expected)
    })
  })
})