
const cardBlue = document.getElementById('card1')
const cardRed = document.getElementById('card2')
const cardGreen = document.getElementById('card3')
const cardYellow = document.getElementById('card4')

const pintar = (ele, color) => {
    ele.style.backgroundColor = color
}


cardBlue.addEventListener('click',() => {
    pintar(cardBlue,'black')
   
})

cardRed.addEventListener('click',() => {
    pintar(cardRed,'black')
   
})

cardGreen.addEventListener('click',() => {
    pintar(cardGreen,'black')
   
})

cardYellow.addEventListener('click',() => {
    pintar(cardYellow,'black')
   
})