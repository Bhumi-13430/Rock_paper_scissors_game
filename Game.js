let userScore = 0;
let compScore = 0;
let rounds = 0;
let highScore = Number(localStorage.getItem("highScore")) || 0;
const maxRounds = 10;

const msg = document.querySelector("#msg");
const choices = document.querySelectorAll(".choice");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const highScorePara = document.querySelector("#high-score");
highScorePara.innerText = highScore;
const resetBtn = document.querySelector("#reset");
const playAgainBtn = document.querySelector("#play-again");


const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};
const drawGame = () => {
    msg.innerText = "It's a Draw 🤝, Play again";
    msg.style.backgroundColor = "blue";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `YOU WON!👑 Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `YOU LOST!👎 ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
    if (rounds >= maxRounds) {
        return;
    }
    rounds++;
    const compChoice = genCompChoice();
    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }

        showWinner(userWin, userChoice, compChoice);
    }
    if (rounds === maxRounds) {
        endGame();
    }
};

const endGame = () => {
    if (userScore > highScore) {
        highScore = userScore;
        highScorePara.innerText = highScore;
        localStorage.setItem("highScore", highScore);

    }
    msg.innerText = `Game Over! Winner is ${userScore > compScore ? "You" : "Computer"}! Final Score: ${userScore} - ${compScore}`;
    if (userScore > compScore) {
        msg.style.backgroundColor = "green"
    } else if (userScore == compScore) {
        msg.style.backgroundColor = "blue"
    } else {
        msg.style.backgroundColor = "red"
    }
};

const playAgain = () => {
    userScore = 0;
    compScore = 0;
    rounds = 0;

    userScorePara.innerText = 0;
    compScorePara.innerText = 0;

    msg.innerText = "It's your Turn, Play!";
    msg.style.backgroundColor = "#9b2226";
};

const resetGame = () => {
    const confirmReset = confirm(
        "Are you sure you want to reset the game?\n\n" +
        "This will reset your highscore , current score, and rounds."
    );
    if (!confirmReset) {
        return;
    } else {
        userScore = 0;
        compScore = 0;
        rounds = 0;
        highScore = 0;

        userScorePara.innerText = 0;
        compScorePara.innerText = 0;
        highScorePara.innerText = 0;
        localStorage.removeItem("highScore");


        msg.innerText = "It's your Turn, Play!";
        msg.style.backgroundColor = "#9b2226";
    }
};


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

playAgainBtn.addEventListener("click", playAgain);
resetBtn.addEventListener("click", resetGame);