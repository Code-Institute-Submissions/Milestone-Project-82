let order = []; /*order of flashes*/
let playerOrder = []; /*order of player pressing lights*/
let flash; /*number of flashes*/
let turn; /*what turn we are on*/
let good; /*correct choices*/
let compTurn; /*who's turn, comp or player*/
let intervalId;
let strict = false; /*strict mode on/off*/
let noise = true;
let on = false; /*game on/off*/
let win; /*has player won?*/

const buttonTop = document.querySelector('#button-top');
const buttonRight = document.querySelector('#button-right');
const buttonLeft = document.querySelector('#button-left');
const buttonBottom = document.querySelector('#button-bottom');
const turnCounter = document.querySelector('#counter');
const strictButton = document.querySelector('#strict');
const onButton = document.querySelector('#power');
const startButton = document.querySelector('#start');

strictButton.addEventListener('change', (event) => {
    console.log("checked")
})

