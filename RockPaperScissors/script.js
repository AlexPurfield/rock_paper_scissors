var wins = 0;
var losses = 0;
var ties=0;

var choices = ["R", "P", "S"];

var playGame = function () {
    var userChoice = window.prompt("Choose R (Rock), P, (Paper), or S (Scissors)");
    
    if (!userChoice) {return;}
    
    userChoice = userChoice.toUpperCase(); 
    //reassigning var userChoice witht the to upper case method to read the users input no matter what case they use

    if (choices.indexOf(userChoice) === -1) {
        window.alert("Please choose R, P, or S");
        playGame();
        return;
    }

    var index= Math.floor(Math.random() * choices.length);
    var computerChoice = choices[index];

    window.alert("The computer chose " + computerChoice);

if (userChoice ===computerChoice) {ties++; window.alert("It's a tie!");
} else if (
    (userChoice === "R" && computerChoice ==="S") ||
    (userChoice==="S" && computerChoice === "P") ||
    (userChoice ==="P" && computerChoice === "R")
) {
    wins++;
    window.alert("You win!");
}else {
    losses++;
    window.alert("You lose :(");
}
window.alert (
    "Stats: \nWins: " + wins + "\nLosses: " + losses + "\nTies: " + ties
);
var playAgain = window.confirm ("Do you want to play again?");
if (playAgain) {
    playGame();
}
};
playGame();