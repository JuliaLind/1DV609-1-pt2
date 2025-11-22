import { describe, it, expect } from 'vitest'
import '../../src/components/poker-card'


describe('poker-card', () => {
  it('poker-card should be defined as a custom element', () => {
    expect(customElements.get('poker-card')).toBeDefined()
  })

  it('poker-card image source should be correct', () => {
    const sut = document.createElement('poker-card')
    const expected = 'path/to/image.png'
    sut.setAttribute('src', expected)
    expect(sut.shadowRoot.querySelector('img').getAttribute('src')).toBe(expected)
  })

  it('poker-card image alt text should be correct', () => {
    const sut = document.createElement('poker-card')
    const expected = 'A hearts'
    sut.setAttribute('alt', expected)
    expect(sut.shadowRoot.querySelector('img').getAttribute('alt')).toBe(expected)
  })
})