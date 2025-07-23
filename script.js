function getComputerChoice() {
    randomNumber = Math.round((((Math.random() * 20)) + 1) / 10);

    if (randomNumber === 0)
        return 'Rock';
    else if (randomNumber == 1)
        return 'Paper';
    else if (randomNumber == 2)
        return 'Scissors';
}

function getHumanChoice() {
    input = prompt('Rock, paper, scissors? ');
    return input;
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let ties = 0;

    function playRound(humanChoice, computerChoice) {
        let humanChoiceLower = humanChoice.toLowerCase();
        let computerChoiceLower = computerChoice.toLowerCase();

        if (computerChoiceLower == 'rock' && humanChoiceLower == 'paper') {
            humanScore++;
            console.log(`You win! ${humanChoiceLower} beats ${computerChoiceLower}`);
        } else if (computerChoiceLower == 'paper' && humanChoiceLower == 'scissors') {
            humanScore++;
            console.log(`You win! ${humanChoiceLower} beats ${computerChoiceLower}`);
        } else if (computerChoiceLower == 'scissors' && humanChoiceLower == 'rock') {
            humanScore++;
            console.log(`You win! ${humanChoiceLower} beats ${computerChoiceLower}`);
        } else if (computerChoiceLower == 'paper' && humanChoiceLower == 'rock') {
            computerScore++;
            console.log(`You lose! ${computerChoiceLower} beats ${humanChoiceLower}`);
        } else if (computerChoiceLower == 'scissors' && humanChoiceLower == 'paper') {
            computerScore++;
            console.log(`You lose! ${computerChoiceLower} beats ${humanChoiceLower}`);
        } else if (computerChoiceLower == 'rock' && humanChoiceLower == 'scissors') {
            computerScore++;
            console.log(`You lose! ${computerChoiceLower} beats ${humanChoiceLower}`);
        } else if (computerChoiceLower == humanChoiceLower) {
            console.log(`A tie!`);
            ties++;
        }
    }
    
    for (let i = 0; i <= 4; i++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }

    let message;

    if (humanScore == computerScore) {
        message = alert(`A tie!!\nYour score: ${humanScore}\nComputer score: ${computerScore}\nTies: ${ties}`);
    } else if (humanScore > computerScore) {
        message = alert(`You win!!\nYour score: ${humanScore}\nComputer score: ${computerScore}\nTies: ${ties}`);
    } else {
        message = alert(`You lose!!\nYour score: ${humanScore}\nComputer score: ${computerScore}\nTies: ${ties}`);
    }
    return message;
}

playGame();
