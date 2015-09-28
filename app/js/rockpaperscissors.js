////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
var playerMove = move || getInput();
    return playerMove;
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
var computerMove = move || randomPlay();
    return computerMove;
}

function getWinner(playerMove,computerMove) {
    var winner;
    var x = "rock"
    var y = "paper"
    var z = "scissors"
    if (playerMove === x && computerMove === y) {
    winner = "computer"
    console.log("Computer wins!");
  } else if (playerMove === x && computerMove === z) {
    winner = "player"
    console.log("Player wins!");
  } else if (playerMove === y && computerMove === x) {
    winner = "player"
    console.log("Player wins!");
  } else if (playerMove === y && computerMove === z) {
    winner = "computer"
    console.log("Computer wins!");
  } else if (playerMove === z && computerMove === x) {
    winner = "computer"
    console.log("Computer wins!");
  } else if (playerMove === z && computerMove === y) {
    winner = "player"
    console.log("Player wins!");
  } else {
    result("tie!")
  }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    var playerMove = '';
    var computerMove = '';
        // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
        /* YOUR CODE HERE */
        while (playerWins < 5 && computerWins < 5) {
            playerMove = getPlayerMove();
            computerMove = getComputerMove();
            var winner = getWinner(playerMove, computerMove);
            switch (winner) {
                case 'computer':
                    console.log('you lose');
                    computerWins++;
                    break;
                case 'player':
                    console.log('you win');
                    playerWins++;
                    break;
                case 'tie':
                    console.log('its a Tie!');
                    break;
                default:
                    console.log('something is wrong2');
            }
            var result = 'current score, computer:' + computerWins + ' player:' + playerWins;
            console.log(result);
}
    return [playerWins, computerWins];
}
