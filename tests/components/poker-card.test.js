import { describe, it, expect, vi } from 'vitest'
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

  it('Image name for the card should be "[Rank][First char in Suite]"', () => {
    const expectedHref = 'mocked-url-value.svg'
    const urlSpy = vi.spyOn(global, 'URL')

    urlSpy.mockImplementation(function (path) {
      this.href = expectedHref
      if (path.includes('AH')) {
        this.href = expectedHref
      } else {
        this.href = 'incorrect'
      }
    })

    const sut = document.createElement('poker-card')

    sut.setAttribute('rank', 'A')
    sut.setAttribute('suite', 'Hearts')

    const src = sut.shadowRoot.querySelector('img').getAttribute('src')
    expect(src).toBe(expectedHref)

    urlSpy.mockRestore()
  })
})
