
var playerScore = 0;
var computerScore = 0;
var playerSelection;


function getComputerChoice() {
    var possibleChoices=["rock", "paper", "scissors"];
    return possibleChoices[Math.floor(Math.random()*possibleChoices.length)];
}

function game() {

    for (let i = 5; i >= 0; i--) {
        playerSelection="paper";
        computerSelection="paper";
        console.log(playRound(playerSelection,computerSelection));
        console.log("Score - You: "+playerScore+", Computer: "+computerScore+"; games left: "+i)
     }
}

function playRound(playerSelection, computerSelection) {
    playerSelection=prompt("Enter rock, paper or scissors")
    computerSelection = getComputerChoice();
    if (playerSelection.toLowerCase() === "rock") {
        if (computerSelection === "paper") {
            computerScore++
            return "You lost :( "+computerSelection+" beats "+playerSelection+".";
        } else if (computerSelection === "rock") {
            return "It's a draw!"
        } else {
            playerScore++;
            return "You win! "+playerSelection+" beats "+computerSelection+"."
        }
    } else if (playerSelection.toLowerCase() === "paper") {
        if (computerSelection === "scissors") {
            computerScore++
            return "You lost :( "+computerSelection+" beats "+playerSelection+".";
        } else if (computerSelection === "paper") {
            return "It's a draw!"
        } else {
            playerScore++;
            return "You win! "+playerSelection+" beats "+computerSelection+"."
        }
    } else if (playerSelection.toLowerCase() === "scissors") {
        if (computerSelection === "rock") {
            computerScore++
            return "You lost :( "+computerSelection+" beats "+playerSelection+".";
        } else if (computerSelection === "scissors") {
            return "It's a draw!"
        } else {
            playerScore++;
            return "You win! "+playerSelection+" beats "+computerSelection+"."
        }
    } else {
        console.log("That input wasn't valid. Please enter rock, paper or scissors")
        playRound(playerSelection, computerSelection) 
    }
}




game();