//BUSINESS LOGIC

// 3 Initialising objects as variables
var playerone = "";
var playertwo = "";

// 4 generating numbers randomly
var rolldice = function() {
    return Math.floor(6 * Math.random()) + 1;
}

// 5 creating player constructor
function player() {
    this.roll = 0;
    this.roundcore = 0;
    this.totalscore = 0;
}


// USER INTERFACE

// 1 startgame click function
$(document).ready(function() {
    $("button#startgame").click(function(event) {
        playerone = new player(true);
        playertwo = new player(false);
    });

    // 2 Player One Roll dice click function
    $("button#rollp1").click(function(event) {
        playerone.roll = rolldice();
        $("#rolldie").text(playerone.roll);
    });


});