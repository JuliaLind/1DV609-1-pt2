import { describe, it, expect } from 'vitest'
import '../../src/components/poker-card'


describe('poker-card', () => {
  it('poker-card should be defined as a custom element', () => {
    expect(customElements.get('poker-card')).toBeDefined()
  })

  it('Rank cannot be changed after being set', async () => {
    const sut = document.createElement('poker-card')
    sut.setAttribute('rank', 'A')
    sut.setAttribute('rank', '5')

    expect(sut.getAttribute('rank')).toBe('A')
  })

  it('Suite cannot be changed after being set', async () => {
    const sut = document.createElement('poker-card')
    sut.setAttribute('suite', 'hearts')
    sut.setAttribute('suite', 'spades')

    expect(sut.getAttribute('suite')).toBe('hearts')
  })

  it('Cannot set invalid suite', async () => {
    const sut = document.createElement('poker-card')

    sut.setAttribute('suite', 'invalid')

    expect(sut.getAttribute('suite')).toBe('')
  })

  it('Cannot set invalid rank', async () => {
    const sut = document.createElement('poker-card')

    sut.setAttribute('rank', '1')

    expect(sut.getAttribute('rank')).toBe('')
  })

  it('get value of a card with rank 10', async () => {
    const sut = document.createElement('poker-card')

    sut.setAttribute('rank', '10')

    expect(sut.getValue()).toBe(10)
  })

  it('get value of a card with rank A', async () => {
    const sut = document.createElement('poker-card')

    sut.setAttribute('rank', 'A')

    expect(sut.getValue()).toBe(14)
  })
})