import { describe, it, expect } from 'vitest'
import { Flush } from '../../src/js/rules/Flush.js'

describe('Flush', () => {
  it('toObject should return {name: "Flush", points: 20 }', () => {
    const sut = new Flush()
    const expected = {
      name: 'Flush',
      points: 20
    }

    expect(sut.toObject()).toEqual(expected)
  })

  it('Flush.test() should return true for line that has five cards of the same suit', () => {
    const sut = new Flush()
    const lineStub = {
      /**
       * Stub method for getSuiteFrequencies.
       *
       * @returns {object} - a stubbed suit frequencies object that says there are five cards of the same suit
       */
      getSuiteFrequencies: () => ({
        hearts: 5
      })
    }

    expect(sut.test(lineStub)).toBe(true)
  })

  it('Flush.test() should return false for line that has five cards of two or more suites', () => {
    const sut = new Flush()
    const lineStub = {
      /**
       * Stub method for getSuiteFrequencies.
       *
       * @returns {object} - a stubbed suit frequencies object that says there are five cards of the same suit
       */
      getSuiteFrequencies: () => ({
        hearts: 4,
        spades: 1
      })
    }

    expect(sut.test(lineStub)).toBe(false)
  })

  it('Flush.test() should return false for line that has four cards of same suites', () => {
    const sut = new Flush()
    const lineStub = {
      /**
       * Stub method for getSuiteFrequencies.
       *
       * @returns {object} - a stubbed suit frequencies object that says there are five cards of the same suit
       */
      getSuiteFrequencies: () => ({
        hearts: 4
      })
    }

    expect(sut.test(lineStub)).toBe(false)
  })
})
