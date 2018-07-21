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
    this.roundscore = 0;
    this.totalscore = 0;
}

// 6 Check for 1
player.prototype.rollit = function() {
    if (this.roll === 1) {
        this.roundscore === 0;
        alert("your rolled 1, your turn is over")
    }

    //6.5 add value of die roll to total score
    else {
        this.roundscore += this.roll;

    }
}

// 8 player hold
player.prototype.hold = function() {
    this.totalscore += this.roundscore;
    this.roundscore === 0;
    alert("Your turn is over, player two plays...OINK!! OINK!! OINK!!");
}



// USER INTERFACE

// 1 Start-game click function
$(document).ready(function() {
    $("button#startgame").click(function(event) {
        playerone = new player(true);
        playertwo = new player(false);
    });

    // 2 Player One Roll dice click function
    $("button#rollp1").click(function(event) {
        playerone.roll = rolldice();
        $("#rolldie").text(playerone.roll);

        // 7 display roundscore
        playerone.rollit();
        $("#roundscores").text(playerone.roundscore);
    });

    //9 Player one hold
    $("button#holdp1").click(function(event) {
        playerone.hold();
        $("#totalscore").text(playerone.totalscore);
        $("#roundscores").empty();
        $("#rolldie").empty();
    });


    //10 Player 2 roll dice
    $("button#rollp2").click(function(event) {
        playertwo.roll = rolldice();
        $("#rolldie1").text(playertwo.roll);

        //11 display player2 roundscore
        playertwo.rollit();
        $("#roundscore2").text(playertwo.roundscore);
    });

    //12 player two hold
    $("button#holdp2").click(function(event) {
        playertwo.hold();
        $("#totalscore2").text(playertwo.totalscore);
        $("#roundscore2").empty();
        $("#rolldie1").empty();
    });
});