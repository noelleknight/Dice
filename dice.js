var rollDice = document.getElementById('button');
var numberOfTries = 0;


var game = {
    time: new Date(),
    startTime: null,
    diceRoll: function diceRoll () {

        numberOfTries++;
      if (numberOfTries === 1) {
        this.startTime = new Date();
      }
        var roll1 = randomize();
        var roll2 = randomize();

      if(roll1 + roll2 === 7 || roll1 + roll2 === 11) {
        var winTime = new Date();
        var timeDifference = Math.floor((winTime.getTime() - this.startTime.getTime())/1000);
        document.getElementById("message").innerHTML = "Winner!";
        document.getElementById('attempts').innerHTML = "(It took you " + numberOfTries + " tries and " +   timeDifference  + " seconds)";
        numberOfTries = 0;
        this.startTime= new Date();


      }

      else {document.getElementById("message").innerHTML = "Try Again";
            document.getElementById("attempts").innerHTML = "";

    }

      document.getElementById("box1").innerHTML = roll1;
      document.getElementById("box2").innerHTML = roll2;
    }

}



var startTime = "Game started  at " + game.time.getFullYear() + "-" + (game.time.getMonth()+1) + "-" + game.time.getDate() + " at " + game.time.getHours() + ":" + game.time.getMinutes() ;



rollDice.addEventListener("click", function () {
          game.diceRoll();
        })
function randomize() {
   return (Math.floor(Math.random() * 6) + 1);

}
document.getElementById("startTime").innerHTML = startTime;
