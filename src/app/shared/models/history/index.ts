import { ISettings } from '..';

export interface IGameSession {
  hasWon: boolean;
  usedTurns: number;
  settings: ISettings;
}

export interface IHistory {
  gamesPlayed: IGameSession[];
}
