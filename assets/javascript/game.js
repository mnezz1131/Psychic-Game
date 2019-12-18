//3. Guess what letter I'm thinking of

//4. Wins: (# of times the user has guessed the letter correctly)

//5. Losses: (# of times the user has failed to guess the letter correctly after exhausting all guesses)

//6. Guesses Left: (# of guesses left. This will update)

//7. Your Guesses So Far: (the specific letters that the user typed. Display these until the user either wins or loses.)

//8. When the player wins, increase the Wins counter and start the game over again (without refreshing the page).

//9. When the player loses, increase the Losses counter and restart the game without a page refresh (just like when the user wins).


///=Gives the computer choices to pick from
var letters = ["a,b,c,d"]
//The letters guessed by the user 
var userGuess = []
//Awaits for the computer to randomly choose a letter from the array(letters)
var computerGuess = null; 
var wins = 0;
var losses = 0;
var guessesLeft = 5;

//Guesslesft
var guessed = function(){
document.querySelector("#guesses").innerHTML = guessesLeft;
}  



//updateguess




//updateguesesssofar





//reset


//Execute the functions here
guessed()






//When user clicks a button 
document.onkeyup = function(event) {

//automatically decreases the amount of guesses
//-- subtracts
// ++ adds
  guessesLeft--;
  //executes the guessed function
guessed();

//captures teh user guess and translates to lowercase
  var userGuess = String.fromCharCode(event.keycode).toLowerCase();
   
  console.log(userGuess);
}