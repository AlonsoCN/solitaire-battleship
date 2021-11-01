export type difficultyTypes = 'easy' | 'regular' | 'hard' | 'custom';

export interface ISettings {
  currentDifficulty: difficultyTypes;
  maxTurns: number;
}
