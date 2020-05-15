# Mancala
### Mancala is considered to be one of the (historically) oldest games still played in modern times. Variations of the game are played all over the world, from India, to Ethiopia, to Egypt, to the Caribbean, and the Americas. Similarities among the many variations used today include the folowing elements:
##### 1. A board or solid substrate that includes parallel rows of hollowed out pods to house playing pieces, and...
##### 2. 48 playing pieces traditionally made of stone or glass (most commonly marbles).
### It is a simple, but important game of strategy that has stood the test of time.



## Views During Play
Upon initializing the game, user will see a rendered game board including all starting pieces in their rightful locations. Additionally, *Player One* and *Player Two* are both indicated on the side of the board their turns will need to originate from.
![Mancala initialized board](https://i.imgur.com/qWlOpDo.png)

A clear message above the board indicates whose turn it is.
![Turn message](https://i.imgur.com/fXg7jSd.png)

When a player wins, a congratulatory message is displayed. Rejoice in your win!
![Win Message](https://i.imgur.com/h3Yz3MZ.png)

A button lies below the board to restart your game at any point (during a game or after a win).
![Refresh button](https://i.imgur.com/bSlCGJ7.png)




## Technologies Used:
- JavaScript
- CSS
- HTML




## Getting Started:
Time to play [Mancala](https://slrosky.github.io/mancala-game-project/)

In Mancala, there are several rules that must be honored to move and score "points".

**Game Play Steps**

- Player in turn can click on any cup on their side of the board as long as their are player pieces in it (zero pieces in a cup means it is an invalid cup and cannot be played).
- The number of player pieces in a clicked cup will be stored in a hand and then played in a counter clockwise fashion, setting 1 pieces in each following cup until  the original hand is empty.
⋅⋅* If a player's hand still has pieces in it after they've contributed to their Mancala Cup, they must continue the play around the board, placing pieces in their opponent's cups in the continuation of the counterclickwise path until their hand is empty.

**Game Rules**

- The Mancala Cups (larger scoring cups) on either end of the board belong to each player respectively
⋅⋅* The left Mancala Cup belongs to Player One and the Right Mancala Cup belongs to Player Two
- During a player's turn, they can only contribute to their own Mancala Cup when applying their play to the board, but must deposit player pieces in the the opponent's playing cups is their hand still contains stone.
- If the last stone of the player's turn lands in their Mancala Cup, they get a bonus play and can click on any cup on their side of the board as long as they have stones in it. Counter-clockwise path applies to all plays.

**Scoring**

- A game ends when one of the players has no more pieces on their side of the board, *however*, the player pieces left over on the other player's side of the board are added to their Mancala Cup.
__*The player with the high score wins*__



## Next Steps:
In a perfect world, with no project deadlines, all of the following elements would be included in initial deployment. As of now, they will be added at a later time to both optimize the player experience and entice would-be mancala players to pick up a game.
- Add Additional Rule Logic
- Add music upon load
- Add initial message (preferably in a pop up) that shares a welcome message
- Apply responsive design (media queries)