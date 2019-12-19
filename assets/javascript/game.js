//3. Guess what letter I'm thinking of
//4. Wins: (# of times the user has guessed the letter correctly)
//5. Losses: (# of times the user has failed to guess the letter correctly after exhausting all guesses)
//6. Guesses Left: (# of guesses left. This will update) done
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
// I am setting a var "guessed" to a function that goes to my html document.
// .querySelector find the first element from the html doc with the ID of guesses.
//.innerHTML is going to let me replace the contents on the html with the new updated
//content.
//The updated content will be equal to the var guessesLeft
//This will update each time when called by subtrating -1 from guessesLeft.
var guessed = function(){
document.querySelector("#guesses").innerHTML = guessesLeft;
}  

//updateguess I don't understand why I need update guess and update guesses so far??


//updateguesesssofar  
// I am setting a var guessedSoFar to a function that goes to my html document
//.querySelector will find the first element from html with ID of guesses
//.innerhtml will up update content in guessessofar
//The updated content should be the letters the user is guessing/entering
//I think I need to push the userGuess to the array but don't know where to do that
//When called it should keep adding the array and the guessessofar
//var guessedSoFar = function(){
//  document.querySelector("#guessessofar").innerHTML = userGuess;
//  }  

//reset - Empyting out the guessed function to allow it run again????
//global.guessed = function(){}


//wins
//var won = function(){
// document.querySelector("#wins").innerHTML = wins;


//lost
//var lost = function(){
//  document.querySelector("#losses").innerHTML = losses;
  




//Execute the functions here
guessed()

//won()
//lost()

//When user clicks a button 
document.onkeyup = function(event) {

//automatically decreases the amount of guesses
//-- subtracts
// ++ adds/
  guessesLeft--;  
  guessed();     //executes the guessed function
 
//  wins++     should execute the won function
//   won()

//captures teh user guess and translates to lowercase
var userGuess = String.fromCharCode(event.keycode).toLowerCase();
   
  console.log(userGuess);
}

