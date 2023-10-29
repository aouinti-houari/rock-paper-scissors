let game = 0;
let playerScore = 0;
let computerScore = 0;

function playRound(player, computer) {
    if (player === computer) return "It's a tie!";
    else if (
        (player === "Rock" && computer === "Scissors") ||
        (player === "Scissors" && computer === "Paper") ||
        (player === "Paper" && computer === "Rock")
    ) {
        playerScore++;
        return `You win! ${player} beats ${computer}`;
    } else {
        computerScore++;
        return `You lose! ${computer} beats ${player}`;
    }
}

function playerChoice() {
    const user = prompt("Rock, Paper, or Scissors?");
    return user ? user.charAt(0).toUpperCase() + user.slice(1).toLowerCase() : null;
}

function getComputerChoice() {
    const game = ["Rock", "Paper", "Scissors"];
    return game[Math.floor(Math.random() * game.length)];
}

while (game < 5) {
    const player = playerChoice();
    const computer = getComputerChoice();
    console.log(playRound(player, computer));
    game++;
    if (game === 5) {
        console.log(playerScore > computerScore ?
            `You win, your score is ${playerScore} and the computer score is ${computerScore}` :
            playerScore < computerScore ?
                `You lose, your score is ${playerScore} and the computer score is ${computerScore}` :
                `It's a tie!, your score is ${playerScore} and the computer score is ${computerScore}`);
    }
}