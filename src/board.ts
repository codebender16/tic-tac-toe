import Cell from "./cell";

export class Board {
  board: Cell[][];
  emptyCell: number;

  constructor() {
    this.board = [[]];
    this.emptyCell = 0;
  }

  resetBoard() {
    this.board = [
      [new Cell(), new Cell(), new Cell()],
      [new Cell(), new Cell(), new Cell()],
      [new Cell(), new Cell(), new Cell()],
    ];
  }

  setEmptyCells() {
    for (let i = 0; i < this.board.length; i++) {
      this.emptyCell += this.board[i].length;
    }
  }

  isValid(row: number, col: number) {
    if (this.board[row][col].isEmpty()) {
      return true;
    }
    return false;
  }

  updateBoard(row: number, col: number, currentPlayerSymbol: string) {
    const targetCell = this.board[row][col];
    targetCell.updateCell(currentPlayerSymbol);
  }

  private drawState() {
    if (this.emptyCell <= 1) {
      return true;
    }
    return false;
  }

  private winningState(currentPlayerSymbol: string) {
    if (this.winningStateHorizontal(currentPlayerSymbol)) {
      return true;
    }
    if (this.winningStateVertical(currentPlayerSymbol)) {
      return true;
    }
    if (this.winningStateDiagonal(currentPlayerSymbol)) {
      return true;
    }
    return false;
  }

  private winningStateHorizontal(currentPlayerSymbol: string) {
    for (let row = 0; row < this.board.length; row++) {
      if (
        this.board[row][0].isCellTheCurrentPlayerSymbol(currentPlayerSymbol) &&
        this.board[row][1].isCellTheCurrentPlayerSymbol(currentPlayerSymbol) &&
        this.board[row][2].isCellTheCurrentPlayerSymbol(currentPlayerSymbol)
      ) {
        return true;
      }
    }
    return false;
  }

  private winningStateVertical(currentPlayerSymbol: string) {
    for (let row = 0; row < this.board.length; row++) {
      if (
        this.board[row][0].isCellTheCurrentPlayerSymbol(currentPlayerSymbol) &&
        this.board[row][0].isCellTheCurrentPlayerSymbol(currentPlayerSymbol) &&
        this.board[row][0].isCellTheCurrentPlayerSymbol(currentPlayerSymbol)
      ) {
        return true;
      }
      if (
        this.board[row][1].isCellTheCurrentPlayerSymbol(currentPlayerSymbol) &&
        this.board[row][1].isCellTheCurrentPlayerSymbol(currentPlayerSymbol) &&
        this.board[row][1].isCellTheCurrentPlayerSymbol(currentPlayerSymbol)
      ) {
        return true;
      }
      if (
        this.board[row][2].isCellTheCurrentPlayerSymbol(currentPlayerSymbol) &&
        this.board[row][2].isCellTheCurrentPlayerSymbol(currentPlayerSymbol) &&
        this.board[row][2].isCellTheCurrentPlayerSymbol(currentPlayerSymbol)
      ) {
        return true;
      }
    }
    return false;
  }

  private winningStateDiagonal(currentPlayerSymbol: string) {
    if (
      this.board[0][0].isCellTheCurrentPlayerSymbol(currentPlayerSymbol) &&
      this.board[1][1].isCellTheCurrentPlayerSymbol(currentPlayerSymbol) &&
      this.board[2][2].isCellTheCurrentPlayerSymbol(currentPlayerSymbol)
    ) {
      return true;
    }

    if (
      this.board[2][0].isCellTheCurrentPlayerSymbol(currentPlayerSymbol) &&
      this.board[1][1].isCellTheCurrentPlayerSymbol(currentPlayerSymbol) &&
      this.board[0][2].isCellTheCurrentPlayerSymbol(currentPlayerSymbol)
    ) {
      return true;
    }
    return false;
  }
}

export default Board;
