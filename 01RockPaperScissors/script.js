const computerChoiceDisplay = document.getElementById("computerChoice")
const userChoiceDisplay = document.getElementById("userChoice")
const resultDisplay = document.getElementById("result")
const possibleChoices = document.querySelectorAll("button")

let userChoice 
let computerChoice
let result

// emoji map
const emojiMap = {
    rock: "✊",
    paper: "✋",
    scissors: "✌️"
}

possibleChoices.forEach(possibleChoice => 
    possibleChoice.addEventListener("click", (e) => {
        userChoice = e.target.id
        userChoiceDisplay.innerHTML = `${emojiMap[userChoice]} ${userChoice}`
        generateComputerChoice()
        getResult()
    })
)

function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3) + 1

    if(randomNumber === 1){
        computerChoice = "rock"
    }
    if(randomNumber === 2){
        computerChoice = "paper"
    }
    if(randomNumber === 3){
        computerChoice = "scissors"
    }

    computerChoiceDisplay.innerHTML = `${emojiMap[computerChoice]} ${computerChoice}`
}

function getResult(){
    if(computerChoice === userChoice){
        result = "😐 It's a draw!"
    }
    else if(
        (computerChoice === "rock" && userChoice === "paper") ||
        (computerChoice === "paper" && userChoice === "scissors") ||
        (computerChoice === "scissors" && userChoice === "rock")
    ){
        result = "🎉 You win!"
    }
    else {
        result = "💀 You lost!"
    }

    resultDisplay.innerHTML = result
}
