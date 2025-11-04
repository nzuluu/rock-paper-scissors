let humanScore = 0;
let computerScore = 0;

//This functions randomly returns “rock”, “paper” or “scissors”
function getComputerChoice() {

    let computerChoice;

    //This set the value from Math.random method to randomNum
    //// Expected output: 0, 1 or 2
    let randomNum = Math.floor(Math.random() * 3);

    if (randomNum == 0 ) {
        computerChoice = "rock";
    }
    else if (randomNum == 1) {
        computerChoice = "paper";
    }
    else {
        computerChoice = "scissors";
    }
    return computerChoice;
}

//Function to get user input and return it
function getHumanChoice() {
    
let userInput = prompt('rock, paper or scissors');

return userInput.toLowerCase();

}

function playGame() {

for (let i = 0; i < 5; i++) {
    function playRound(humanChoice, computerChoice) {

        let humanNum;
        let computerNum;

        switch(humanChoice) {
            case "rock":
                humanNum = 0;
                break;
            case "paper":
                humanNum = 1;
                break; 
            case "scissors":
                humanNum = 2;
                break; 
        }
        
        switch(computerChoice) {
            case "rock":
                computerNum = 0;
                break;
            case "paper":
                computerNum = 1;
                break; 
            case "scissors":
                computerNum = 2;
                break; 
        }

        if (humanNum == 0 && computerNum == 1) {
            console.log("You lose! Paper beats Rock");
            computerScore++;
        }
        else if (humanNum == 0 && computerNum == 2) {
            console.log("You win! Rock beats Scissors");
            humanScore++;
        }
        else if (humanNum == 1 && computerNum == 0) {
            console.log("You win! Paper beats Rock");
            humanScore++;
        }
        else if (humanNum == 1 && computerNum == 2) {
            console.log("You lose! Scissors beats Paper");
            computerScore++;
        } 
        else if (humanNum == 2 && computerNum == 0) {
            console.log("You lose! Rock beats Scissors");
            computerScore++;
        } 
        else if (humanNum == 2 && computerNum == 1) {
            console.log("You win! Scissors beats Paper");
            humanScore++;
        }
        else {
            console.log("It's a draw!")
        }
        
    }

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
}

}