var randomNumber
var userNumber
var feedbackText
var guessButton = document.querySelector('.guess-button');
var guessResponse = document.querySelector('.guess-response');

function getRandomNum{
  randomNumber = Math.floor((Math.random() * 100) + 1);
};

guessButton.addEventListener('click', function () {
  userNumber = parseInt(document.querySelector('.input-box'));

  if (userNumber = randomNumber) { guessResponse.innerText = "You win!" };
  if (userNumber < randomNumber) { guessResponse.innerText = "Sorry, that guess is too low. Try another number"}
  if (userNumber > randomNumber) { guessResponse.innerText = "Sorry, that guess is too high. Try another number"}

});

function {
if randomNumber is equal to userNumber then return "Hit!"
if randomNumber is less than userNumber then return to high
if randomNumber is greater than userNumber then return to low
};

if Reset Game buttonn clicked function {
  randomNumber = ''
};
