console.log('page loaded')
/*----- constants -----*/
const playerLookup = {
    '1': {
        name: 'Player One',
        hand: 0,
    },
    '-1': {
        name: 'Player Two',
        hand: 0,
    },
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

console.log('hello',gameBoard)
/*----- event listeners -----*/
document.getElementById('btn').addEventListener('click', init);
gameBoard.addEventListener('click', playClick)


/*----- functions -----*/
function init() {
    board = [0, 4, 4, 4, 4, 4, 4, 0, 4, 4, 4, 4, 4, 4];
    turn = 1;
    winner = null; // when the game first initializes, there is no winner
    msgEl.innerHTML = "Let's start the game!";
    renderBoard();
    render ();
};

init();
    console.log(board);

function render() {
    // winner = getWinner();
    // msg.innerHTML = all msgs during game
    renderBoard();
};

function renderBoard() {
    board.forEach(function(idx) {
        idx = board[idx];
        // const cups = document.getElementById(`cup${idx}`);
    });
}

function playClick(e) {
    // const idx = cupEls.indexOf(e.target)
    let idx = parseInt(e.target.id.replace('cup', ''));
    playTurn(idx);
    render();
};

function playTurn(idx) {
    console.log('hitting', turn)
    if (turn === 1) {
        if (idx > 6 || idx === 0 || board[idx] == 0) {
            return;
        } else {
            playHand(turn, idx);
            changeTurn();
            checkMatch();
            console.log(board)
        }
    } else if (turn === -1) {
        if (idx == 0 || idx <= 8) {
            return
        } 
        else {
            playHand(turn, idx);
            changeTurn();
            checkMatch()
            console.log(board)
        }
    }
};

function playHand(turn, idx) {
    playerLookup[turn].hand = board[idx];
    board[idx] = 0;
    while (playerLookup[turn].hand > 0) {
        idx++
        if (idx === board.length) {
            idx = 0
        }
        if ((turn === 1 && idx !== 0) || (turn === -1 && idx !== 7)) {
            board[idx] += 1
            playerLookup[turn].hand -= 1
            // console.log('IDX', idx)
            // console.log('cup value', board[idx])
            // console.log('PLAYERHAND', playerLookup[turn].hand)
        }
    }
    if (board[idx] > 1 && idx !== 0 && idx !== 7) {
        console.log('recursive working')
        playHand(turn, idx)
    } else {
        checkMatch(idx)
    }
}

// function breakTurn(idx) {
//     if (idx === 7)
// };

// function 

function checkMatch(idx) {
    console.log(idx)
    complimentNumber[idx] 

    const complimentNumber = {
        1: 13,
        2: 12,
        3: 11,
        4: 10,
        5: 9,
        6: 8,
        13: 1,
        12: 2,
        11: 3,
        8: 6,
        
        ...
        13: 1} ;
    // board[ complimentNumber[idx] ] = if there’s piece here, add it to the current player
    // if (turn === 1) {
    //     if  (board[1] < board[13] || board[2] < board[12] || board[3] < board[11] || board[4] < board[10] || board[5] < board[9] || board[6] < board[8]) {
    //     //add value of board to board[7]
    //     }
    // }
    // if (turn === -1) {
    //     if  (board[13] < board[1] || board[12] < board[2] || board[11] < board[3] || board[10] < board[4] || board[9] < board[5] || board[8] < board[6]) {
    //     //add value of board[idx] to board[idx][7]
    // }
};

function changeTurn() {
    turn *= -1;
}

// function checkEndGame(idx) {
//     if ()
//     for (let idx = 1; idx < 7; idx++) {
//         if (board[idx] = 1) {
//     } else if ((board[idx] > 1) {
//         return;
//     };
// };

// function getWinner() {
//  let playerOneTotal = 0;
//  let playerTwoTotal = 0;
//     for (let idx = 0; idx < board.length; idx++) {
//     if (mySide.reduce === 0) // <-- indates game over and must calculate/render a winner
//     //  then cups on each mySide must be iterated through to calculate the sum + each mancala cup respectively
//     else //switch turns: turn *= -1 (?)
//     return 'T';

// };