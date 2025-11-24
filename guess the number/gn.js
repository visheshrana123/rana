let secretNumber = Math.floor(Math.random() * 100) + 1;
console.log("Secret Number:", secretNumber); // for debugging

function checkGuess() {
    let guess = Number(document.getElementById("guessInput").value);
    let message = document.getElementById("message");

    if (!guess) {
        message.textContent = "⚠️ Please enter a number!";
        return;
    }

    if (guess === secretNumber) {
        message.textContent = "🎉 Correct! You guessed the number!";
        document.getElementById("restartBtn").style.display = "block";
    } 
    else if (guess > secretNumber) {
        message.textContent = "📉 Too high! Try again.";
    } 
    else {
        message.textContent = "📈 Too low! Try again.";
    }
}

function restartGame() {
    secretNumber = Math.floor(Math.random() * 100) + 1;
    document.getElementById("message").textContent = "";
    document.getElementById("guessInput").value = "";
    document.getElementById("restartBtn").style.display = "none";
}