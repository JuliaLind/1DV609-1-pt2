import { describe, it, expect } from 'vitest'
import '../../src/js/components/poker-card'

describe('poker-card', () => {
  it('Should be defined as a custom element', () => {
    expect(customElements.get('poker-card')).toBeDefined()
  })

  it('Alt attribute of the poker-card image should be "[Rank] of [Suite]"', () => {
    const sut = document.createElement('poker-card')

    sut.setAttribute('rank', 'A')
    sut.setAttribute('suite', 'Hearts')

    const actual = sut.shadowRoot.querySelector('img').getAttribute('alt')

    expect(actual).toEqual('A of Hearts')
  })
})
