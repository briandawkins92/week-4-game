/* Begin Javascript*/

$(document).ready(function() {

var gameNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
var wins = 0;
var losses = 0;
var pinkCrystal = Math.floor(Math.random() * (12 - 1 + 1)) + 12;
var greenCrystal = Math.floor(Math.random() * (12 - 1 + 1)) + 12;
var yellowCrystal = Math.floor(Math.random() * (12 - 1 + 1)) + 12;
var silverCrystal = Math.floor(Math.random() * (12 - 1 + 1)) + 12;
var totalScore = [""];
var randomNumber = [""];

function restartGame(){
    gameNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    pinkCrystal = Math.floor(Math.random() * (12 - 1 + 1)) + 12;
    greenCrystal = Math.floor(Math.random() * (12 - 1 + 1)) + 12;
    yellowCrystal = Math.floor(Math.random() * (12 - 1 + 1)) + 12;
    silverCrystal = Math.floor(Math.random() * (12 - 1 + 1)) + 12;
    totalScore = [];
    console.log("game is restarted");
}

$(document).ready(function() {
    gameNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    pinkCrystal = Math.floor(Math.random() * (12 - 1 + 1)) + 12;
    greenCrystal = Math.floor(Math.random() * (12 - 1 + 1)) + 12;
    yellowCrystal = Math.floor(Math.random() * (12 - 1 + 1)) + 12;
    silverCrystal = Math.floor(Math.random() * (12 - 1 + 1)) + 12;
    totalScore = [""];
    wins = 0;
    losses = 0;
    $(".randomNumber").append(gameNumber);
    

   
});


// function showInTotalScore () {
    $("#pink-crystal").on("click", function() {
        console.log(pinkCrystal);  
        $(".totalScore").append(pinkCrystal);
        totalScore.push(pinkCrystal);
        totalScore = parseInt(totalScore);
        

   })
   $("#green-crystal").on("click", function() {
       console.log(greenCrystal);
   })
   $("#yellow-crystal").on("click", function() {
       console.log(yellowCrystal);
   })
   $("#silver-crystal").on("click", function() {
       console.log(silverCrystal);
   })
// }

});

/* End Javascript*/