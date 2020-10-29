import Board from "./board";
import Player from "./player";

export class Game {
  game: Board;
  playerX: Player;
  playerO: Player;
  currentPlayer: Player;

  constructor(
    playerXName: string,
    playerXSymbol: string,
    playerOName: string,
    PlayerOSymbol: string
  ) {
    this.game = new Board();
    this.playerX = new Player(playerXName, playerXSymbol);
    this.playerO = new Player(playerOName, PlayerOSymbol);
    this.currentPlayer = this.playerX;
  }

  createGame() {
    this.game.resetBoard();
    this.game.setEmptyCells();
  }

  updateCurrentPlayer() {
    if (this.currentPlayer === this.playerX) {
      this.currentPlayer = this.playerO;
    } else {
      this.currentPlayer = this.playerX;
    }
  }

  currentPlayerMove(row: number, col: number, playerSymbol: string) {
    if (
      this.currentPlayer.symbol === playerSymbol &&
      this.game.isValid(row, col)
    ) {
      this.game.updateBoard(row, col, playerSymbol);
      // update game status
    }
  }

  updateGameStatus(playerSymbol) {}
}

export default Game;

const game = new Game("A", "X", "B", "O");
game.createGame();

// set status

// create a Game with an empty board
// create 2 players , each assigned with a symbol
// create a status to keep track of the Game

// check for winning after each move by a player
// winning - vertical, diagonal and horizontal

// check for draw
