/*----- constants -----*/
const playerLookup = {
    '1': 'Player One',
    '-1': 'Player Two',
    'null': 'transparent' 
  };

/*----- app's state (variables) -----*/
let board;
let turn;
let winner;

/*----- cached element references -----*/
let gameBoard = document.getElementById('board')
const msgEl = document.getElementById('msg');

/*----- event listeners -----*/
gameBoard.addEventListener('click', playClick)


/*----- functions -----*/
init();

function init() {
    board = [0, 4, 4, 4, 4, 4, 4, 0, 4, 4, 4, 4, 4, 4];
    turn = 1;
    winner = null;
    render ();
}

function render() {

};

function playClick(e) {

};