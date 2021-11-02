import { Component, OnInit } from '@angular/core';
import { StoreStateService } from '@core/store/store-state.service';
import { ISettings } from '@shared/models';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
  settings!: ISettings;
  currentDifficulty!: string;

  constructor(private storeStateService: StoreStateService) {}

  ngOnInit(): void {
    this.storeStateService.getSettings().subscribe((settings) => {
      this.settings = settings;
      this.currentDifficulty = this.settings.currentDifficulty;
    });
  }

  handleDifficultyChange(difficulty: 'easy' | 'regular' | 'hard') {
    this.storeStateService.updateDifficulty(difficulty);
    this.storeStateService.resetBoard();
  }
}
