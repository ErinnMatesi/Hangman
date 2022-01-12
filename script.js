// array of words for game
var words = ["garden", "perennial", "autumn", "yardwork", "planting", "seeds", "vegetable", "shrubbery"];

// var references to html elements where I will be adding data
var scoreboard = document.querySelector("#scoreboard");
var gameSection = document.querySelector("#gameSection");
var timer = document.querySelector("#timer");
var startGame = document.querySelector("#start");
var hiddenWord = document.querySelector("#hiddenWord");

// get random word from the array
randWords = Math.floor(Math.random() * words.length);

console.log(words[randWords]);

var letters = words[randWords].split("");
// starting time
var timeLeft = 12;

// Game Wins
var gameWins = localStorage.getItem('wins') || 0;

function checkWin() {
    var wordSoFar = hiddenWord.textContent;
    console.log(wordSoFar);
    if (wordSoFar.includes('_')) {
        return 
    } else {
        alert('You win!');
        gameWins++;
        localStorage.setItem('wins', gameWins);
    } 
}

var playerInput = function(event) {
    var keyPress = event.key;
    for (var i = 0; i < letters.length; i++) {

        if (keyPress === letters[i]) {
            var oldContent = hiddenWord.textContent.split("");
            oldContent[i] = keyPress;
            hiddenWord.textContent = oldContent.join("");

            checkWin();
            // letter that matches the keyPress, replaces the underscore. textContent has to update. 
        }
    }
}

document.addEventListener("keydown", playerInput);

// function to trigger countdown and a new word being chosen
startGame.addEventListener("click", function(){
    var countDown = setInterval(function() {
        timer.textContent = timeLeft + " seconds remaining";
        if (timeLeft > 0) {
            timeLeft--;
        } else {
            clearInterval(countDown);
        };
    
    }, 1000);
    hiddenWord.textContent = "";
    for (var i = 0; i < letters.length; i++) {
        hiddenWord.textContent = hiddenWord.textContent + "_";
    };
    
})

// countdown and playerInput need to be wrapped into one function I think