import { Injectable } from '@angular/core';
import { ObservableStore } from '@codewithdan/observable-store';
import { of } from 'rxjs';
import { BoardStoreActions, StoreState } from './store-state.interface';

@Injectable()
export class StoreStateService extends ObservableStore<StoreState> {
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

  constructor() {
    super({ trackStateHistory: true });
    const initialState: StoreState = {
      board: {
        currentState: this.CLEAN_BOARD,
      },
      history: {
        gamesPlayed: [],
      },
      settings: {
        currentDifficulty: 'easy',
        maxTurns: 999999,
      },
    };
    this.setState(initialState, 'INIT_STATE');
  }

  // Board Functions
  getBoard() {
    const { board } = this.getState();
    return of(board.currentState);
  }

  updateBoard(currentBoardState: number[][]) {
    const state = this.getState();
    state.board.currentState = currentBoardState;
    this.setState({ board: state.board }, BoardStoreActions.UpdateBoard);
  }

  resetBoard() {
    const state = this.getState();
    state.board.currentState = this.CLEAN_BOARD;
    this.setState({ board: state.board }, BoardStoreActions.ResetBoard);
  }
}
