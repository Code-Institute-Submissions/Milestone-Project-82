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
const buttonTop = document.querySelector("#button-top");
const buttonRight = document.querySelector("#button-right");
const buttonLeft = document.querySelector("#button-left");
const buttonBottom = document.querySelector("#button-bottom");
const roundCounter = document.querySelector("#counter");
const strictButton = document.querySelector("#strict");
const onButton = document.querySelector("#power");
const startButton = document.querySelector("#start");
const strictLight = document.getElementById("strictLight");
const onLight = document.getElementById("onLight");
const muteButton = document.getElementById("mute");
const audio1 = document.getElementById("audio1");
const audio2 = document.getElementById("audio2");
const audio3 = document.getElementById("audio3");
const audio4 = document.getElementById("audio4");
/*-------------------------------------------Game and display on/off--*/
onButton.addEventListener("click", (event) => {
	if (on == false) {
		on = true;
		roundCounter.innerHTML = "-";
        onLight.classList.add("lightOn");
        onLight.classList.remove("lightOff");
		flashColour();
		setTimeout(() => {
			clearColour();
		}, 400);
	} else if (on == true) {
		on = false;
		strict = false;
		mute = false;
		roundCounter.innerHTML = "";
		onLight.classList.remove("lightOn");
		onLight.classList.add("lightOff");
		muteLight.classList.remove("lightOn");
		strictLight.classList.remove("lightOn");
		clearColour();
		clearInterval(intervalId);
	}
});
/*-------------------------------------------Strict mode on/off--*/
strictButton.addEventListener("click", (event) => {
	if (on == true && strict == false) {
		strict = true;
        strictLight.classList.add("lightOn");
	} else {
		strict = false;
		strictLight.classList.remove("lightOn");
		strictLight.classList.add("lightOff");
	}
});
/*-------------------------------------------Mute on/off--*/
muteButton.addEventListener("click", (event) => {
	if (on == true && mute == false) {
		mute = true;
		muteLight.classList.add("lightOn");
	} else {
		mute = false;
		muteLight.classList.remove("lightOn");
		muteLight.classList.add("lightOff");
	}
});
/*-------------------------------------------Start button--*/
startButton.addEventListener("click", (event) => {
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
	roundCounter.innerHTML = "1";
	good = true;
	for (var i = 0; i < 20; i++) {
		order.push(Math.floor(Math.random() * 4) + 1);
	}
	compTurn = true;
	intervalId = setInterval(gameTurn, 800);
}
/*--------------------------------------Checks is player turn or comp turn-------*/
function gameTurn() {
	on = false;
	/*-------------------------------------------Computer's turn over--*/
	if (flash == turn) {
		clearInterval(intervalId);
		compTurn = false;
		clearColour();
		on = true;
	}
	/*-------------------------------------------Computer's turn--*/
	if (compTurn) {
		on = false;
		clearColour();
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
	buttonTop.style.backgroundColor = "#ffffff";
}

function two() {
	if (mute == false) {
		audio2.play();
	}
	buttonLeft.style.backgroundColor = "#ffffff";
}

function three() {
	if (mute == false) {
		audio3.play();
	}
	buttonRight.style.backgroundColor = "#ffffff";
}

function four() {
	if (mute == false) {
		audio4.play();
	}
	buttonBottom.style.backgroundColor = "#ffffff";
}
/*------------------------------Returns button colour to normal--*/
function clearColour() {
	buttonTop.style.backgroundColor = "#cc2900";
	buttonLeft.style.backgroundColor = "#00b300";
	buttonRight.style.backgroundColor = "#0000cc";
	buttonBottom.style.backgroundColor = "#ffcc00";
}
/*------------------------------Flashes buttons in order--*/
function flashAllColours() {
	buttonTop.style.backgroundColor = "#ffffff";
	if (mute == false) {
		audio1.play();
	}
	setTimeout(function () {
		buttonLeft.style.backgroundColor = "#ffffff";
		if (mute == false) {
			audio2.play();
		}
	}, 300);
	setTimeout(function () {
		buttonBottom.style.backgroundColor = "#ffffff";
		if (mute == false) {
			audio4.play();
		}
	}, 500);
	setTimeout(function () {
		buttonRight.style.backgroundColor = "#ffffff";
		if (mute == false) {
			audio3.play();
		}
	}, 700);
	setTimeout(function () {
		clearColour();
	}, 1300);
}
/*------------------------------Flashes all buttons--*/
function flashColour() {
	buttonTop.style.backgroundColor = "#ffffff";
	buttonLeft.style.backgroundColor = "#ffffff";
	buttonRight.style.backgroundColor = "#ffffff";
	buttonBottom.style.backgroundColor = "#ffffff";
}
/*--------------------------------------------------------Clickable buttons--*/
/*------------------------------Calls the function to flash colours--*/
buttonTop.addEventListener("click", (event) => { /*Red*/
	if (on == true) {
		playerChoice.push(1);
		one();
		check();
		noWin();
	}
});
buttonLeft.addEventListener("click", (event) => { /*Green*/
	if (on == true) {
		playerChoice.push(2);
		two();
		check();
		noWin();
	}
});
buttonRight.addEventListener("click", (event) => { /*Blue*/
	if (on == true) {
		playerChoice.push(3);
		three();
		check();
		noWin();
	}
});
buttonBottom.addEventListener("click", (event) => { /*Yellow*/
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
			clearColour();
		}, 300);
	}
}
/*------------Checks to see if last button the player clicked does not match the last button in the
order, if the game is won or if player choice is correct--*/
function check() {
	if (
		playerChoice[playerChoice.length - 1] !== order[playerChoice.length - 1]
	) {
		good = false;
	}
	if (playerChoice.length == 20 && good) {
		flashAllColours();
		winGame();
	}
	if (good == false) {
		flashColour();
		roundCounter.innerHTML = "NO!";
		setTimeout(() => {
			roundCounter.innerHTML = turn;
			clearColour();
			if (strict) {
				play();
			} else {
				resetPlayerTurn();
				good = true;
			}
		}, 800);
		noise = false;
	}
	if (turn == playerChoice.length && good && !win) {
		turn++;
		resetPlayerTurn();
		roundCounter.innerHTML = turn;
	}
}
/*------------------------------Resets player choice and makes it computers turn--*/
function resetPlayerTurn() {
	playerChoice = [];
	compTurn = true;
	flash = 0;
	intervalId = setInterval(gameTurn, 800);
}
/*------------------------------Game has been won!--*/
function winGame() {
	flashColour();
	on = false;
	roundCounter.innerHTML = "WIN!";
	win = true;
}