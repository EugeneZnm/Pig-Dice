//BUSINESS LOGIC
var playerone = "";
var playertwo = "";



//USER INTERFACE
$(document).ready(function() {
    $("button#startgame").click(function(event) {
        playerone = new player(true);
        playertwo = new player(false);
    });

});