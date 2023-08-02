
    // Function to get a random number between min (inclusive) and max (inclusive)
function getRandomDice() { 
  var randomNum = Math.floor(Math.random() * 6) + 1; 
  return "./images/dice" + randomNum + ".png"; 
} 

var dice1 = document.querySelector(".img1"); 
var dice2 = document.querySelector(".img2"); 

dice1.src = getRandomDice(); 
dice2.src = getRandomDice(); 

// Function to get the dice number from the dice image URL
function getDiceNumberFromURL(url) {
  const regex = /dice(\d+)\.png/;
  const match = url.match(regex);
  if (match) {
    return parseInt(match[1]);
  }
  return null;
}

// Function to determine the winner or draw
function determineWinner() {
  const dice1Value = getDiceNumberFromURL(dice1.src);
  const dice2Value = getDiceNumberFromURL(dice2.src);

  if (dice1Value > dice2Value) {
    return "Player 1 Wins!🚩";
  } else if (dice2Value > dice1Value) {
    return "🚩Player 2 Wins!";
  } else {
    return "Draw!";
  }
}

// Event listener to roll dice when the page is loaded (refreshed)
window.addEventListener('load', function() {
  dice1.src = getRandomDice();
  dice2.src = getRandomDice();

  // Determine the winner and update the <h1> with the winner message
  winnerMessage = determineWinner();
  document.getElementById('resultText').innerHTML = winnerMessage;
});
