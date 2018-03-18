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
    var randomNumber = [""];
    $(".randomNumber").html(gameNumber);
    totalScore = 0;
    $(".totalScore").html("<h1>" + totalScore + "</h1>");
    }

$("#pink-crystal").on("click", function() {
    totalScore += pinkCrystal
    $(".totalScore").html(totalScore);
    console.log(pinkCrystal);
})
$("#green-crystal").on("click", function() {
    totalScore += greenCrystal
    $(".totalScore").html(totalScore);
    console.log(greenCrystal);
})
$("#yellow-crystal").on("click", function() {
    totalScore += yellowCrystal
    $(".totalScore").html(totalScore);
    console.log(yellowCrystal);
})
$("#silver-crystal").on("click", function() {
    totalScore += silverCrystal
    $(".totalScore").html(totalScore);
    console.log(silverCrystal);
})
$(document).on("click", function() {
    if (totalScore > gameNumber) {
    losses++;
    $("#losses").html("<p> Losses" + ":" + losses + "</p>");
    restartGame ();
    console.log(totalScore);
}
if (totalScore === gameNumber) {
    wins++;
    $("#wins").html("<p> Wins" + ":" + wins + "</p>");
    restartGame ();
    console.log(totalScore);
}
})
});

/* End Javascript*/
    
