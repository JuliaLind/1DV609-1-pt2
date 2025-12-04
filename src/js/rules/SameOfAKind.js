export class SameOfAKind {
  #rankCount

  constructor(rankCount) {
    if (new.target === SameOfAKind) {
      throw new Error('SameOfAKind is an abstract class')
    }

    this.#setRankCount(rankCount)
  }

  #setRankCount(rankCount) {
    this.#rankCount = rankCount
  }

  test(line) {
    const rankFrequencies = line.getRankFrequencies()
    const frequencies = Object.values(rankFrequencies)

    for (const frequency of frequencies) {
      if (frequency >= this.#rankCount) {
        return true
      }
    }
  }
}