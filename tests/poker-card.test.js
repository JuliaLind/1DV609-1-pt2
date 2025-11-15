import { describe, it, expect } from 'vitest'


describe('poker-card', () => {
  it('poker-card should be defined as a custom element', () => {
    expect(customElements.get('poker-card')).toBeDefined()
  })
  // it('Create a poker card OK', async () => {
  //   const sut = document.createElement('poker-card')
    // sut.setAttribute('rank', 'A')
    // sut.setAttribute('suit', 'hearts')
    
    // expect(sut.getAttribute('rank')).toBe('A')
    // expect(sut.getAttribute('suit')).toBe('hearts')
  // })
})