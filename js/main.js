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
    turn = -1;
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
    turn *= -1;
};

function renderBoard() {
    board.forEach(function(cups, idx) {
        const div = document.getElementById(`cup${idx}`);
    });
}

function playClick(e) {
    // const idx = cupEls.indexOf(e.target)
    let idx = parseInt(e.target.id.replace('cup', ''));
    if (turn === 1) {
        if (idx > 6 || idx === 0) {
            return
        // } else if (idx == 0) {
        //     return
        } else {
            playerLookup[1].hand = board[idx]
            board[idx] = 0;
            while (playerLookup[1].hand > 0) {
                idx++
                if (idx === board.length) {
                    idx = 0
                }
                board[idx] += 1
                playerLookup[1].hand -= 1
            }
            // for (let i = 1; i <= board[idx]; i++) {
            //     board[idx+i] += 1 //add modulo to control loop to skip 
            // }
            // if (playerLookup[1].hand = 0 && idx > 1) {
                
                //
            //}
            console.log(board)
        }
        //
    }
    if (turn === -1) {
        if (idx == 0 || idx <= 8) {
            return
        } else {
            playerLookup[-1].hand = board[idx]
            board[idx] = 0;
            while (playerLookup[-1].hand > 0) {
                idx++
                if (idx === board.length) {
                    idx = 0
                }
                board[idx] += 1
                playerLookup[-1].hand -= 1
            }
            console.log(board)
        }
    }
    board[idx];
    //    var pieceCount = document.getElementById(cups[i]);
    // console.log(pieceCount);
    
    // console.log(board[idx],value);
    console.log(board[idx]);
    // if(board[idx].value = 0 || winner) return;
    // if(board[idx].value >= 1);
    // e.target.playerPieces = ??;
    // board[idx] = turn;
    // turn(); // is this the simple turn *= -1 (?) to swap the turn, because turn has to be associated with mySide
    // sequence();
    // if element value < 1, return
    // if element > 1, parseInt of the element in index clicked (target id)
    // check end game (if idx = 0 at all mySide (do I need to Math.abs and sum the arrays?), game is over)
    render();
};

//set the variable "hand" as the recognition of the element's numeric value
    // use parseInt method on the 

// if turn = -1 OR 1, then iterate over array in specific sequence (counter-clockwise)
// is playClick must recognize (parseInt?) the numberic value at that index


// function turn() {
//     for (let i = 0; i < 7; i++)

//     for (let i = 8; i < 14; i++)


// };

// function getWinner() {
//  for (let i = 0; i < mySide.length; i++) {
//     if (mySide.reduce === 0) // <-- indates game over and must calculate/render a winner
//     //  then cups on each mySide must be iterated through to calculate the sum + each mancala cup respectively
//     else //switch turns: turn *= -1 (?)
// };