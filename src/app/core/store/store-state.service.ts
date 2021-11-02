import { Injectable } from '@angular/core';
import { ObservableStore } from '@codewithdan/observable-store';
import { BoardService } from '@core/services/board.service';
import { IGameSession } from '@shared/models';
import { of } from 'rxjs';
import { BoardStoreActions, StoreState } from './store-state.interface';

@Injectable({
  providedIn: 'root',
})
export class StoreStateService extends ObservableStore<StoreState> {
  SHIPS_TO_DESTROY = 10;

  constructor(private boardService: BoardService) {
    super({ trackStateHistory: true });
    const initialState: StoreState = {
      board: {
        currentBoardState: this.boardService.generateInitBoard(this.SHIPS_TO_DESTROY),
        currentTurn: null!,
        shipsSunken: 0,
      },
      history: {
        gamesPlayed: [],
      },
      settings: {
        currentDifficulty: 'easy',
        maxTurns: 100,
        shipsAvailable: this.SHIPS_TO_DESTROY,
      },
    };
    this.setState(initialState, 'INIT_STATE');
  }

  // Board Functions
  getBoardState() {
    const { board } = this.getState();
    return of(board);
  }

  updateBoard(currentBoardState: number[][]) {
    const state = this.getState();
    state.board.currentBoardState = currentBoardState;
    this.setState({ board: state.board }, BoardStoreActions.UpdateBoard);
  }

  increaseTurnCounter() {
    const state = this.getState();
    state.board.currentTurn += 1;
    this.setState({ board: state.board }, BoardStoreActions.IncreaseTurnCounter);
  }

  increaseShipSunken() {
    const state = this.getState();
    state.board.shipsSunken += 1;
    this.setState({ board: state.board }, BoardStoreActions.IncreaseShipsSunken);
  }

  resetBoard() {
    const state = this.getState();
    state.board.currentBoardState = this.boardService.generateInitBoard(this.SHIPS_TO_DESTROY);
    state.board.currentTurn = 0;
    state.board.shipsSunken = 0;
    this.setState({ board: state.board }, BoardStoreActions.ResetBoard);
  }

  // History functions
  getHistory() {
    const { history } = this.getState();
    return of(history);
  }

  addGameToHistory(gameSession: IGameSession) {
    const state = this.getState();
    state.history.gamesPlayed.push(gameSession);
    this.setState({ history: state.history }, BoardStoreActions.AddGameToHistory);
  }

  // Settings functions
  getSettings() {
    const { settings } = this.getState();
    return of(settings);
  }

  updateDifficulty(difficulty: 'easy' | 'regular' | 'hard') {
    const state = this.getState();
    state.settings.currentDifficulty = difficulty;
    if (difficulty === 'easy') {
      state.settings.maxTurns = 100;
    } else if (difficulty === 'regular') {
      state.settings.maxTurns = 70;
    } else if (difficulty === 'hard') {
      state.settings.maxTurns = 40;
    }
    this.setState({ settings: state.settings }, BoardStoreActions.UpdateDifficulty);
  }
}
