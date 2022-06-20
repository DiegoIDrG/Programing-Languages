//parent element - div id = cards-container
//only for ids 
const cardsContainer = document.getElementById('cards-container')
//append element

const createCards = () =>{
    for (let i = 1; i < 6; i++){
        // create element
        const card = document.createElement('div')
        //add some content
        card.innerHTML = `<p>Element number ${i}</p>`
        // card styles - class
        card.classList.add('card')
        //append element
        cardsContainer.appendChild(card)
    }
}

createCards()


