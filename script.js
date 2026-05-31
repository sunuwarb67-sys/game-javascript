const choices = ["rock", "paper", "scissor"];
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissor = document.querySelector("#scissor");
const result = document.querySelector("#result");

const getResult = (player, computer) => {
  let message;
  if (player === computer) {
    message = "It's draw !!";
  } else if ((player === "rock" && computer === "paper") ||
(player === "paper" && computer === "scissor") ||
(player === "scissor" && computer === "rock")) {
  message = "You lose";
} else {
  message = "You win";
}
result.textContent = message;
}

rock.addEventListener("click", () => {
const randomIndex = Math.floor(Math.random() * 3);
const computerChoice = choices[randomIndex];
getResult("rock", computerChoice);
});

paper.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * 3);
  const computerChoice = choices[randomIndex];
  getResult("paper", computerChoice);
});

scissor.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * 3);
  const computerChoice = choices[randomIndex];
  getResult("scissor", computerChoice);
})