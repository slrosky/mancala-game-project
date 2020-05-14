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


/*----- event listeners -----*/
document.getElementById('btn').addEventListener('click', init);
gameBoard.addEventListener('click', playClick)


/*----- functions -----*/
function init() {
    board = [0, 4, 4, 4, 4, 4, 4, 0, 4, 4, 4, 4, 4, 4];
    turn = 1;
    winner = null; // when the game first initializes, there is no winner
    msgEl.innerHTML = `Let's start the game!<br>${playerLookup[turn].name}, you're up!`;
    render();
};

init();


function render() {
    winner = getWinner();
    renderBoard();
    // renderMsg();
};

function renderBoard() {
    board.forEach(function(numPieces, idx) {
        const cupEl = document.getElementById(`cup${idx}`);
        cupEl.style.backgroundImage = `url(imgs/${numPieces}pc-MancalaCup.png)`;
    });
};

// function renderMsg() {
//     if (winner = null) {
//         msgEl.innerHTML = `${playerLookup[turn].name.toUpperCase()}'s</span> Turn`;
//     }
// };

function playClick(e) {
    let idx = parseInt(e.target.id.replace('cup', ''));
    playTurn(idx);
    // getWinner();
    render();
};

function playTurn(idx) {
    if (turn === 1) {
        if (idx > 6 || idx === 0 || board[idx] == 0) {
            return;
        } else {
            playHand(idx);
            changeTurn();
        }
    } else if (turn === -1) {
        if (idx == 0 || idx < 8) {
            return
        } 
        else {
            playHand(idx);
            changeTurn();
        }
    }
};

function playHand(idx) {
    // let clickedSquare = idx;
    playerLookup[turn].hand = board[idx];
    board[idx] = 0;
    while (playerLookup[turn].hand > 0) {
        idx++
        if (idx === board.length) {
            idx = 0
        }
        if ((turn === 1 && idx !== 0) || (turn === -1 && idx !== 7)) {
            board[idx] += 1
        }
        playerLookup[turn].hand -= 1
    }
    if (turn === 1 && idx == 7) {
        changeTurn();
    }
    if (turn === -1 && idx == 0){
        changeTurn();
    } // if (board[idx] > 1 && idx !== 0 && idx !== 7) {
            // console.log('recursive working')
            // playHand(turn, idx)
            //} else {
        //checkMatch(idx)
    //}
};



function changeTurn() {
    turn *= -1;
};

// function checkEndGame() {
//     const playerOneSide = board.slice(1, 7).reduce(function(acc, cur) {
//         return acc + cur
//     }, 0);
//     const playerTwoSide = board.slice(8).reduce(function(acc, cur) {
//         return acc + cur
//     }, 0);
//     if (playerOneSide === 0 || playerTwoSide === 0) {
//     }
//        winner = getWinner();

// };
    
    
function getWinner() {
    let playerOneTotal = board.slice(1, 8).reduce(function(acc, cur) {
        return acc + cur
    }, 0);
    let playerTwoTotal = board.slice(1, 7).reduce(function(acc, cur) {
        return acc + cur
    }, board[0]);
    while (board[0] + board[7] < 48) {
        msgEl.innerHTML = `${playerLookup[turn].name}'s</span> Turn`;
    }
    while (board[0] + board[7] === 48) {
        if (playerOneTotal > playerTwoTotal) {
            msgEl.innerHTML = `CONGRATULATIONS PLAYER ONE<BR> YOU WON!`
            console.log(playerTwoTotal)
        } else if (playerOneTotal < playerTwoTotal) {
            msgEl.innerHTML = `CONGRATULATIONS PLAYER TWO<BR> YOU WON!`
        } else if (playerOneTotal = playerTwoTotal) {
            msgEl.innerHTML = `OOH FUN - A TIE!`
        }
    }
};

// function getWinner(playerOneSide, playerTwoSide) {
//     let playerOneTotal = playerOneSide + board[7];
//     let playerTwoTotal = playerTwoSide + board[0];
//     if (playerOneTotal > playerTwoTotal) {
//         return playerOne
//     } else if (playerOneTotal < playerTwoTotal) {
//         return playerTwo
//     } else {
//         return 'T'
//     }
// };

                            



// function checkMatch(idx) {
    // console.log(idx)
    // complimentNumber[idx] 

    // const complimentNumber = {
    //     1: 13,
    //     2: 12,
    //     3: 11,
    //     4: 10,
    //     5: 9,
    //     6: 8,
    //     13: 1,
    //     12: 2,
    //     11: 3,
    //     8: 6,
        
    //     ...
    //     13: 1} ;
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
// };