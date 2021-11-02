export enum TileState {
  EMPTY = 0,
  SUNKEN_PART_OF_SHIP = 1,
  MISSED_SHOT = 2,
  SHIP = 3,
}

export interface XYCoords {
  x: number;
  y: number;
}
export interface IBoard {
  currentBoardState: number[][];
  currentTurn: number;
  shipsSunken: number;
}
