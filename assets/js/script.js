/*Base code has come from freecodecamp.org, as this was my first project using JS i thought it best to try not to reinvent the wheel
and use the code available online and fit it to my needs*/

let order = []; /*order of flashes*/
let playerChoice = []; /*order player has pressed lights*/
let flash; /*number of flashes*/
let turn; /*what turn we are on*/
let good; /*correct choices*/
let compTurn; /*who's turn, comp or player*/
let intervalId;
let strict = false; /*strict mode on/off*/
let noise = true;
let on = false; /*player cant click buttons*/
let win; /*has player won?*/
let retart; /*restarts game after winning*/

/*----------------------------------------------------Constants--*/
const buttonTop = document.querySelector('#button-top');
const buttonRight = document.querySelector('#button-right');
const buttonLeft = document.querySelector('#button-left');
const buttonBottom = document.querySelector('#button-bottom');
const turnCounter = document.querySelector('#counter');
const strictButton = document.querySelector('#strict');
const onButton = document.querySelector('#power');
const startButton = document.querySelector('#start');
const strictLight = document.getElementById('strictLight');
const onLight = document.getElementById('onLight');

/*-------------------------------------------Strict mode on/off--*/
strictButton.addEventListener('click', (event) => {
    if (strict == false) {
        strict = true;
        strictLight.classList.add('lightOn');
    } else {
        strict = false;
        strictLight.classList.remove('lightOn');
        strictLight.classList.add('lightOff');
    }
});

/*-------------------------------------------Game/Display on/off--*/
onButton.addEventListener('click', (event) => {
    if (on == false) {
        on = true;
        turnCounter.innerHTML = '-';  
        onLight.classList.add('lightOn');
    } else {
        on = false;
        turnCounter.innerHTML = '';
        onLight.classList.remove('lightOn')
        onLight.classList.add('lightOff');
        clearColor();
        clearInterval(intervalId);
    }
});

/*-------------------------------------------Start button--*/
startButton.addEventListener('click', (event) => {
    if (on || win) {
        play();
    }
});

/*-------------------------------------------Start game function--*/
function play() {
    win = false;
    order = [];
    playerChoice = [];
    flash = 0;
    intervalId = 0;
    turn = 1;
    turnCounter.innerHTML = '1';
    good = true;
    for (var i = 0; i < 20; i++) {
        order.push(Math.floor(Math.random() * 4) + 1);
    }
    compTurn = true;
    intervalId = setInterval(gameTurn, 800);
}

/*-------------------------------------------Checks who's turn it is--*/
function gameTurn() {
    on = false;

    /*-------------------------------------------Computer's turn over--*/
    if (flash == turn) {
        clearInterval(intervalId);
        compTurn = false;
        clearColor();
        on = true;
    }
    /*-------------------------------------------Computer's turn--*/
    if (compTurn) {
        clearColor();
        setTimeout(() => {               
            if (order[flash] == 1) one();
            if (order[flash] == 2) two();
            if (order[flash] == 3) three();
            if (order[flash] == 4) four();
            flash++;
        }, 200);
    }
}

/*------------------------------Changes buttons to lighter colour--*/
function one() {
    buttonTop.style.backgroundColor = '#ff9980';/*#ff9980*/
}

function two() {
    buttonLeft.style.backgroundColor = '#66ff66';/*#66ff66*/
}

function three() {
    buttonRight.style.backgroundColor = '#6666ff';/*6666ff*/
}

function four() {
    buttonBottom.style.backgroundColor = '#ffff99';/*#ffff99*/
}

 /*------------------------------Returns button colour to normal--*/
function clearColor() {
    buttonTop.style.backgroundColor = '#cc2900';
    buttonLeft.style.backgroundColor = '#00b300';
    buttonRight.style.backgroundColor = '#0000cc';
    buttonBottom.style.backgroundColor = '#ffff00';
}

/*------------------------------Flashes all buttons--*/
function flashColor() {
    buttonTop.style.backgroundColor = '#ff9980';
    buttonLeft.style.backgroundColor = '#66ff66';
    buttonRight.style.backgroundColor = '#6666ff';
    buttonBottom.style.backgroundColor = '#ffff99';
}

/*-----------------------------------------Clickable buttons--*/

/*------------------------------Calls the function to flash colours--*/

buttonTop.addEventListener('click', (event) => {  /*Red*/
    if (on == true) {
        playerChoice.push(1);
        one();
        check();
        if (!win) {
            setTimeout(() => {
                clearColor();
            }, 300)
        }
    }
});

buttonLeft.addEventListener('click', (event) => {  /*Green*/
    if (on == true) {
        playerChoice.push(2);
        two();
        check();
        if (!win) {
            setTimeout(() => {
                clearColor();
            }, 300)
        }
    }
});

buttonRight.addEventListener('click', (event) => {  /*Blue*/
    if (on == true) {
        playerChoice.push(3);
        three();
        check();
        if (!win) {
            setTimeout(() => {
                clearColor();
            }, 300)
        }
    }
});

buttonBottom.addEventListener('click', (event) => {  /*Yellow*/
    if (on == true) {
        playerChoice.push(4);
        four();
        check();
        if (!win) {
            setTimeout(() => {
                clearColor();
            }, 300)
        }
    }
});

/*------------Checks to see if player choice is wrong, the game is won or player choice is correct--*/
function check() {
    if (playerChoice[playerChoice.length - 1] !== order[playerChoice.length - 1]) {
        good = false;
    }
    if (playerChoice.length == 20 && good) {
        winGame();
    }
    if (good == false) {
        flashColor();
        turnCounter.innerHTML = 'NO!';
        setTimeout(() => {
            turnCounter.innerHTML = turn;
            clearColor()

            if (strict) {
                play();
            } else {
                compTurn = true;
                flash = 0
                playerChoice = [];
                good = true;
                intervalId = setInterval(gameTurn, 800);
            }
        }, 800)

        noise = false;
    }

    if (turn == playerChoice.length && good && !win) {
        turn++;
        playerChoice = [];
        compTurn = true;
        turnCounter.innerHTML = turn;
        flash = 0;
        intervalId = setInterval(gameTurn, 800);
    }
}

/*------------------------------Game has been won! Restarts for another shot--*/
function winGame() {
    flashColor();
    turnCounter.innerHTML = 'WIN!';
    on = false;
    win = true;
    restart = setTimeout(() => {
        play();
    },3000)
}

