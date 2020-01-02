var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]  //=Gives the computer choices to pick from
var userGuess = []  //The letters guessed by the user 
//Awaits for the computer to randomly choose a letter from the array(letters)
var letterguessed = ""; 
var wins = 0;
var losses = 0;
var guessesLeft = 5;

//Guesslesft
// I am setting a variable "guessed" to a function that goes to my html document.
// .querySelector find the first element from the html doc with the ID of guesses.
//.innerHTML is going to let me replace the contents on the html with the new updated
//content.
//The updated content will be equal to the var guessesLeft
//This will update each time when called by subtrating -1 from guessesLeft.
var guessed = function(){
document.querySelector("#guesses").innerHTML = guessesLeft;
}  

//updateguesesssofar  
// I am setting a variable guessedSoFar to a function that goes to my html document
//.querySelector will find the first element from html with ID of guesses
//.innerhtml will up update content in guessessofar
//The updated content should be the letters the user is guessing/entering
//When called it should keep adding the array and the guessessofar
//.join creates and returns a new string by concatenating all the elements in the array

var guessedSoFar = function(){
  document.querySelector("#guessessofar").innerHTML = userGuess.join(",");
  }  

//reset - Empyting out the guessed function to allow it run again????

var reset = function(){
  guessesLeft = 5;
  userGuess = [];
  guessed(); 
  guessedSoFar();
}

//Func variable 
var randoLetter = function(){
  letterguessed = letters[Math.floor(Math.random()*letters.length)]; 
console.log(letterguessed);
}

//Execute the functions here
guessed();
guessedSoFar();
randoLetter();





//When user clicks a button 
document.onkeyup = function(event) {
//console.log(letterguessed)
//automatically decreases the amount of guesses --
   guessesLeft--;

  
  var letter = event.key.toLowerCase();
   
  guessed();     //executes the guessed function

  //.push() is function already available in the JS library
  //pushing the key event excuted by the end user - whatever the end user selects it will be 
  //pushed into the array 
  userGuess.push(letter);
  guessedSoFar();
  
  if(letter === letterguessed){
    wins++;
    document.querySelector("#wins").innerHTML = wins;
    reset();
  } else if (guessesLeft == 0) {
    losses++;
    document.querySelector("#losses").innerHTML = losses;
    reset();
  }

  


//captures th user guess and translates to lowercase

  console.log(letter);
}

