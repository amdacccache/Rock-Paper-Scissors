const rock = document.getElementById('rock')
const paper = document.getElementById('paper')
const scissors = document.getElementById('scissors')
const myChoice = document.getElementById('my-choice')

const compRock = document.getElementById('computer-rock')
const compPaper = document.getElementById('computer-paper')
const compScissors = document.getElementById('computer-scissors')
const compChoice = document.getElementById('computer-choice')

const computerMoves = [ compRock, compPaper, compScissors ]

let computerMove =
  computerMoves[Math.floor(Math.random() * computerMoves.length)].alt
  
const computerChoice = document.getElementById('computer-choice')

let humanMove 

rock.addEventListener('click', () => {
  paper.style.display = 'none'
  scissors.style.display = 'none'
  humanMove = 'rock'
  myChoice.innerHTML = "You chose: " + humanMove
  randomCompChoice()
 
})

paper.addEventListener('click', () => {
  rock.style.display = 'none'
  scissors.style.display = 'none'
  humanMove = 'paper'
  myChoice.innerHTML = "You chose: " + humanMove
  randomCompChoice()
 
})

scissors.addEventListener('click', () => {
  rock.style.display = 'none'
  paper.style.display = 'none'
  humanMove = 'scissors'
  myChoice.innerHTML = "You chose: " + humanMove
  randomCompChoice()

 })

function randomCompChoice() {
  let elementToShow = document.getElementById(`computer-${computerMove}`)
  elementToShow.classList.remove('hide')
  computerChoice.innerHTML = 'Computer chose: ' + computerMove
  whoWon()
}

const whatBeatsWhat = {
  rock: 'scissors',
  paper: 'rock',
  scissors: 'paper'
}

function getWinningMove(move1, move2) {
  if (move1 === move2){
    return null
  } else if (whatBeatsWhat[move1] ===  move2){
    return move1
  } else {
    return move2
  }
}

const gameOver = document.getElementById('who-won')


function whoWon() {
  const winner = getWinningMove(humanMove, computerMove)
  if (winner) {
    if (winner === humanMove){
			gameOver.style.color = "blue"
      gameOver.innerHTML = humanMove + " beats " + computerMove + ". You win!"
    } else {
			gameOver.style.color = "maroon"
      gameOver.innerHTML = computerMove + " beats " + humanMove + ". You Lose"
    }
  } else {
    gameOver.innerHTML = "It's a tie!"
  }
  document.getElementById('reset').classList.remove('hide')
}

document.getElementById('reset').addEventListener('click', () => {
  window.location.reload()
})