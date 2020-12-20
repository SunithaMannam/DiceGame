let activePlayer = "p1";
restart();
document.querySelector("#btn-roll").addEventListener("click", rollDice);
document.querySelector("#btn-hold").addEventListener("click", holdDice);
document.querySelector("#btn-new-game").addEventListener("click", restart);

document.getElementById("active-player").textContent =
  activePlayer === "p1" ? " Player 1" : "Player 2";

function restart() {
  activePlayer = "p1";
  document.getElementById("active-player").textContent = "Player 1";
  document.querySelector(`#p1-final-score`).textContent = 0;
  document.querySelector(`#p2-final-score`).textContent = 0;
  document.querySelector(`#p1-current-score`).textContent = 0;
  document.querySelector(`#p2-current-score`).textContent = 0;
}

function holdDice() {
  let curScore = document.querySelector(`#${activePlayer}-current-score`)
    .textContent;
  document.querySelector(`#${activePlayer}-final-score`).textContent =
    Number(document.querySelector(`#${activePlayer}-final-score`).textContent) +
    Number(curScore);

  document.querySelector(`#${activePlayer}-current-score`).textContent = 0;
  activePlayer = activePlayer === "p1" ? "p2" : "p1";

  document.getElementById("active-player").textContent =
    activePlayer === "p1" ? " Player 1" : "Player 2";
}

function rollDice() {
  let dice = Math.floor(Math.random() * 6 + 1);
  console.log(dice);
  let image = "";
  switch (dice) {
    case 1:
      image = "./images/dice1.png";
      break;
    case 2:
      image = "./images/dice2.png";
      break;
    case 3:
      image = "./images/dice3.png";
      break;
    case 4:
      image = "./images/dice4.png";
      break;
    case 5:
      image = "./images/dice5.png";
      break;
    case 6:
      image = "./images/dice6.png";
      break;
  }
  document.querySelector(
    "#dice"
  ).innerHTML = `<img width="50" height="50" src= ${image} alt="dice" >`;

  if (dice === 1) {
    document.querySelector(`#${activePlayer}-current-score`).textContent = 0;
    holdDice();
  } else {
    document.querySelector(`#${activePlayer}-current-score`).textContent =
      Number(
        document.querySelector(`#${activePlayer}-current-score`).textContent
      ) + dice;
  }

  // document.getElementById("active-player").textContent = activePlayer === "p1" ? " Player 1" : "Player 2";
}
