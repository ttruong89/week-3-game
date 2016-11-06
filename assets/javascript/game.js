// playerLetter = ""; computerChoice = ""(Math.floor(Math.random)*wordArray.length-1); 
// wordArray = [...]; Score = 0; guessesRemaining: 8; Guesses; wins = 0; losses = 0;

var wordArray = ["Turkey", "Gravy", "Pilgrims", "Thankful", "Giblets", "Mashed Potatoes", "Corn"];

var playerLetter = "";

var computerChoice = wordArray[(Math.floor(Math.random()*(wordArray.length-1)))]; 

var guessesRemaining = 8;

var guesses;

var incorrectGuesses;

var wins = 0;

var losses = 0;


// Will add on to score.  Will reset guessesRemaining back to 8.

function gameReset(win){
    document.getElementbyID("#wins");
    wins++;
    guessesRemaining = 8;
    guesses;
};

function gameReset(lose){
	document.getElementbyID("losses");
	losses++;
	guessesRemaining = 8;
};


// Event listener for "press any key" to play that triggers once clicked.
document.onkeyup = function(event) {
	return String.fromCharCode(event.keyCode);
}

// This will happen again once the game is reset.  

// Generate a random word from the wordArray.
function randomWord(){
	return computerChoice;
};

// Line for any random word picked by computer will appear.

// Player clicks on key for letter guesses.  
document.onkeyup = function (event) {
	var playerLetter = String.fromCharCode(keystroke.keyCode).toUpperCase();
}
// Require that the key is alpha.  An alert popup saying, only letters can be used.
	

// As player clicks letters, guessesRemaining will countdown.  

// Letters of the randomWord will appear as they are correct.

// If player runs out of guessesRemaning, alert will pop up, "you lose".

// If word is correct, tally win by +1 increment.

// If word is incorrect, tally loss by -1 increment.

// Change text on webpage allowing player to press any key to start new game.

// Starts the process again.

