function playRound(playerSelection) {
    let computerSelection;

    playerSelection = playerSelection.toLowerCase();
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

function addScore(resultsString) {
    if (resultsString.substr(0,8) == "You Win!") {
        playerPoints++;
        const playerScore = document.querySelector("#playerScore")
        playerScore.textContent = `Player Score: ${playerPoints}`;
    } else if (resultsString.substr(0,9) == "You Lose!") {
        computerPoints++;
        const computerScore = document.querySelector("#computerScore");
        computerScore.textContent = `Computer Score: ${computerPoints}`;
    }
}

function displayWinningMessage(playerPoints, computerPoints) {
    if (playerPoints > computerPoints) {
        results.textContent = "Congratulations, you won the game!";
    } else if (playerPoints < computerPoints) {
        results.textContent = "YOU LOSE.";
    } else {
        results.textContent = "It's a tie!";
    }
}

function buttonPress(playerChoice) {
    if (playerPoints == 5 || computerPoints == 5) return;
    results.textContent = playRound(playerChoice);
    addScore(results.textContent);
    if (playerPoints == 5 || computerPoints == 5) {
        displayWinningMessage(playerPoints, computerPoints);
    }    
}

let playerPoints = 0;
let computerPoints = 0;
let computerSelectionID;
let computerSelection;
let playerSelection;
const results = document.querySelector("#results");
const rockButton = document.querySelector("#rock");
const scissorsButton = document.querySelector("#scissors");
const paperButton = document.querySelector("#paper");

rockButton.addEventListener("click", () => {
    buttonPress("rock");
});

scissorsButton.addEventListener("click", () => {
    buttonPress("scissors");
});

paperButton.addEventListener("click", () => {
    buttonPress("paper");
});