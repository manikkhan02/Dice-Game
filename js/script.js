let player1 = "Player 1";
let player2 = "Player 2";

function editNames() {
  player1 = prompt("Change Player1 name");
  player2 = prompt("Change player2 name");

  if (player1.length < 1 || player2.length < 1) {
    alert("Please enter a valid name !!");
  }

  document.querySelector("p.Player1").innerHTML = player1;
  document.querySelector("p.Player2").innerHTML = player2;
}

// Function to roll the dice
function rollTheDice() {
  let diceNum1 = document.querySelector(".img1");
  let diceNum2 = document.querySelector(".img2");

  diceNum1.setAttribute("src", "images/dice-game.gif");
  diceNum2.setAttribute("src", "images/dice-game.gif");

  let result = document.querySelector("h1");
  setTimeout(function () {
    let randomNumber1 = Math.floor(Math.random() * 6) + 1;
    let randomNumber2 = Math.floor(Math.random() * 6) + 1;

    /*document.querySelector(".img1").setAttribute("src",
			"images/dice-game" + randomNumber1 + ".gif");

		document.querySelector(".img2").setAttribute("src",
			"images/dice-game" + randomNumber2 + ".gif");
		*/
    diceNum1.setAttribute("src", "images/dice" + randomNumber1 + ".png");
    diceNum2.setAttribute("src", "images/dice" + randomNumber2 + ".png");
    if (randomNumber1 === randomNumber2) {
      result.innerHTML = "Draw!";
    } else if (randomNumber1 < randomNumber2) {
      result.innerHTML = player2 + " WINS!";
    } else {
      result.innerHTML = player1 + " WINS!";
    }
  }, 2500);
}
