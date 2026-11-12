const computerHands = ['rock', 'paper', 'scissors']
let display = document.getElementById("display")

const shoot = (hand) => {
    let randNo = Math.floor(Math.random() * 3)
    let computer  = computerHands[randNo]

    if (hand === computer) {
        display.innerHTML = "match tie"
    } else if (
        hand === 'rock' && computer === 'scissors' ||
        hand === 'paper' && computer === 'rock' ||
        hand === 'scissors' && computer === 'paper' 
    ) {
        display.innerHTML = "you won"
    } else {
        display.innerHTML = "computer won"
    }

}