/* Begin Javascript*/

$(document).ready(function() {

    var gameNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    var pinkCrystal = Math.floor(Math.random() * (12 - 1 + 1)) + 12;
    var greenCrystal = Math.floor(Math.random() * (12 - 1 + 1)) + 12;
    var yellowCrystal = Math.floor(Math.random() * (12 - 1 + 1)) + 12;
    var silverCrystal = Math.floor(Math.random() * (12 - 1 + 1)) + 12;
    var totalScore = 0;
    var wins = 0;
    var losses = 0;
    var randomNumber = [""];
    $(".randomNumber").append(gameNumber); 

function restartGame(){
    gameNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    pinkCrystal = Math.floor(Math.random() * (12 - 1 + 1)) + 12;
    greenCrystal = Math.floor(Math.random() * (12 - 1 + 1)) + 12;
    yellowCrystal = Math.floor(Math.random() * (12 - 1 + 1)) + 12;
    silverCrystal = Math.floor(Math.random() * (12 - 1 + 1)) + 12;
    $(".totalScore").html(0);
    var randomNumber = [""];
    $(".randomNumber").html(gameNumber);
    }
    
$(document).ready(function() {
    pinkCrystal = Math.floor(Math.random() * (12 - 1 + 1)) + 12;
    greenCrystal = Math.floor(Math.random() * (12 - 1 + 1)) + 12;
    yellowCrystal = Math.floor(Math.random() * (12 - 1 + 1)) + 12;
    silverCrystal = Math.floor(Math.random() * (12 - 1 + 1)) + 12;
});
  
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
$(document).on("click", function() {
    if (totalScore > gameNumber) {
    losses++;
    $("#losses").html("<p> Losses" + ":" + losses + "</p>");
    restartGame();
}
if (totalScore === gameNumber) {
    wins++;
    $("#wins").html("<p> Wins" + ":" + wins + "</p>");
    restartGame();
}
})
});

/* End Javascript*/
    