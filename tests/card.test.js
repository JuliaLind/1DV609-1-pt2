import { describe, it, expect } from 'vitest'


describe('Poker-card', () => {
  it('Create a poker card OK', async () => {
    const sut = document.createElement('poker-card')
    sut.setAttribute('rank', 'A')
    sut.setAttribute('suit', 'hearts')
    
    expect(sut.getAttribute('rank')).toBe('A')
    expect(sut.getAttribute('suit')).toBe('hearts')
  })
})