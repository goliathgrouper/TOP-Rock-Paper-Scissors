

function getComputerChoice() {
    let randNum = Math.floor(Math.random() * 3) + 1;
    switch (randNum) {
        case 1:
            return 'Rock';
        case 2:
            return 'Paper';
        case 3:
            return 'Scissors';
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase();
    // Account for every playerSelection and computerSelection
    switch (playerSelection) {
        case 'ROCK':
            switch (computerSelection) {
                case 'Rock':
                    return 'It\'s a tie.';
                case 'Paper':
                    return 'You Lose! Paper beats Rock';
                case 'Scissors':
                    return 'You won! Rock beats Scissors!';
            }
        case 'PAPER':
            switch (computerSelection) {
                case 'Rock':
                    return 'You won! Paper beats Rock!';
                case 'Paper':
                    return 'It\'s a tie.';
                case 'Scissors':
                    return 'You Lose! Scissors beat Paper';
            }
        case 'SCISSORS':
            switch (computerSelection) {
                case 'Rock':
                    return 'You Lose! Rock beats Scissors';
                case 'Paper':
                    return 'You won! Scissors beat Paper!';
                case 'Scissors':
                    return 'It\s a tie';
            }
    }
}



let compScore = 0;
let playerScore = 0;

const btns = document.querySelector('#container');
const results = document.querySelector('#results');
const score = document.querySelector('#score');

function game(event) {
    let playerChoice = event.target.textContent;
    let computerChoice = getComputerChoice();
    let round = playRound(playerChoice, computerChoice);
    results.textContent = round;
    if (round.charAt(4) === 'L') {
        compScore++;
    } else if (round.charAt(4) === 'w') {
        playerScore++;
    }
    score.textContent = `Computer: ${compScore}; Player: ${playerScore}`;
    if (compScore >= 5 || playerScore >= 5) {
        if (compScore > playerScore) {
            results.textContent = 'You lost this war and now machines dominate humanity :(';
        } else {
            results.textContent = 'You won this war!! Humans are awesome AHAHA';
        }
        btns.removeEventListener('click', game);
    }
}

btns.addEventListener('click', game);