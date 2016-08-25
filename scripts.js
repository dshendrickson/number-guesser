//** Number Guesser
// Phase One: Basic Requirements
//
// The application should have the following user interface components:
//
// An input field for guessing the number
// A button for submitting a guess
// A button for clearing the input field
// A button that resets the game to its initial state
// An element that displays the users most recent guess
// An element that displays a message to user
// If their guess is too high, it should display: “Sorry, that guess is too high. Try a lower number.”
// If their guess is too low, it should display: “Sorry, that guess is too low. Try a higher number.”
// Some things to think about:
//
// Input fields—regardless of their “type” attribute—store their values in strings. You’ll need to use parseInt() to turn it back into a number.
// You’ll need a strategy for generating random numbers.

// Phase Two: More Better
//
// The type attribute for the guess input should be “number”.
// It should have “min” and a “max” attributes equal to the minimum and maximum of the reange of guesses (e.g. 1 and 100, respectively).
// The application should display an error message if the guess is not a number (e.g. parseInt() returns NaN).
// The application should display an error if the guess is outside of the range of possible answers.
// The clear button should be disabled if there is nothing to clear.

// The reset button should be disabled if there is nothing to reset.
// Phase Three: Level Up
//
// Add additional inputs that allows the user to specify what the minimum and maximum numbers should be.
// Every time the user wins a round increase the maximum number by 10.
// Every time the user wins a round decrease the minimum number by 10.
// (Pro-tip: You’ll need to adjust the input fields to accept the new minimum and maximum numbers.)
//
// Rubric
//
// Functional Expectations
//
// 4: Application meets all of the functional expectations in Phase Three
// 3: Application meets all of the functional expectations in Phase Two
// 2: Application meets all of the functional expectations in Phase One
// 1: Application does not meet the requirements in Phase One
// Fundamental JavaScript Style
//
// 4: Application demonstrates excellent knowledge of JavaScript syntax, style, and refactoring
// 3: Application shows strong effort towards organization, content, and refactoring
// 2: Application runs but the code has long functions, unnecessary or poorly named variables, and needs significant refactoring
// 1: Application generates syntax error or crashes during execution

//** User Input Varialbles
var userInput = document.querySelector('#user-input');
var inputMin = document.querySelector('#input-min');
var inputMax = document.querySelector('#input-max');

//** global Variables
var userNumber = '';
var feedbackText = '';
var newMin = parseInt(inputMin.value);
var newMax = parseInt(inputMax.value);
var randomNumber = Math.floor((Math.random() * (newMax - newMin + 1)) + newMin);

//** Tag Variables
var guessResponse = document.querySelector('.guess-response');
var lastGuess = document.querySelector('.last-guess');
var h1 = document.querySelector('h1');
var h3 = document.querySelector('h3');

//** Button Variables
var guessButton = document.querySelector('.guess-button');
var clearButton = document.querySelector('.clear-button');
var resetButton = document.querySelector('.reset-button');
var rangeButton = document.querySelector('.range-button');

//** Event fucntions

userInput.addEventListener('keyup', function () {
  if(userInput.value !== '') {
    activateClear();
  }
  if(userInput.value === '') {
    deactivateClear();
  }
});

guessButton.addEventListener('click', function () {
  var userInput = document.querySelector('#user-input');
  userNumber = parseInt(userInput.value,10);
  var inputMin = document.querySelector('#input-min').value;
  var inputMax = document.querySelector('#input-max').value;

  h3.innerText = userNumber;

  if (isNaN(userNumber)) {
    h3.innerText = "Entry must be an integer.";
    resetGuessResponse ();
    activateReset ();
  } else if (userNumber <= newMax && userNumber >= newMin) {
      returnGuessResponse ();
  } else {
      h3.innerText = "Please pick a number between " + newMin + " and " + newMax;
      resetGuessResponse ();
      activateReset ();
  };
});

clearButton.addEventListener('click', function () {
  userNumber = '';
  resetInputValue ();
  resetGuessResponse ();
  deactivateClear ();
});

resetButton.addEventListener('click', function() {
  location.reload ();
});

rangeButton.addEventListener('click', function () {
  inputMin = document.querySelector('#input-min');
  inputMax = document.querySelector('#input-max');
  newMin = parseInt(inputMin.value);
  newMax = parseInt(inputMax.value)
  randomNumber = Math.floor((Math.random() * (newMax - newMin + 1)) + newMin);
});

//** Local Functions

function returnGuessResponse () {
  activateReset();
  if (userNumber === randomNumber) {
    guessResponse.innerText = "You Win!";
    newMin = newMin - 10;
    newMax = newMax + 10;
    inputMin.value = newMin;
    inputMax.value = newMax;
    randomNumber = Math.floor((Math.random() * (((newMax) - (newMin) + 1))) + (newMin));
  } else if (userNumber > randomNumber) {
    guessResponse.innerText = "Sorry, that guess is too high. Try another number."
  } else {
    guessResponse.innerText = "Sorry, that guess is too low. Try another number."
  };
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
