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
$(".randomNumber").append(gameNumber); 

// function restartGame(){
//     gameNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
//     pinkCrystal = Math.floor(Math.random() * (12 - 1 + 1)) + 12;
//     greenCrystal = Math.floor(Math.random() * (12 - 1 + 1)) + 12;
//     yellowCrystal = Math.floor(Math.random() * (12 - 1 + 1)) + 12;
//     silverCrystal = Math.floor(Math.random() * (12 - 1 + 1)) + 12;
//     totalScore = [];
//     console.log("game is restarted");
// }

$(document).ready(function() {
    gameNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    pinkCrystal = Math.floor(Math.random() * (12 - 1 + 1)) + 12;
    greenCrystal = Math.floor(Math.random() * (12 - 1 + 1)) + 12;
    yellowCrystal = Math.floor(Math.random() * (12 - 1 + 1)) + 12;
    silverCrystal = Math.floor(Math.random() * (12 - 1 + 1)) + 12;
    totalScore = 0;
    wins = 0;
    losses = 0;
});
$(document).on("click", function(){
    // if (totalScore === gameNumber){
    //     wins++;
    // } 
    if (totalScore > gameNumber){
        console.log("loser");
        
    }

})
    $("#pink-crystal").on("click", function() {
     totalScore += pinkCrystal
    $(".totalScore").html(totalScore);
    })
   $("#green-crystal").on("click", function() {
    totalScore += greenCrystal
   $(".totalScore").html(totalScore);
   })
   $("#yellow-crystal").on("click", function() {
    totalScore += yellowCrystal
   $(".totalScore").html(totalScore);
   })
   $("#silver-crystal").on("click", function() {
    totalScore += silverCrystal
   $(".totalScore").html(totalScore);
    })
    



});



        // function add(a, b) {
        //     return a + b;
        // }
        
        // console.log(sum);

/* End Javascript*/