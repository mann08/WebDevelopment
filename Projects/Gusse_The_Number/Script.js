// Generate random number between 1 and 10
let targetNumber = Math.floor(Math.random() * 10) + 1;

document.getElementById("submitBtn").addEventListener("click", function () {
  const guess = parseInt(document.getElementById("userGuess").value);

  if (isNaN(guess)) {
    alert("Please enter a valid number!");
    return;
  }

  // Logic for specific assignment alerts
  if (guess > targetNumber) {
    alert("OOPS! SORRY!!! TRY A SMALLER NUMBER.");
  } else if (guess < targetNumber) {
    alert("OOPS! SORRY!!! TRY A LARGER NUMBER.");
  } else {
    alert("CONGRATULATIONS! YOU GUESSED IT RIGHT!");
    // Reset the game after winning
    targetNumber = Math.floor(Math.random() * 10) + 1;
  }
});
