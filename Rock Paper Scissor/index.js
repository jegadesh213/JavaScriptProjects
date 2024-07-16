const options = ["ROCK","PAPER","SCISSOR"]
let playerDisplay = document.getElementById("playerChoice")
let computerDisplay = document.getElementById("computerChoice")
let resultDisplay = document.getElementById("result")
let playerScore = 0;
let computerScore = 0;

function game(element){
    let computerChoice = options[Math.floor(Math.random() * 3)];
    let result = "";

    if(element === computerChoice)
    {
        result = "IT'S A TIE!" 
    }
    else{
        switch(element){
            case "ROCK":
                result = (computerChoice === "SCISSOR") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "PAPER":
                result = (computerChoice === "ROCK") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "SCISSOR":
                result = (computerChoice === "PAPER") ? "YOU WIN!" : "YOU LOSE!";
                break;
        }
    }

    resultDisplay.classList.remove("greenText","redText","blueText");

    switch(result){
        case "YOU WIN!":
            resultDisplay.classList.add("greenText");
            playerScore++
            break;
        case "YOU LOSE!":
            resultDisplay.classList.add("redText");
            computerScore++;
            break;
        case "IT'S A TIE!":
            resultDisplay.classList.add("blueText");
            break;
    }

    playerDisplay.textContent = `PLAYER(${playerScore}) : ${element}`
    computerDisplay.textContent = `COMP(${computerScore}) : ${computerChoice}`
    resultDisplay.textContent = result
}