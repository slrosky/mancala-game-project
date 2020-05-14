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
let isWinner = false;

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
    winner = null;
    render();
};

init();


function render() {
    renderBoard();
    if (isWinner === false) {
        msgEl.innerHTML = `${playerLookup[turn].name}'s</span> Turn`;
    }
};

function renderBoard() {
    board.forEach(function(numPieces, idx) {
        const cupEl = document.getElementById(`cup${idx}`);
        cupEl.style.backgroundImage = `url(imgs/${numPieces}pc-MancalaCup.png)`;
    });
};

function playClick(e) {
    let idx = parseInt(e.target.id.replace('cup', ''));
    playTurn(idx);
    checkEndGame();
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
        if (idx === 0 || idx < 8) {
            return
        } 
        else {
            playHand(idx);
            changeTurn();
        }
    }
};

function playHand(idx) {
    console.log(board);
    playerLookup[turn].hand = board[idx];
    board[idx] = 0;
    while (playerLookup[turn].hand > 0) {
        idx++
        if (idx === board.length) {
            console.log(board)
            idx = 0
        }
        console.log(playerLookup[turn].hand)
        board[idx] += 1;
        playerLookup[turn].hand -= 1
    }
    if (turn === 1 && idx === 7) {
        console.log(board)
        changeTurn();
    }
    if (turn === -1 && idx === 0){
        console.log(board)
        changeTurn();
    }
};


function changeTurn() {
   var sum = board.reduce((a, e) => a + e, 0);
   console.log(sum);
    turn *= -1;
};

function checkEndGame() {
    console.log(board.slice(1, 7))
    console.log(board.slice(8))
    const playerOneSide = board.slice(1, 7).reduce(function(acc, cur) {
        return acc + cur
    }, 0);
    console.log(playerOneSide);
    const playerTwoSide = board.slice(8).reduce(function(acc, cur) {
        return acc + cur
    }, 0);
    console.log(playerTwoSide);
    if (playerOneSide == 0 || playerTwoSide == 0) {
        winner = getWinner(playerOneSide, playerTwoSide);
    }
};
    
    
function getWinner(playerOneSide, playerTwoSide) {
        let playerOneTotal = playerOneSide + board[7];
        let playerTwoTotal = playerTwoSide + board[0];
        isWinner = true;
        if (playerOneTotal > playerTwoTotal) {
            msgEl.innerHTML = `CONGRATULATIONS PLAYER ONE<BR> YOU WON!`;
            } else if (playerOneTotal < playerTwoTotal) {
                msgEl.innerHTML = `CONGRATULATIONS PLAYER TWO<BR> YOU WON!`;
            } else if (playerOneTotal === playerTwoTotal) {
                msgEl.innerHTML = `OOH FUN - A TIE!`;
            }
};