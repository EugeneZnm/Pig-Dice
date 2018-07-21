//BUSINESS LOGIC
var playerone = "";
var playertwo = "";

var rolldice = function() {
    return Math.floor(6 * Math.random()) + 1;
}

//creating player constructor
function player() {
    this.roll = 0;
    this.roundcore = 0;
    this.totalscore = 0;
}


//USER INTERFACE
$(document).ready(function() {
    $("button#startgame").click(function(event) {
        playerone = new player(true);
        playertwo = new player(false);
    });



});