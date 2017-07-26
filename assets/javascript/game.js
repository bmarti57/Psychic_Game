var computerLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;

document.onkeyup = function(event) {
    var userGuess = event.key;
    var computerGuess = computerLetter[Math.floor(Math.random() * computerLetter.length)]};

var userGuess = [];    

if (userGuess === computerGuess); {
	wins++;
} 

else if (userGuess.push({userGuess})) for(var i = 0; i = 10; i++);

else if (i = 10) {losses++};

var html =

"<p>wins: " + wins + "</p>" +
"<p>losses: " + losses + "</p>" +
"<p>Guesses Left: " + i + "</p>" +
"<p>Your guesses so far: " + userGuess + "</p>";

document.querySelector("#game").innerHTML = html;

