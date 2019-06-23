// Array of possible choices
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Variables
var winCounter = 0;
var lossCounter = 0;
var guessesLeft = 9;
var guessesSoFar = [];
var cpuGuesses = [];

// Computer Random Letter
window.onload = function()  {
var cpuGuess = letters[Math.floor(Math.random() * 26)];
cpuGuesses.push(cpuGuess);
console.log("CPU guess is: " + cpuGuess[0]);
}

// Game Code
document.onkeyup = function(event)  {
  var userGuess = event.key;
  guessesSoFar.push(userGuess);
  console.log("User guess is: " + userGuess);

  if((userGuess === cpuGuesses[0]) && (guessesLeft > 0)) {
    winCounter++;
    guessesLeft = 9;
    guessesSoFar.length = 0;
    cpuGuesses.length = 0;
    var cpuGuess = letters[Math.floor(Math.random() * 26)];
    cpuGuesses.push(cpuGuess);
    console.log("CPU guess is: " + cpuGuess[0]);
  }

  else if((userGuess !== cpuGuesses[0]) && (guessesLeft > 0))  {
    guessesLeft = guessesLeft-1;
  }

  else {
    lossCounter++;
    guessesLeft = 9;
    guessesSoFar.length = 0;
    cpuGuesses.length = 0;
    var cpuGuess = letters[Math.floor(Math.random() * 26)];
    cpuGuesses.push(cpuGuess);
    console.log("CPU guess is: " + cpuGuess[0]);
  }

  var html =  "<p>Wins: " + winCounter + "</p>" +
              "<p>Losses: " + lossCounter + "</p>" +
              "<p>Guesses Left: " + guessesLeft + "</p>" +
              "<p>Your Guesses So Far: " + guessesSoFar + "</p>";
 
document.querySelector("#game").innerHTML = html;
}