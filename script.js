let buttons = document.querySelectorAll(".btn");
let game = 0;
let playerScore = 0;
let computerScore = 0;

function playRound(player, computer) {
    game++;
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

function getComputerChoice() {
    const game = ["Rock", "Paper", "Scissors"];
    return game[Math.floor(Math.random() * game.length)];
}

buttons.forEach((button) =>
    button.addEventListener("click", function (e) {
        let clickedButton = e.target.innerText;
        let result = document.querySelector(".result");
        const computer = getComputerChoice();
        if (game < 5) result.innerHTML = "";
        playRound(clickedButton, computer);
        if (game === 5) {
            result.innerText =
                playerScore > computerScore
                    ? `Your score is ${playerScore} and the computer score is ${computerScore}, you win!`
                    : playerScore < computerScore
                        ? `Your score is ${playerScore} and the computer's score is ${computerScore}, you lose!`
                        : `Your score is ${playerScore} and the computer's is ${computerScore}, it's a tie.`;
            game = 0;
            playerScore = 0;
            computerScore = 0;
        }
    })
);
