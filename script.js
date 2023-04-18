// function to randomly make the computer choice for the game
function getComputerChoice() {
  const choices = ["rock", "paper", "scissor"]  // array with all the options to choose
  const index = Math.floor(Math.random() * choices.length)  // variable to store the index of the array that was chosen

  return choices[index];  // returns the value using the index to show the string in the position of the array
}

// function to check who won the round, giving the score and returning a string with the winner
function playRound(computerChoice, playerChoice) {
  if (playerChoice === "rock" && computerChoice === "scissors" || playerChoice === "paper" && computerChoice === "rock" || playerChoice === "scissor" && computerChoice === "paper") {
    playerScore++;
    return console.log("You won a point!")
  } else if (playerChoice === computerChoice) {
    drawScore++;
    return console.log("It was a draw!")
  } else {
    computerScore++;
    return console.log("Computer won a point!")
  }
}

// function for the game
function game() {
  counter++;  // counter to check how many times it was played
  const playerChoice = prompt("What's you choice? Rock, paper or scissor?").toLowerCase()  // prompt to get the players choice
  // and store it in a variable all in lower case
  const computerChoice = getComputerChoice() // stores the computer choice in a variable to be used

  console.log(`Player has chosen ${playerChoice}`)
  console.log(`Computer has chosen ${computerChoice}`)  // message in the console to know the choices made for the round
  playRound(computerChoice, playerChoice)  // uses the variables in the function to see who won
  console.log(`
  Scoreboard: 
  Player: ${playerScore} points.
  Computer: ${computerScore} points.
  Draws: ${drawScore}.
  `)  // actualized score

  // condition to check if the game has ended
  if (counter === 5) {
    endMessage();  // calls the function to give the final score
  }
}

// function to get the final message with the total score
function endMessage() {
  let message = (playerScore > computerScore) ? '\nPlayer won the game!' :
  (playerScore < computerScore) ? '\nComputer won the game!' :
    '\nThe game was a draw!';
  console.log(message);

  console.log(`
  Final scoreboard: 
  Player: ${playerScore} points.
  Computer: ${computerScore} points.
  Draws: ${drawScore}.
  `)  // actualized score
}

// Initialize all counters with a value of 0(zero)
let playerScore = 0;
let computerScore = 0;
let drawScore = 0;
let counter = 0;

// loop to play the game function 5 times
for (let i = 0; i < 5; i++) {
  game()
}