// playerLetter = ""; computerChoice = ""(Math.floor(Math.random)*wordArray.length-1); 
// wordArray = [...]; Score = 0; guessesRemaining: 8; Guesses; wins = 0; losses = 0;

var wordArray = ["Turkey", "Gravy", "Pilgrims", "Thankful", "Giblets", "Mashed Potatoes", "Corn"];

var playerLetter = "";

var computerChoice;

var guessesRemaining = 8;

var guesses = [];

var wins = 0;

var losses = 0;


// Will add on to score.  Will reset guessesRemaining back to 8.



    	//var underscores = "";
		//for (i=0; i<computerChoice.length; i++){
		//underscores = underscores + "_ ";


function gameReset(playerWins){
		guessesRemaining = 8;
    	guesses = [];
    	computerChoice = wordArray[(Math.floor(Math.random()*(wordArray.length+1)))];
    	document.getElementById("guessesRemaining").innerHTML = guessesRemaining; 

    if (playerWins === "win"){
		wins++;  
		document.getElementById("#wins");	 		
    }
    else { //lose scenario
    	losses++;
    	document.getElementById("losses");
    	//rolling the computerChoice dice.
    }
};

// Event listener for "press any key" to play that triggers once clicked.
// As player clicks letters, guessesRemaining will countdown.

document.onkeyup = function(event) { //gamereset if guessesRemaining <= 0
		var playerLetter = String.fromCharCode(event.keyCode).toUpperCase();

		if (event.keyCode <= 65 || event.keyCode >= 90){
			alert("Please pick a letter!");
			return;
		}

		if (guesses.indexOf(playerLetter) > -1) {
			return;
		}

		guessesRemaining--;
		document.getElementById("guessesRemaining").innerHTML = guessesRemaining;
		guesses.push(playerLetter);
		document.getElementById("incorrectGuesses").innerHTML = guesses;

		if (guessesRemaining <= 0) {
			//playerlose
			gameReset();
			alert("You Lose!");
		}
		else {
			//get the word correct.
		}


		document.getElementById("guessBlanks").innerHTML = playerLetter;
};


// This will happen again once the game is reset.  

// Line for any random word picked by computer will appear.

// If word is correct, tally win by +1 increment.

// If word is incorrect, tally loss by +1 increment.

// Change text on webpage allowing player to press any key to start new game.

// Starts the process again.

