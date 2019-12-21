var letters = ["a,b,c,d"]  //=Gives the computer choices to pick from
var userGuess = []  //The letters guessed by the user 
//Awaits for the computer to randomly choose a letter from the array(letters)
var letterguessed = null; 
var wins = 0;
var losses = 0;
var guessesLeft = 5;



//Func variable 
var randoLetter = function(){
  letterguessed = letters[Math.floor(Math.random()*letters.length)]; 
}



//When user clicks a button 
document.onkeyup = function(event) {

  var letter = event.key.toLowerCase();
   
  
  if(letter === letterguessed){
    wins++;
    document.querySelector("#wins").innerHTML = wins;
    reset();
  }

//captures th user guess and translates to lowercase

  console.log(letter);
}

