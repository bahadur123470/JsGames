const grid = document.querySelector(".grid")
const result = document.querySelector("#result")
const displayCurrentPlayer = document.querySelector("#current-player")

const rows = 6
const cols = 7
const totalSquares = rows * cols

let currentPlayer = 1
let squares = []

  // Create board dynamically
for (let i = 0; i < totalSquares; i++) {
    const square = document.createElement("div")
    grid.appendChild(square)
    squares.push(square)
}

  // Add bottom "taken" row
for (let i = totalSquares - cols; i < totalSquares; i++) {
    squares[i].classList.add("taken")
}

  // Generate winning combinations
let winningArrays = []

  // Horizontal wins
for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols - 3; c++) {
        let base = r * cols + c
        winningArrays.push([base, base + 1, base + 2, base + 3])
    }
}

  // Vertical wins
for (let r = 0; r < rows - 3; r++) {
    for (let c = 0; c < cols; c++) {
        let base = r * cols + c
        winningArrays.push([base, base + cols, base + cols * 2, base + cols * 3])
    }
}

  // Diagonal right (\)
for (let r = 0; r < rows - 3; r++) {
    for (let c = 0; c < cols - 3; c++) {
        let base = r * cols + c
        winningArrays.push([base, base + cols + 1, base + cols * 2 + 2, base + cols * 3 + 3])
}
}

  // Diagonal left (/)
for (let r = 0; r < rows - 3; r++) {
    for (let c = 3; c < cols; c++) {
        let base = r * cols + c
        winningArrays.push([base, base + cols - 1, base + cols * 2 - 2, base + cols * 3 - 3])
    }
}

  // Check board for a win
function checkBoard() {
    for (let combo of winningArrays) {
        const [a, b, c, d] = combo
        if (
            squares[a].classList.contains("player-one") &&
            squares[b].classList.contains("player-one") &&
            squares[c].classList.contains("player-one") &&
            squares[d].classList.contains("player-one")
        ) {
            result.innerHTML = "🎉 Player One Wins!"
            result.style.color = "red"
            disableBoard()
            return
        }
        if (
            squares[a].classList.contains("player-two") &&
            squares[b].classList.contains("player-two") &&
            squares[c].classList.contains("player-two") &&
            squares[d].classList.contains("player-two")
        ) {
            result.innerHTML = "🎉 Player Two Wins!"
            result.style.color = "blue"
            disableBoard()
            return
        }
    }
}

  // Disable clicks after win
function disableBoard() {
    squares.forEach(sq => sq.onclick = null)
}

  // Add click listeners
for (let i = 0; i < totalSquares - cols; i++) {
    squares[i].onclick = () => {
        if(
            squares[i + cols].classList.contains("taken") &&
            !squares[i].classList.contains("taken")
        ){
            squares[i].classList.add("taken")
            if (currentPlayer === 1) {
                squares[i].classList.add("player-one")
                currentPlayer = 2
            } else {
                squares[i].classList.add("player-two")
                currentPlayer = 1
            }
            displayCurrentPlayer.textContent = currentPlayer
        checkBoard()
        }
    }
}

