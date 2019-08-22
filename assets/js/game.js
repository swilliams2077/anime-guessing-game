//Pre-Game page initialized variables. 
var wordList = ["tokyoghoul", "berserk", "gantz", "deathnote","trigun","cowboybebop","onepunchman", "onepiece", "fairytale", "initiald", "spacedandy"];

var wordSelection = " ";

var wordLetters = [];

var wordBlanks = 0;

var wordBlanksLetters = [];

var correctGuess = [];

var wrongGuess = [];

var remainingGuess = 10; 

var wins = 0;

var loss = 0;


function startGame (){
    wordSelection = wordList[Math.floor(Math.random() * wordList.length)];
    wordLetters = wordSelection.split("");
    wordBlanks = wordLetters.length;

    remainingGuess = 10
    wrongGuess = [];
    correctGuess = [];
    wordBlanksLetters = [];

    for(var i = 0; i < wordBlanks; i++){
        wordBlanksLetters[i] = "_";
    }

    document.getElementById("gameWindow").innerHTML = wordBlanksLetters.join(" ");
    document.getElementById("remainingGuess").innerHTML = remainingGuess;
    document.getElementById("winCounter").innerHTML = wins;
    document.getElementById("lossCounter").innerHTML = loss;


}

function compareGuess(letter){
    console.log(letter)
    var letterExist = false; 

    for (var i = 0; i < wordBlanks; i++){
        if(wordSelection[i] == letter){
            letterExist = true;
        }
    }

    if(letterExist) {
        for (var i = 0; i < wordBlanks; i++){
            if(wordSelection[i] == letter){
                wordBlanksLetters[i] = letter;
                correctGuess.push(letter)
                console.log(correctGuess)
                console.log(wordBlanksLetters)
            }
        }
    } 
    else {
        wrongGuess.push(letter);
        remainingGuess = --
        console.log(wrongGuess)
    }
}


function imageCard (){
    for (var i = 0; i <wordList.length; i++){
        var imageAttr = "assets/images/cropped/" + wordList[i] +".png";

        if (wordSelection == wordList[i]){
            document.getElementById("animePhoto").src = imageAttr;
            console.log(imageAttr)
        }
    }
}

function roundComplete (){
    for (var j = 0; j < wordSelection; j++){   
    }
    for (var t = 0; t < wordBlanksLetters; t++){
    }
    if (wordBlanksLetters[t] == wordSelection[j]){
        alert("progress!!!")
    }

    
}

// document.getElementById("#startGame").onclick = startGame(); 
startGame();
imageCard();
roundComplete();




document.onkeypress = function(event) {
    var userGuess = event.key.toLocaleLowerCase();
    compareGuess(userGuess)

    document.getElementById("gameWindow").innerHTML = wordBlanksLetters.join(" ");

    console.log(userGuess);



};










// var wordChallenge = wordList[Math.floor(Math.random() * wordList.length)];

// console.log(wordChallenge)

// var correctGuess = [];

// var incorrectGuess = [];

// var blankSpaces = [];

// // for (var i = 0; i < correctGuess.length; i++) {
// //     correctGuess[i] = "_"

// //     correctGuessString = correctGuess.join()
// //     document.getElementById("test").innerHTML =  ("Guess This Anime:" + "<br>" + correctGuess);
// //     }


// //random word selected from list.

// for (var i = 0; i < wordChallenge.length; i++) {
//     blankSpaces[i] = "_";

//     var blankSpacesCat = blankSpaces.join()

    
//     document.getElementById("test").innerHTML = ("Guess This Anime:" + "<br>" + blankSpacesCat + "<br>" + correctGuess);

//     console.log(wordChallenge)

// };

// //User Gameplay . Every correct letter should replace a blank letter. Wrong letters should be written to an array and displayed. Wrong letters should also substract the users guess by one. once there is no more guesses left and the user hasn't succesfully guess, they lose and is prompted to move on to the next title. 


// document.onkeypress = function(event) {
//     var userGuess = event.key

//     for (var i = 0; i < wordChallenge.length; i++){
//         if (userGuess === wordChallenge[i]){
//             correctGuess.push(userGuess)    
//             console.log(correctGuess);
//         } else if (userGuess !== wordChallenge[i]) {
//             incorrectGuess.push(userGuess)
//             console.log(incorrectGuess)
//         } else {
//             correctGuess.push(" ")
//         }
//     };
// };


