const choices = ["rock", "paper", "scissor"];
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissor = document.querySelector("#scissor");
const result = document.querySelector("#result");

const humanScoreEl = document.querySelector("#human-score");
const computerScoreEl = document.querySelector("#computer-score");


let humanScore = 0;
let computerScore = 0;


const getResult = (player, computer) => {
  player = player.toLowerCase();
  let message;
  if (player === computer) {
    message = "It's draw !!";
  } else if (player === "rock" && computer === "paper") {
    message = "You lose ! Paper beats Rock";
      computerScore++;
  } else if(player === "paper" && computer === "scissor") {
    message = "You lose ! Scissor beats Paper";
      computerScore++;
  } else if (player === "scissor" && computer === "rock") {
  message = "You lose ! Rock beats Scissors";
  computerScore++;
} else {
    const capitalize = (word) => word[0].toUpperCase() + word.slice(1);
  message = `You win ! ${capitalize(player)} beats ${capitalize(computer)}`;
    humanScore++;
}
humanScoreEl.textContent = `Your score: ${humanScore}`;
computerScoreEl.textContent = `Computer score: ${computerScore}`;
result.textContent = message;
}
const resetButton = document.querySelector("#reset-button");

const disableButtons = () => {
  rock.disabled = true;
  paper.disabled = true;
  scissor.disabled = true;
  resetButton.style.display = "block";
}

resetButton.addEventListener("click", () => {
humanScore = 0;
computerScore = 0;
rock.disabled = false;
paper.disabled = false;
scissor.disabled = false;
resetButton.style.display = "none";
humanScoreEl.textContent = `Your score: 0`;
computerScoreEl.textContent = `Computer score: 0`;
result.textContent = "";
});

const playGame = () => {
  if (humanScore === 5) {
    result.textContent = "You win the Game!!";
    disableButtons();
  } else if (computerScore === 5) {
    result.textContent = "Computer win the Game!!";
    disableButtons();
  }
}


rock.addEventListener("click", () => {
const randomIndex = Math.floor(Math.random() * 3);
const computerChoice = choices[randomIndex];
getResult("rock", computerChoice);
playGame();
});

paper.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * 3);
  const computerChoice = choices[randomIndex];
  getResult("paper", computerChoice);
  playGame();
});

scissor.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * 3);
  const computerChoice = choices[randomIndex];
  getResult("scissor", computerChoice);
  playGame();
});

