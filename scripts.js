var h1 = document.querySelector('h1');
var h3 = document.querySelector('h3');

//** Local Variables
var randomNumber = Math.floor((Math.random() * 100) + 1);
var userNumber = '';
var feedbackText = '';
var userInput = '';

//** Tag Variables
var guessResponse = document.querySelector('.guess-response');
var lastGuess = document.querySelector('.last-guess')

//** Button Variables
var guessButton = document.querySelector('.guess-button');
var clearButton = document.querySelector('.clear-button');
var resetButton = document.querySelector('.reset-button');


function getRandomNum (){
  randomNumber =  Math.floor((Math.random() * 100) + 1);
  console.log('hello!');
  return randomNumber;
};

guessButton.addEventListener('click', function () {
  h1.innerText = 'I AM A GUESS!!!';
  var userInput = document.querySelector('#user-input');
  h3.innerText = parseInt(userInput.value);
  console.log(userInput.value);


  // h3.innerText = Math.floor((Math.random() * 100) + 1);
  // h3.innerText = getRandomNum ();

  // userNumber = parseInt(document.querySelector('.input-box'));
  // userNumber = parseInt(3);

  // if (userNumber = randomNumber) {
  //   // guessResponse.innerText = "You win!"
  //   h3.innerText = "You win!"
  //
  // };
  // if (userNumber < randomNumber) {
  //   //  guessResponse.innerText = "Sorry, that guess is too low. Try another number"
  //    h3.innerText = "Sorry, that guess is too low. Try another number"
  //
  //  };
  // if (userNumber > randomNumber) {
  //   //  guessResponse.innerText = "Sorry, that guess is too high. Try another number"
  //    h3.innerText = "Sorry, that guess is too high. Try another number"
  //
  // };
  // else {
  //   h1.innerText = 'I AM A GUESS!!!';
  // };
});

clearButton.addEventListener('click', function () {
  h1.innerText = 'I AM A CLEAR!!!'
})

resetButton.addEventListener('click', function () {
  h1.innerText = 'I AM A RESET!!!';
  h3.innerText = getRandomNum ();
});
