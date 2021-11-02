import { IBoard, IHistory, ISettings } from '@shared/models';

export enum BoardStoreActions {
  UpdateBoard = 'UPDATE_BOARD',
  IncreaseTurnCounter = 'INCREASE_TURN_COUNTER',
  IncreaseShipsSunken = 'INCREASE_SHIPS_SUNKEN',
  ResetBoard = 'RESET_BOARD',
  AddGameToHistory = 'ADD_GAME_TO_HISTORY',
  UpdateDifficulty = 'UPDATE_DIFFICULTY',
}

export interface StoreState {
  board: IBoard;
  history: IHistory;
  settings: ISettings;
}
