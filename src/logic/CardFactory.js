
export class CardFactory {
    createCard(suite, rank) {
        const card = document.createElement('poker-card')
        card.setAttribute('suite', suite)
        card.setAttribute('rank', rank)
        return card
    }
}