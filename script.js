const square = document.querySelectorAll('.square')
const mole = document.querySelectorAll('.mole')
const timeLeft = document.querySelector('#time-left')
let score = document.querySelector('#score')
console.log("hello")

let result = 0

function randomSquare () {
    square.forEach(className => {
        className.classList.remove('mole')
    })

    let randomPosition = square[Math.floor(Math.random() * 9)]
    randomPosition.classList.add('mole')

    //assign the id of the randomPosition to the hitPosition to use later
    let hitPosition = randomPosition
}

square.forEach(id => {
    id.addEventListener('mouseup', () => {
        if(id.id === hitPosition) {
            result = result + 1
            score.textContent = result
        }
    })
})

function moveMole () {
    let timerId = null
    timerId = setInterval(randomSquare, 1000)
}

