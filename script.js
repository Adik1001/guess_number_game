let target, maxGuesses, attempts, max;

function startGame() {
  max = parseInt(document.getElementById("maxNumber").value);
  if (!max || max <= 1) return alert("Enter a number greater than 1!");

  target = Math.floor(Math.random() * max) + 1;
  maxGuesses = Math.floor(Math.log2(max)) + 1;
  attempts = 0;

  document.querySelector(".game").style.display = "block";
  document.getElementById("info").textContent = `Guess a number between 1 and ${max}`;
  document.getElementById("attemptsLeft").textContent = `Attempts left: ${maxGuesses}`;
  document.getElementById("message").textContent = "";
  document.getElementById("feedbackImage").src = "";
}

function makeGuess() {
  const guess = parseInt(document.getElementById("guessInput").value);
  if (!guess) return;

  attempts++;

  if (guess === target) {
    document.getElementById("message").textContent = "🎉 Correct! You did a great job!";
    document.getElementById("feedbackImage").src = "https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif";
    document.getElementById("attemptsLeft").textContent = "";
  } else if (attempts >= maxGuesses) {
    document.getElementById("message").textContent = `❌ Oh no! The number was ${target}. Try again!`;
    document.getElementById("feedbackImage").src = "https://media.giphy.com/media/3oz8xKaR836UJOYeOc/giphy.gif";
    document.getElementById("attemptsLeft").textContent = "";
  } else {
    const msg = guess < target ? "📉 Too low!" : "📈 Too high!";
    document.getElementById("message").textContent = msg;
    document.getElementById("feedbackImage").src = "https://media.giphy.com/media/xT5LMQ9yo3hzpFz3Ac/giphy.gif";
    document.getElementById("attemptsLeft").textContent = `Attempts left: ${maxGuesses - attempts}`;
  }
}
