var playing = false;
var score;
var tick;
var timeremaining;
var z;


//if we click on the start/reset
document.getElementById("startreset").onclick = function () {

    if (playing === true || timeremaining === 0) { //if we are playing
        location.reload(); // function to reload our page
    } else { //if we arent playing
        playing = true; // now we are playing!
        score = 0; // set the score to 0

        changeHTML("instruction", "Choose the correct answer!");

        hide("gameover");
        document.getElementById("timeremaining").style.display = "block";
        timeremaining = 60;
        document.getElementById("counter").innerHTML = timeremaining;

        hide("gameover");
        //show the countdown timer


        document.getElementById("scorevalue").innerHTML = score; //then set the scorevalue to reflect score


        document.getElementById("startreset").innerHTML = "Reset"; //change start button to reset button

        startCountdown(); //start timer
        question(); // make a question

    }
}

for(i=1;i<5;i++) {
document.getElementById("box" + i).onclick = function () {
    if (playing === true) {
        if (this.innerHTML == z) {
            score++;
            changeHTML("scorevalue", score);
            //hide wrong box and show correct box
            hide("wrong");
            show("correct");
            setTimeout(function () {
                hide("correct")
            }, 1000);
            question();
        } else {
        // if this box holds a wrong answer 
            show("wrong");
        hide("correct");
        setTimeout(function () {
            hide("wrong")
        }, 1000);
            score -= 1;
            changeHTML("scorevalue", score);
    }

}
}
}


// -----------------FUNCTIONS-------------------

function startCountdown() {
    tick = setInterval(function () {
        timeremaining -= 1;
        document.getElementById("counter").innerHTML = timeremaining;
        if (timeremaining === 0) {
            stopCountdown();
            show("gameover");

            document.getElementById("gameover").innerHTML = "<p>Game over!</p><p>Your score is " + score + ".</p>";

            hide("timeremaining");
            hide("timeremainingvalue");
            hide("correct");
            hide("wrong");
            playing = false;
            changeHTML("startreset", "Start")

        }
    }, 1000); //decrease time every one second (1000 ms)

}

function stopCountdown() {
    clearInterval(tick);
}

function hide(ID) {
    document.getElementById(ID).style.display = "none";
}

function show(ID) {
    document.getElementById(ID).style.display = "block";
}

function changeHTML(ID, html) {
    document.getElementById(ID).innerHTML = html;
}

function question() {
    var x = Math.round(9 * Math.random()) + 1;
    var y = Math.round(9 * Math.random()) + 1;
    z = x * y;
    changeHTML("question", x + "x" + y);
    var correctPosition = Math.round(3 * Math.random()) + 1;
    document.getElementById("box" + correctPosition).innerHTML = z; //random box with the correct answer!

    //now fill all the other boxes with wrong answers!

    var answers = [z];

    for (i = 1; i < 5; i++) {
        if (i !== correctPosition) {
            var w;
            do {
                w = (Math.round(9 * Math.random()) + 1) * (Math.round(9 * Math.random()) + 1);
            }
            while (answers.indexOf(w) > -1) //if the wrong answers is inside the array, then it will give us greater than 1. if it does, find another wrong answer




            document.getElementById("box" + i).innerHTML = w;
            answers.push(w);
        }
    }
}
