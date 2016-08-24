//** Development and Testing Variables
var h1 = document.querySelector('h1');
var h3 = document.querySelector('h3');

//** global Variables
var randomNumber =Math.floor((Math.random() * 100) + 1);
var userNumber = '';
var feedbackText = '';
var userInput = document.querySelector('#user-input');


//** Tag Variables
var guessResponse = document.querySelector('.guess-response');
var lastGuess = document.querySelector('.last-guess')

//** Button Variables
var guessButton = document.querySelector('.guess-button');
var clearButton = document.querySelector('.clear-button');
var resetButton = document.querySelector('.reset-button');


function getRandomNum (){
  randomNumber =  Math.floor((Math.random() * 100) + 1);
  return randomNumber;
};

guessButton.addEventListener('click', function () {
  h1.innerText = 'I AM A GUESS!!!';
  var userInput = document.querySelector('#user-input');

  console.log(userInput.value);

  userNumber = parseInt(userInput.value,10);

  console.log(userNumber);

  h3.innerText = userNumber;

  if (userNumber === randomNumber) {
    guessResponse.innerText = "You Win!";
  } else if (userNumber > randomNumber){
    guessResponse.innerText = "Sorry, that guess is too high. Try another number"
  } else  {
    guessResponse.innerText = "Sorry, that guess is too low. Try another number."
  };
});
//   if (userNumber === randomNumber) {
//     guessResponse.innerText = "You Win!";
//     return;
//   };
//   if (userNumber > randomNumber){
//     guessResponse.innerText = "Sorry, that guess is too high. Try another number"
//   } else  {
//     guessResponse.innerText = "Sorry, that guess is too low. Try another number."
//   };
// });

clearButton.addEventListener('click', function () {
  userInput.value = '';
  userNumber = '';
  guessResponse.innerText = "Give it your best guess!";
  h1.innerText = 'I AM A CLEAR!!!';
  h3.innerText='?';
});

resetButton.addEventListener('click', function() {
  h1.innerText = 'I AM A RESET!!!';
  h3.innerText ='?';
  userInput.value = '';
   getRandomNum ();
});
