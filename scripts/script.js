let playerPoints = 0;
let computerPoints = 0;
let computerSelectionID;
let computerSelection;
let playerSelection;
const results = document.querySelector("#results");
const rockButton = document.querySelector("#rock");
const scissorsButton = document.querySelector("#scissors");
const paperButton = document.querySelector("#paper");
const playerImage = document.querySelector("#playerImage");
const computerImage = document.querySelector("#computerImage");
const playerScoreText = document.querySelector("#playerScoreText");
const computerScoreText = document.querySelector("#computerScoreText");
const winnerImage = document.querySelector("#winnerImage");
const resultsText = document.querySelector("#resultsText");

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

    displayImages(playerSelection, computerSelection);
    
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
        playerScoreText.textContent = `Player Score: ${playerPoints}`;
    } else if (resultsString.substr(0,9) == "You Lose!") {
        computerPoints++;
        computerScoreText.textContent = `Computer Score: ${computerPoints}`;
    } 
}

function displayWinningMessage(playerPoints, computerPoints) {
    const finalResults = document.querySelector("#finalResults");
    if (playerPoints > computerPoints) {
        resultsText.textContent = "Congratulations, you won the game!";
        finalResults.textContent = "Winner: Player";
        winnerImage.setAttribute("src", "images/player.jpg");
    } else if (playerPoints < computerPoints) {
        resultsText.textContent = "YOU LOSE.";
        finalResults.textContent = "Winner: Computer";
        winnerImage.setAttribute("src","images/computer.jpg");
    } else {
        results.textContent = "It's a tie!";
    }
    winnerImage.classList.add("winner_image");
}

function buttonPress(playerChoice) {
    if (playerPoints == 5 || computerPoints == 5) return;
    resultsText.textContent = playRound(playerChoice);
    addScore(resultsText.textContent);
    if (playerPoints == 5 || computerPoints == 5) {
        displayWinningMessage(playerPoints, computerPoints);
    }    
}


function displayImages(playerChoice, computerChoice) {

    switch (playerChoice) {
        case "rock":
            playerImage.setAttribute("src","images/rock.png");
            break;
        case "paper":
            playerImage.setAttribute("src","images/paper.jpg");
            break;
        case "scissors":
            playerImage.setAttribute("src","images/scissors.jpg");
            break;
    }

    switch (computerChoice) {
        case "rock":
            computerImage.setAttribute("src","images/rock.png");
            break;
        case "paper":
            computerImage.setAttribute("src","images/paper.jpg");
            break;
        case "scissors":
            computerImage.setAttribute("src","images/scissors.jpg");
            break;
    }

    playerImage.classList.add("round_image");
    computerImage.classList.add("round_image");
}

rockButton.addEventListener("click", () => {
    buttonPress("rock");
});

scissorsButton.addEventListener("click", () => {
    buttonPress("scissors");
});

paperButton.addEventListener("click", () => {
    buttonPress("paper");
});