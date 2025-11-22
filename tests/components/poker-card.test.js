import { describe, it, expect } from 'vitest'
import '../../src/js/components/poker-card'


describe('poker-card', () => {
  it('poker-card should be defined as a custom element', () => {
    expect(customElements.get('poker-card')).toBeDefined()
  })

  it('poker-card image source should be correct', () => {
    const sut = document.createElement('poker-card')
    sut.setAttribute('rank', 'A')
    sut.setAttribute('suite', 'hearts')
    const expected = './img/AH.svg'
    expect(sut.shadowRoot.querySelector('img').getAttribute('src')).toBe(expected)
  })

  it('poker-card image alt text should be correct', () => {
    const sut = document.createElement('poker-card')

    const expected = 'A of hearts'

    sut.setAttribute('rank', 'A')
    sut.setAttribute('suite', 'hearts')
    expect(sut.shadowRoot.querySelector('img').getAttribute('alt')).toBe(expected)
  })
})