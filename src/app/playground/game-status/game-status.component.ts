import { Component, Input, OnInit } from '@angular/core';
import { difficultyTypes } from '@shared/models';

@Component({
  selector: 'app-game-status',
  templateUrl: './game-status.component.html',
  styleUrls: ['./game-status.component.scss'],
})
export class GameStatusComponent implements OnInit {
  @Input() currentTurn!: number;
  @Input() maxTurns!: number;
  @Input() difficultyMode!: difficultyTypes;

  constructor() {}

  ngOnInit(): void {}
}
