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

let playerPoints = 0;
let computerPoints = 0;
let message;
let computerSelectionID;
let computerSelection;
const results = document.querySelector("#results");
const rockButton = document.querySelector("#rock");
const scissorsButton = document.querySelector("#scissors");
const paperButton = document.querySelector("#paper");

for (i = 0; i < 5; i++) {
    computerSelectionID = Math.floor(Math.random() * 3);
    switch(computerSelectionID) {
        case 0:
            computerSelection = "rock";
            break;
        case 1:
            computerSelection = "scissors";
            break;
        case 2:
            computerSelection = "paper";
            break;
    }
    results.textContent = message;
    if (message.substr(0,8) == "You Win!") {
        playerPoints++;
    } else if (message.substr(0,9) == "You Lose!") {
        computerPoints++;
    }
}

if (playerPoints > computerPoints) {
    results.textContent = "Congratulations, you won the game!";
} else if (playerPoints < computerPoints) {
    results.textContent = "YOU LOSE.";
} else {
    results.textContent = "It's a tie!";
}