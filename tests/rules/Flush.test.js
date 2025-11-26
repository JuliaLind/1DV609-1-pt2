import { describe, it, expect } from 'vitest'
import { Flush } from '../../src/js/rules/Flush.js'

describe('Flush', () => {
  const sut = new Flush()
  it('valueOf should return 20', () => {
    expect(Number(sut)).toBe(20)
  })

  it('toString should return "Flush"', () => {
    expect(String(sut)).toBe('Flush')
  })

  describe('test()', () => {
    const parameters = [
      {
        description: 'same suite cards',
        hasEmptySlots: false,
        isSameSuite: true,
        expectedResult: true
      },
      {
        description: 'different suite cards',
        hasEmptySlots: false,
        isSameSuite: false,
        expectedResult: false
      },
      {
        description: 'line with empty slots',
        hasEmptySlots: true,
        isSameSuite: true,
        expectedResult: false
      }
    ]
    parameters.forEach(({ description, hasEmptySlots, isSameSuite, expectedResult }) => {
      it(`should return ${expectedResult} for ${description}`, () => {
        const gridLineStub = {
          hasEmptySlots: () => hasEmptySlots,
          isSameSuite: () => isSameSuite,
        }
        const actual = sut.test(gridLineStub)
        expect(actual).toBe(expectedResult)
      })
    })
  })
})