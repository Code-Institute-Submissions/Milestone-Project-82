/*Base code has come from freecodecamp.org, as this was my first project using JS i thought it best to try not to reinvent the wheel
and use the code available online and fit it to my needs*/

/*----------------------------------------------------Variables--*/
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
let mute = false;

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
const muteButton = document.getElementById('mute')
const audio1 = document.getElementById('audio1');
const audio2 = document.getElementById('audio2');
const audio3 = document.getElementById('audio3');
const audio4 = document.getElementById('audio4');

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

/*-------------------------------------------Mute on/off--*/
muteButton.addEventListener('click', (event) => {
    if (mute == false) {
        mute = true;
        muteLight.classList.add('lightOn');
    } else {
        mute = false;
        muteLight.classList.remove('lightOn');
        muteLight.classList.add('lightOff');
    }
})

/*-------------------------------------------Game and display on/off--*/
onButton.addEventListener('click', (event) => {
    if (on == false) {
        on = true;
        turnCounter.innerHTML = '-';  
        onLight.classList.add('lightOn');
        flashAllColors();
    } else {
        on = false;
        turnCounter.innerHTML = '';
        onLight.classList.remove('lightOn');
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
        on = false;
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
    if (mute == false) {
        audio1.play();
    }
    buttonTop.style.backgroundColor = '#ff9980';
}

function two() {
    if (mute == false) {
        audio2.play();
    }
    buttonLeft.style.backgroundColor = '#66ff66';
}

function three() {
    if (mute == false) {
        audio3.play();
    }
    buttonRight.style.backgroundColor = '#6666ff';
}

function four() {
    if (mute == false) {
        audio4.play();
    }
    buttonBottom.style.backgroundColor = '#ffff99';
}

 /*------------------------------Returns button colour to normal--*/
function clearColor() {
    buttonTop.style.backgroundColor = '#cc2900';
    buttonLeft.style.backgroundColor = '#00b300';
    buttonRight.style.backgroundColor = '#0000cc';
    buttonBottom.style.backgroundColor = '#ffcc00';
}

/*------------------------------Flashes buttons in order--*/
function flashAllColors() {
    buttonTop.style.backgroundColor = '#ff9980';
    if (mute == false) {
        audio1.play();
    }
    setTimeout(function() {
        buttonLeft.style.backgroundColor = '#66ff66';;
        if (mute == false) {
        audio2.play();
    }
    }, 300);
    setTimeout(function() {
        buttonBottom.style.backgroundColor = '#ffff99';
        if (mute == false) {
        audio4.play();
    }
    }, 500);
    setTimeout(function() {
        buttonRight.style.backgroundColor = '#6666ff';
        if (mute == false) {
        audio3.play();
    }
    }, 700);
    setTimeout(function() {
        clearColor();
    }, 1300);
}

/*------------------------------Flashes all buttons--*/

function flashColor() {
    buttonTop.style.backgroundColor = '#ff9980';
    buttonLeft.style.backgroundColor = '#66ff66';
    buttonRight.style.backgroundColor = '#6666ff';
    buttonBottom.style.backgroundColor = '#ffff99';
}

/*--------------------------------------------------------Clickable buttons--*/

/*------------------------------Calls the function to flash colours--*/

buttonTop.addEventListener('click', (event) => {  /*Red*/
    if (on == true) {
        playerChoice.push(1);
        one();
        check();
        noWin();
    }
});

buttonLeft.addEventListener('click', (event) => {  /*Green*/
    if (on == true) {
        playerChoice.push(2);
        two();
        check();
        noWin();
    }
});

buttonRight.addEventListener('click', (event) => {  /*Blue*/
    if (on == true) {
        playerChoice.push(3);
        three();
        check();
        noWin();
    }
});

buttonBottom.addEventListener('click', (event) => {  /*Yellow*/
    if (on == true) {
        playerChoice.push(4);
        four();
        check();
        noWin();    
    }
});

/*------------------------------Resets colours if game is not won--*/

function noWin() {
    if (!win) {
            setTimeout(() => {
                clearColor();
            }, 300)
    }
}

/*------------Checks to see if player choice is wrong, if the game is won or if player choice is correct--*/

function check() {
    if (playerChoice[playerChoice.length - 1] !== order[playerChoice.length - 1]) {
        good = false;
    }
    if (playerChoice.length == 20 && good) {
        flashAllColors();
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
                resetPlayerTurn();
                good = true;
            }
        }, 800)

        noise = false;
    }

    if (turn == playerChoice.length && good && !win) {
        turn++;
        resetPlayerTurn();
        turnCounter.innerHTML = turn;
    }
}

/*------------------------------Game has been won! Restarts for another shot--*/

function resetPlayerTurn() {
    playerChoice = [];
    compTurn = true;
    flash = 0;
    intervalId = setInterval(gameTurn, 800);
}

/*------------------------------Game has been won! Restarts for another shot--*/

function winGame() {
    flashColor();
    turnCounter.innerHTML = 'WIN!';
    on = false;
    win = true;
}

