function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    
    if (playerSelection == computerSelection) {
        return "It's a tie!";
    }
    else {
        switch(playerSelection) {
            case "rock":
                return (computerSelection == "scissors") ? "You Win! Rock beats Scissors" : "You Lose! Paper beats Rock";
                break;
            case "paper":
                return (computerSelection == "scissors") ? "You Lose! Scissors beats Paper" : "You Win! Paper beats Rock";
                break;
            case "scissors":
                return (computerSelection == "paper") ? "You Win! Scissors beats Paper" : "You Lose! Rock beats Scissors";
                break;
            default:
                return "Invalid input. No one wins.";
        }
    }
}

function game() {
    let playerPoints = 0;
    let computerPoints = 0;
    let message;

    for (i = 0; i < 5; i++) {
        message = playRound(prompt("Rock, Paper, or Scissors?"));
        console.log(message);
        if (message.substr(0,8) == "You Win!") {
            playerPoints++;
        } else {
            computerPoints++;
        }
    }

    if (playerPoints > computerPoints) {
        console.log("Congratulations, you won the game!");
    } else if (playerPoints < computerPoints) {
        console.log("YOU LOSE.");
    } else {
        console.log("It's a tie!");
    }
}

game();