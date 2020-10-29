enum State {
  Empty = "EMPTY",
  X = "X",
  O = "O",
}

export class Cell {
  cellState: State;

  constructor() {
    this.cellState = State.Empty;
  }

  updateCell(currentPlayerSymbol: string) {
    if (currentPlayerSymbol === "X") {
      this.cellState = State.X;
    } else if (currentPlayerSymbol === "O") {
      this.cellState = State.O;
    }
  }

  isEmpty() {
    if (this.cellState !== State.Empty) {
      return false;
    }
    return true;
  }

  isCellTheCurrentPlayerSymbol(currentPlayerSymbol: string) {
    if (this.cellState !== currentPlayerSymbol) {
      return false;
    }
    return true;
  }
}

export default Cell;
