let humanScore = 0;
let computerScore = 0;
let ties = 0;

const results = document.querySelector("#results");
const newGame = document.querySelector("#new-game");
const btns = document.querySelectorAll("button");
btns.forEach(btn => {
    btn.addEventListener("click", function () {
        const choice = btn.id;
        playRound(choice, getComputerChoice());
        
        const runningResults = `Your current score = ${humanScore}\nComputer's current score = ${computerScore}\nTies = ${ties}`;
        results.innerText = runningResults;
        
        let message = "";
        if (humanScore === 5) {
            message = "You win!!";
            humanScore = 0;
            computerScore = 0;
            ties = 0;
        } else if (computerScore === 5) {
            message = "Computer wins!!";
            humanScore = 0;
            computerScore = 0;
            ties = 0;
        }

        if (message) {
            alert(message);
            newGameBtn = document.createElement("button");
            newGameBtn.textContent = "Start a new game?";

            newGameBtn.addEventListener("click", () => {
                window.location.reload();
            });

            newGame.appendChild(newGameBtn);
        }
    });
});

function playRound(userChoice, computerChoice) {
    if (
        computerChoice == 'rock' && userChoice == 'paper' ||
        computerChoice == 'paper' && userChoice == 'scissors' ||
        computerChoice == 'scissors' && userChoice == 'rock'
    ) {
        humanScore++;
    }
    else if (
        computerChoice == 'paper' && userChoice == 'rock' ||
        computerChoice == 'scissors' && userChoice == 'paper' ||
        computerChoice == 'rock' && userChoice == 'scissors'
    ) {
        computerScore++;
    } else if (computerChoice == userChoice) {
        ties++;
    }
}

function getComputerChoice() {
    randomNumber = Math.round(Math.random() * 2);

    if (randomNumber === 0)
        return 'rock';
    else if (randomNumber == 1)
        return 'paper';
    else if (randomNumber == 2)
        return 'scissors';
}
