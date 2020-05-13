console.log('page loaded')
/*----- constants -----*/
const playerLookup = {
    '1': {
        name: 'Player One',
        hand: 0,
        mySide: []
    },
    '-1': {
        name: 'Player Two',
        hand: 0,
        myside: []
    },
  }

/*----- app's state (variables) -----*/
let board;
let turn;
let winner;

/*----- cached element references -----*/
let gameBoard = document.getElementById('board')
const msgEl = document.getElementById('msg');


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
    render();
};

init();
    console.log(board);

function render() {
    winner = getWinner();
    renderBoard();
    // if (winner) {
    //     if (winner === 'T') {
    //       msgEl.innerHTML = "It's a Tie!";
    //     } else {
    //       msgEl.innerHTML = `${playerLookup[winner].toUpperCase()} CONGRATULATIONS<BR> YOU WON!`;
    //     }
    //   } else {
    //     // Show whose turn it currently is
    //     msgEl.innerHTML = `${playerLookup[turn].toUpperCase()}'s</span> Turn`;
    //   }
    // };
    if ()
};

function renderBoard() {
    board.forEach(function(numPieces, idx) {
        const cupEl = document.getElementById(`cup${idx}`);
        cupEl.style.backgroundImage = `url(imgs/${numPieces}pc-MancalaCup.png)`;
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
            playHand(idx);
            if (idx === 7) {
                playClick();
            }
            if (board[idx] > 1 && idx > 6 || idx === 0 || board[idx] == 0) {
                playHand(idx);
            }
            changeTurn();
            console.log(board)
        }
    } else if (turn === -1) {
        if (idx == 0 || idx < 8) {
            return
        } 
        else {
            playHand(idx);
            // checkEndGame(idx);
            changeTurn();
            console.log(board)
        }
    }
};

function playHand(idx) {
    playerLookup[turn].hand = board[idx];
    board[idx] = 0;
    while (playerLookup[turn].hand > 0) {
        idx++
        if (idx === board.length) {
            idx = 0
        }
        if ((turn === 1 && idx !== 0) || (turn === -1 && idx !== 7)) {
            board[idx] += 1
            // console.log('IDX', idx)
            // console.log('cup value', board[idx])
            // console.log('PLAYERHAND', playerLookup[turn].hand)
        }
        playerLookup[turn].hand -= 1
    }
    if (board[idx] > 1 && idx !== 0 && idx !== 7) {
        console.log('recursive working')
        playHand(turn, idx)
    } //else {
        //checkMatch(idx)
    //}
}


function checkSide() {
    if (playerLookup[turn] === 1) {
        playerLookup.mySide.push(idx[1], idx[2], idx[3], idx[4], idx[5], idx[6]);
    } else {
        playerLookup.mySide.push(idx[8], idx[9], idx[10], idx[11], idx[12], idx[13])
    }
console.log(myside)
}
// function breakTurn(idx) {
//     if (idx === 7)
// };

// function 

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

function changeTurn() {
    turn *= -1;
}

function checkEndGame(idx) {
    let sum = 0;
    if (idx === 7 || idx === 0) {
        for (let idx = 1; idx < 8 ; idx++) {
            sum += board[idx]
        }
    };
    if (idx === 7 || idx === 0) {
        for (let idx = 8; idx <= 13 ; idx++) {
            sum += board[idx];
        }
        console.log('here is the total of the side', sum)
    }
};

function getWinner() {
    let playerTotal = board.reduce(function(a, b){
        return a + b;
    })
};


//  let playerTwoTotal = 0;
//     for (let idx = 0; idx < board.length; idx++) {
//     if (mySide.reduce === 0) // <-- indates game over and must calculate/render a winner
//     //  then cups on each mySide must be iterated through to calculate the sum + each mancala cup respectively
//     else //switch turns: turn *= -1 (?)
//     return 'T';

// };