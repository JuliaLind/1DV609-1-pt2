import { describe, it, expect } from 'vitest'
import '../../src/js/components/poker-card'


describe('poker-card', () => {
  it('poker-card should be defined as a custom element', () => {
    expect(customElements.get('poker-card')).toBeDefined()
  })

  const parameters = [
    {
      testedAttribute: 'src',
      expected: './img/AH.svg',
    },
    {
      testedAttribute: 'alt',
      expected: 'A of hearts',
    }
  ]

  parameters.forEach(({ testedAttribute, expected }) => {
    it(`poker-card with suite hearts and rank A should have attribute ${testedAttribute} = ${expected}`, () => {
      const sut = document.createElement('poker-card')

      sut.setAttribute('rank', 'A')
      sut.setAttribute('suite', 'hearts')

      const actual = sut.shadowRoot.querySelector('img').getAttribute(testedAttribute)

      expect(actual).toBe(expected)
    })
  })
})