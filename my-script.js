let humanScore = 0;
let computerScore = 0;
let humanNum;
let computerNum;
let totalRound = 1;

//This functions randomly returns “rock”(0), “paper”(1) or “scissors”(2)
function getComputerChoice() {

    //This set the value from Math.random method to randomNum
    //// Expected output: 0, 1 or 2
    let randomNum = Math.floor(Math.random() * 3);

    if (randomNum == 0 ) {
        computerNum = 0;
    }
    else if (randomNum == 1) {
        computerNum = 1;
    }
    else {
        computerNum = 2;
    }
    return computerNum;
}

const result = document.querySelector("#result");

const rockBtn = document.querySelector("#rock");
rockBtn.addEventListener("click", (event) => {
    event.preventDefault();

    getComputerChoice()
    humanNum = 0;
    
});

const paperBtn = document.querySelector("#paper");
paperBtn.addEventListener("click", (event) => {
    event.preventDefault();

    getComputerChoice()
    humanNum = 1;
});

const scissorsBtn = document.querySelector("#scissors");
scissorsBtn.addEventListener("click", (event) => {
    event.preventDefault();
    
    getComputerChoice()
    humanNum = 2;
});

/*
        event.preventDefault();

        //Function to play the game
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
                result.textContent = "You lose! Paper beats Rock";
                computerScore++;
            }
            else if (humanNum == 0 && computerNum == 2) {
                result.textContent = "You win! Rock beats Scissors";
                humanScore++;
            }
            else if (humanNum == 1 && computerNum == 0) {
                result.textContent = "You win! Paper beats Rock";
                humanScore++;
            }
            else if (humanNum == 1 && computerNum == 2) {
                result.textContent = "You lose! Scissors beats Paper";
                computerScore++;
            } 
            else if (humanNum == 2 && computerNum == 0) {
                result.textContent = "You lose! Rock beats Scissors";
                computerScore++;
            } 
            else if (humanNum == 2 && computerNum == 1) {
                result.textContent = "You win! Scissors beats Paper";
                humanScore++;
            }
            else {
                result.textContent = "It's a draw!";
            }
            
            totalRound++;
        }

        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);

        if (totalRound > 5 ) {
            if (humanScore > computerScore) {
                endResult.textContent = "You are the winner!";
            }
            else {
                endResult.textContent = "The computer is the winner!";
            }
            container.appendChild(endResult);
        }
        result.focus();
    });
});

*/