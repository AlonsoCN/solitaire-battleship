import { Injectable } from '@angular/core';
import { IBoard, TileState, XYCoords } from '@shared/models';

@Injectable({
  providedIn: 'root',
})
export class BoardService {
  CLEAN_BOARD = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];

  generateInitBoard(shipsNumber: number): number[][] {
    // Force Cloning
    const board = JSON.parse(JSON.stringify(this.CLEAN_BOARD));
    for (let i = 0; i <= shipsNumber - 1; i++) {
      let successShipDrop = false;
      while (!successShipDrop) {
        const xyCoords: XYCoords = this.generateRandomXY();
        const { x, y } = xyCoords;
        if (board[x][y] === 0) {
          board[x][y] = TileState.SHIP;
          successShipDrop = true;
        }
      }
    }
    return board;
  }

  checkShipCollision(board: number[][], xyCoords: XYCoords) {
    const { x, y } = xyCoords;
    return board[x][y] === TileState.SHIP;
  }

  checkValidCollision(board: number[][], xyCoords: XYCoords) {
    const { x, y } = xyCoords;
    return board[x][y] === TileState.EMPTY || board[x][y] === TileState.SHIP;
  }

  hitShip(board: IBoard, xyCoords: XYCoords) {
    const { x, y } = xyCoords;
    board.currentBoardState[x][y] = TileState.SUNKEN_PART_OF_SHIP;
    board.shipsSunken += 1;
  }

  bulletMissed(board: number[][], xyCoords: XYCoords) {
    const { x, y } = xyCoords;
    board[x][y] = TileState.MISSED_SHOT;
  }

  private generateRandomXY(): XYCoords {
    const boardSize = 10;
    return {
      x: this.getRandomInt(boardSize),
      y: this.getRandomInt(boardSize),
    };
  }

  private getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }
}
