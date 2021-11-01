import { IBoard, IHistory, ISettings } from '@shared/models';

export enum BoardStoreActions {
  UpdateBoard = 'UPDATE_BOARD',
  ResetBoard = 'RESET_BOARD',
}

export interface StoreState {
  board: IBoard;
  history: IHistory;
  settings: ISettings;
}
