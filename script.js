// JavaScript DOM selectors
const playerSelection = document.querySelectorAll(".btnGame");
const rounds = document.querySelector(".rounds");
const btnPlayAgain = document.querySelector(".btnPlayAgain")

// Initialize all counters and variables with a value of 0(zero)
let playerScore = 0;
let computerScore = 0;
let drawScore = 0;
let roundsCounter = 0;

// main game function
function playGame () {
  let playerChoice;
  playerSelection.forEach((selection) => {
    selection.addEventListener('click', () => {
      if (selection === btnOne) {
        playerChoice = 'odin';
      } else if (selection === btnTwo) {
        playerChoice = 'valkyrie'
      } else if (selection === btnThree) {
        playerChoice = 'warlord'
      }
    roundsCounter++;
    const computerChoice = getComputerChoice();
    changeComputerInfo(computerChoice);
    playRound(computerChoice, playerChoice);
    if (playerScore === 5 || computerScore === 5) { endGame(); };
    resetGame();
    })
  })
}

// function to get the computer choice randomly
function getComputerChoice() {
  const choices = ["odin", "valkyrie", "warlord"]  // array with all the options to choose
  const index = Math.floor(Math.random() * choices.length)  // variable to store the index of the array that was chosen

  return choices[index];// returns the value using the index to show the string in the position of the array
}

// function to change the screen infos on the computer choices
function changeComputerInfo(computerChoice) {
  var img = document.getElementById("enemy-img");
  const enemyChoice = document.querySelector(".enemy-choice");  

// take the computer choice and changes the image and text
  if (computerChoice === "odin") {
    img.src = "./images/odin.png";
    enemyChoice.innerText = "Odin"
  } else if (computerChoice === "valkyrie") {
    img.src = "./images/valkyrie.png";
    enemyChoice.innerText = "Valkyrie"
  } else {
    img.src = "./images/warlord.png";
    enemyChoice.innerText = "Warlord"
  }
}

// function to check who won the round, giving the score and returning a string with the winner
function playRound(computerChoice, playerChoice) {
  rounds.innerText = `Round: ${roundsCounter}`

// checks who wins and give the score to the right variable
  if ((playerChoice === "odin" && computerChoice === "valkyrie") || (playerChoice === "valkyrie" && computerChoice === "warlord") || (playerChoice === "warlord" && computerChoice === "odin")) {
    playerScore++;
  } else if (playerChoice === computerChoice) {
    drawScore++;
  } else {
    computerScore++;
  }

  const wins = document.querySelector('.wins');
  wins.innerText = `Your Wins: ${playerScore} | Enemy Wins: ${computerScore} | Draws: ${drawScore}`
}

// function for making final changes when the game ends
function endGame() {
  var img = document.getElementById("end-img");
  const message = document.querySelector(".end-message")

  // disable the game buttons after all rounds are played
  playerSelection.forEach((selection) => {
    selection.setAttribute('disabled', '');
  })

// changes the attributes of the PLAY AGAIN button to make it work
  btnPlayAgain.removeAttribute('disabled', '');
  btnPlayAgain.classList.add('on')

// see who won and change the buttons and messages
  if (playerScore === 5) {
    img.src = "./images/valhalla.png";
    img.style.border = "2px solid #FFD700"
    message.innerText = `You Won! You can go to Valhalla now!`
  } else if (computerScore === 5) {
    img.src = "./images/mead.png";
    img.style.border = "2px solid #bf0603"
    message.innerText = `You lost! Your enemy is commemorating!`
  }
}

// function to make the PLAY AGAIN button refresh the page
function resetGame() {
  btnPlayAgain.addEventListener('click', () => {
    window.location.reload();
  });
}

playGame();