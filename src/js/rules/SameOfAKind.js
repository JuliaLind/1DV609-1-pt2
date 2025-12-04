export class SameOfAKind {
  constructor() {
    if (new.target === SameOfAKind) {
      throw new Error('SameOfAKind is an abstract class')
    }
  }
}