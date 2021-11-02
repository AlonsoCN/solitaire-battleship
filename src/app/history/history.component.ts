import { Component, OnInit } from '@angular/core';
import { StoreStateService } from '@core/store/store-state.service';
import { IGameSession } from '@shared/models';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
})
export class HistoryComponent implements OnInit {
  gamesPlayed!: IGameSession[];

  constructor(private storeStateService: StoreStateService) {}

  ngOnInit(): void {
    this.storeStateService.getHistory().subscribe((history) => {
      this.gamesPlayed = history.gamesPlayed;
    });
  }
}
