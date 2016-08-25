// //** Local Functions
// function getRandomNum (){
//   randomNumber =  Math.floor(Math.random() * (100 + 1) - 1);
//   return randomNumber;
// };

//** Development and Testing Variables
var h1 = document.querySelector('h1');
var h3 = document.querySelector('h3');

//** User Input Varialbles
var userInput = document.querySelector('#user-input');
var inputMin = document.querySelector('#input-min');
var inputMax = document.querySelector('#input-max');

//** global Variables
var userNumber = '';
var feedbackText = '';
var randomNumber = Math.floor(Math.random() * (parseInt(inputMax.value) - parseInt(inputMin.value)) + parseInt(inputMin.value));
var newMin = '';
var newMax = '';

//** Tag Variables
var guessResponse = document.querySelector('.guess-response');
var lastGuess = document.querySelector('.last-guess')

//** Button Variables
var guessButton = document.querySelector('.guess-button');
var clearButton = document.querySelector('.clear-button');
var resetButton = document.querySelector('.reset-button');
var rangeButton = document.querySelector('.range-button');

//** Event fucntions

rangeButton.addEventListener('click', function () {
  inputMin = parseInt(inputMin.value);
  inputMax = parseInt(inputMax.value);
  randomNumber = Math.floor(Math.random() * (inputMax + inputMin) - inputMin);
  // getRandomNum ();
});

userInput.addEventListener('keyup', function () {
  if(userInput.value !== '') {
    activateClear();
  }
  if(userInput.value === '') {
    deactivateClear();
  }
});

rangeButton.addEventListener('click', function () {
  h1.innerText = 'I AM A GUESS!!!';

  var inputMin = document.querySelector('#input-min').value;
  var inputMax = document.querySelector('#input-max').value;
});

guessButton.addEventListener('click', function () {
  var userInput = document.querySelector('#user-input');
  userNumber = parseInt(userInput.value,10);

  h3.innerText = userNumber;

  if (isNaN(userNumber)) {
    h3.innerText = "Entry must be an integer.";
    resetGuessResponse ();
  } else if (userNumber <= inputMax && userNumber >= inputMin) {

    returnGuessResponse ();

  } else {
    h3.innerText = "Please pick a number between " +  inputMin + " and " + inputMax;
    resetGuessResponse ();
  };
});

clearButton.addEventListener('click', function () {
  userNumber = '';
  resetInputValue ();
  resetGuessResponse ();
  deactivateClear ();
});

resetButton.addEventListener('click', function() {
  h3.innerText ='?';
  resetInputValue ();
  resetGuessResponse ();
  deactivateClear ();
  deactivateReset ();
  getRandomNum ();
});

//** Local Functions

function returnGuessResponse () {
  if (userNumber === randomNumber) {
    guessResponse.innerText = "You Win!";
    newMin = inputMin - 49;
    newMax = inputMax + 49;
    randomNumber = Math.floor(Math.random() * (newMax + newMin) - newMin);
    activateReset ();
  } else if (userNumber > randomNumber) {
    guessResponse.innerText = "Sorry, that guess is too high. Try another number."
  } else {
    guessResponse.innerText = "Sorry, that guess is too low. Try another number."
  };
};

function getRandomNum (){
  randomNumber =  Math.floor(Math.random() * (parseInt(inputMax.value) + (inputMin.value)) - inputMin.value);
  return randomNumber;
};

function activateClear () {
  clearButton.disabled = false;
};

function deactivateClear () {
  clearButton.disabled = true;
};

function activateReset () {
  resetButton.disabled = false;
};

function deactivateReset () {
  resetButton.disabled = true;
};

function resetGuessResponse () {
  guessResponse.innerText = "Give it your best guess!";
};

function resetInputValue () {
    userInput.value = '';
};
