import { describe, it, expect } from 'vitest'
import '../src/components/poker-card'


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
})