/*----- constants -----*/
const playerLookup = {
    '1': 'Player One',
    '-1': 'Player Two',
  }

  // do I have to set this as a constant?
let mySide = {
    'p1-start': [board[1], board[2], board[3], board[4], board[5], board[6]],
    'p2-start': [board[8], board[9], board[10], board[11], board[12], board[13]],
}
    
// player = [
//     {
//         name: 'Player One',
//         turn: '1',
//         mySide: [board[1], board[2], board[3], board[4], board[5], board[6]],
//     },

//     {
//         name: 'Player Two',
//         turn: '-1',
//         mySide: [board[8], board[9], board[10], board[11], board[12], board[13]],
// ]


const playerPieces = {
    '1': 'imgs/1pc-MancalaCup.png',
    '2': 'imgs/2pc-MancalaCup.png',
    '3': 'imgs/3pc-MancalaCup.png',
    '4': 'imgs/4pc-MancalaCup.png',
    '5': 'imgs/5pc-MancalaCup.png',
    '6': 'imgs/6pc-MancalaCup.png',
    '7': 'imgs/7pc-MancalaCup.png',
    '8': 'imgs/8pc-MancalaCup.png',
    '9': 'imgs/9pc-MancalaCup.png',
    '10': 'imgs/10pc-MancalaCup.png',
    '11': 'imgs/11pc-MancalaCup.png',
}


/*----- app's state (variables) -----*/
let board;
let turn;
let winner;

/*----- cached element references -----*/
let gameBoard = document.getElementById('board')
const msgEl = document.getElementById('msg');
const pOneCup = document.querySelectorAll('p1')
const pTwoCup = document.querySelectorAll('p2')
const cupEls = Array.from(document.querySelectorAll('div'))

// add a cached hand element to indicate value in play for player with active turn

/*----- event listeners -----*/
document.querySelector('btn').addEventListener('click', init);
gameBoard.addEventListener('board', playClick)


/*----- functions -----*/
function init() {
    board = [0, 4, 4, 4, 4, 4, 4, 0, 4, 4, 4, 4, 4, 4];
    turn = 1;
    winner = null; // when the game first initializes, there is no winner
    msgEl.innerHTML = "Let's start the game!";
    render ();
};

init();

console.log(board[0].value);
console.log(board[3].value);

function render() {
    winner = getWinner();
    renderBoard();
    // msg.innerHTML = all msgs during game
};

function renderBoard() {
    board.forEach(function(cups, idx) {
        const div = document.getElementById(`cup${idx}`);
    });

}

function playClick(e) {
    const idx = parseInt(evt.target.id.replace('cup', ''));
    if(board[idx] = null || winner) return;
    if(board[idx] >= 1);
    e.target.playerPieces = ??;
    board[idx] = turn;
    turn();
    sequence();
    // if element < 1, return
    // if element > 1, parseInt of the element in index clicked (target id)
    // check end game (if idx)
};

//set the variable "hand" as the recognition of the element's numeric value
    // use parseInt method on the 

// if turn = -1 OR 1, then iterate over array in specific sequence (counter-clockwise)
// is playClick must recognize (parseInt?) the numberic value at that index

function startCup(idx){
    // if turn = 1, startCup can be: board[1] || board[2] || board[3] || board[4] || board[5] || board[6]
    // if turn = -1, startCup can be: board[8] || board[9] || board[10] || board[11] || board[12] || board[13]
    // OR can I say if index >= 1 && index <= 6, 
}

function sequence() {
    //for loop (?) to iterate through the board
}

function turn();
    for (let i = 0; i < 7; i++)

    for (let i = 8; i < 14; i++)


};

function getWinner() {
 for (let i = 0; i < mySide.length; i++) {
    if (mySide.reduce === 0) // <-- indates game over and must calculate/render a winner
    //  then cups on each mySide must be iterated through to calculate the sum + each mancala cup respectively
    else //switch turns: turn *= -1 (?)
};