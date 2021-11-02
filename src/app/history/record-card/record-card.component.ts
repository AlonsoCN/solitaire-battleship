import { Component, Input, OnInit } from '@angular/core';
import { IGameSession } from '@shared/models';

@Component({
  selector: 'app-record-card',
  templateUrl: './record-card.component.html',
  styleUrls: ['./record-card.component.scss'],
})
export class RecordCardComponent implements OnInit {
  @Input() gameSession!: IGameSession;

  constructor() {}

  ngOnInit(): void {}
}
