import { describe, it, expect } from 'vitest'
import { ThreeOfAKind } from '../../src/js/rules/ThreeOfAKind.js'


describe('ThreeOfAKind', () => {
  const sut = new ThreeOfAKind()

  it('valueOf() should return 10', () => {
    expect(Number(sut)).toBe(10)
  })

  it('toString() should return "Three of a Kind"', () => {
    expect(String(sut)).toBe('Three of a Kind')
  })

  describe('ThreeOfAKind.test()', () => {
    const parameters = [
      { ranksObservations: { '2': 2, '3': 2 }, expectedResult: false },
      { ranksObservations: { '2': 1, '3': 3 }, expectedResult: true }
    ]

    parameters.forEach(({ ranksObservations, expectedResult }) => {
      it(`should return ${expectedResult} for ranks ${JSON.stringify(ranksObservations)}`, () => {
        const gridLineStub = {
          getRanks: () => ranksObservations
        }
        const actual = sut.test(gridLineStub)

        expect(actual).toBe(expectedResult)
      })
    })
  })
})