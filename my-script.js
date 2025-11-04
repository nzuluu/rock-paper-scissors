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