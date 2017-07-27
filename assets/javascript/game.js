var computerLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guessesLeft = 10;
var yourGuessesSoFar = []

document.onkeyup = function(event) {
    var userGuess = event.key;
    var computerGuess = computerLetter[Math.floor(Math.random() * 
      computerLetter.length)];
  		console.log("Wins: " + wins + " Losses: " + losses + " GuessesLeft: " + guessesLeft + " Your guesses so far: " + yourGuessesSoFar + " Computer picked: " + computerGuess);


	if (userGuess === computerGuess) {
	    wins++;
		guessesLeft = 10;
		yourGuessesSoFar = [];
 		var computerGuess = computerLetter[Math.floor(Math.random() * 
      	computerLetter.length)];
  		console.log("Wins: " + wins + " Losses: " + losses + " GuessesLeft: " + guessesLeft + " Your guesses so far: " + yourGuessesSoFar + " Computer picked: " + computerGuess);
  		}

  	if (userGuess !== computerGuess){
  		yourGuessesSoFar.push(userGuess);
  		guessesLeft--;
  	}	
	
	if (guessesLeft === 0) {
		losses++;
		guessesLeft = 10;
		yourGuessesSoFar = [];
 		var computerGuess = computerLetter[Math.floor(Math.random() * 
      	computerLetter.length)];
  		console.log("Wins: " + wins + " Losses: " + losses + " GuessesLeft: " + guessesLeft + " Your guesses so far: " + yourGuessesSoFar + " Computer picked: " + computerGuess);
  		}
	


	var html =
	"<p><h1>The Psychic Game</h1></p>" + 
	"<p><h4>Guess what letter I'm thinking of</h4></p>" +
	"<p>wins: " + wins + "</p>" +
	"<p>losses: " + losses + "</p>" +
	"<p>Guesses Left: " + guessesLeft + "</p>" +
	"<p>Your guesses so far: " + yourGuessesSoFar + "</p>";

	document.querySelector("#game").innerHTML = html;
    
}//document.onkeyup