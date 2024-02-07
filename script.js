

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

function game() {
    let count = 0;
    let round;
    let playersChoice;
    let computersChoice;
    let looses = 0;
    let wins = 0;


    playersChoice = prompt('What\'s your choice');
    computersChoice = getComputerChoice();
    round = playRound(playersChoice, computersChoice);
    if (round.charAt(4) === 'L') {
        looses++;
        count++;
    } else if (round.charAt(4) === 'w') {
        wins++;
        count++;
    }
    console.log(round);

    console.log(`Result: ${wins} wins to ${looses} looses`);
    if (wins > looses) {
        console.log('You win!');
    } else {
        console.log('You lose ):');
    }
}

