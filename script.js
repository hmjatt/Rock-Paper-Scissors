function computerPlay() {

  let randomPossibility = ["ROCK", "PAPER", "SCISSORS"];

  let randomChoice = randomPossibility[Math.floor(Math.random() * randomPossibility.length)];

  return randomChoice;
}

function getPlayerSelection(a) {
  
  a = prompt("Select one between 'Rock', 'Paper' or 'Scissors'!!!").toUpperCase();
  
  return a;
}

function getComputerSelection(b) {

  b = computerPlay();

  return b;
}


function playSingleRound() {

  let computerScore = 0;
  let playerScore = 0;

  let playerSelection = getPlayerSelection();
  let computerSelection = getComputerSelection();

  console.log(playerSelection);
  console.log(computerSelection);


  if (playerSelection === computerSelection) {
      console.log("Select again");
  } else if (playerSelection === "ROCK" && computerSelection === "PAPER") {
      console.log("You Lose!, Paper covered the Rock");
      computerScore++;
  } else if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {
      console.log("You Win!!!, Rock broke the Scissors");
      playerScore++;
  } else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
      console.log("You Win!!!, Paper covered Rock");
      playerScore++;
  } else if (playerSelection === "PAPER" && computerSelection === "SCISSORS") {
      console.log("You Lose!, Scissors cut the Paper");
      computerScore++;
  } else if (playerSelection === "SCISSORS" && computerSelection === "ROCK") {
      console.log("You Lose!, Rock broke the Scissors");
      computerScore++;
  } else if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {
    console.log("You Win!!!, Scissors cut the Paper");
    playerScore++;
  } else {
      console.log("Select one between 'Rock', 'Paper' or 'Scissors'!!!");
  }

  console.log(playerScore, computerScore);
  return
}

function getScore() {
 
}

function game() {
  for (let i = 0; i < 5; i ++){
    i = playSingleRound();
  }
}

game();
