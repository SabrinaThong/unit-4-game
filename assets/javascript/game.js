$(document).ready(function() {
    var targetNumber = Math.floor((Math.random() *(120 - 19 + 1)) + 19);
    var redChoice = Math.floor((Math.random()* 12) + 1);
    var greenChoice = Math.floor((Math.random()* 12) + 1);
    var blueChoice = Math.floor((Math.random()* 12) + 1);
    var yellowChoice = Math.floor((Math.random()* 12) + 1);
    var playerTotal = 0;
    var wins = 0;
    var losses = 0;
    var playerTotal = 0;

    function reset() {
        playerTotal = 0;
        $("#playerTotal").text(playerTotal);
        targetNumber = Math.floor((Math.random() *(120 - 19 + 1)) + 19);
        console.log(targetNumber);
        $("#random-number").text(targetNumber);
        $("#playerTotal").text(playerTotal);
        redChoice = Math.floor((Math.random()* 12) + 1);
        greenChoice = Math.floor((Math.random()* 12) + 1);
        blueChoice = Math.floor((Math.random()* 12) + 1);
        yellowChoice = Math.floor((Math.random()* 12) + 1);

    }

    $("#random-number").text(targetNumber)
    for (var i=0; i<redChoice.length; i++) {
    function addingScore() {
        $(".button").text(redChoice);
     }
    }
    $("#red").on("click", function () {
        playerTotal = playerTotal + redChoice;
        $(addingScore).text(playerTotal);
        console.log(redChoice);
        $("#playerTotal").text(playerTotal);
        playerScore();
    })

    $("#green").on("click", function () {
        playerTotal = playerTotal + greenChoice;
        $(addingScore).text(playerTotal);
        console.log(greenChoice);
        //console.log("green");
        $("#playerTotal").text(playerTotal);
        playerScore();
    })
    $("#yellow").on("click", function () {
        playerTotal = playerTotal + yellowChoice;
        $(addingScore).text(playerTotal);
        console.log(yellowChoice);
        //console.log("yellow");
        $("#playerTotal").text(playerTotal);
        playerScore();
     
    })
    $("#blue").on("click", function () {
        playerTotal = playerTotal + blueChoice;
        $(addingScore).text(playerTotal);
        console.log(blueChoice);
        //console.log("blue");
        $("#playerTotal").text(playerTotal);
        playerScore();
        
    });
    function playerScore () {
        if (playerTotal === targetNumber) {
            wins++;
            $("#wins"). text( "Wins: " + wins);
            reset();
        }
        else if (playerTotal > targetNumber) {
            losses++;
            $("#losses").text("Losses: " + losses);
            reset();
        }
    }
    
})