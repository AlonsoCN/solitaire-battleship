import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { XYCoords } from '@shared/models';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  @Input() currentBoardState!: number[][];
  @Output() tileClicked = new EventEmitter<XYCoords>();

  constructor() {}

  ngOnInit(): void {}

  fire(event: any) {
    const id: string = event.target.id; // Id with format: `{X Coordinate}x{Y Coordinate}`
    const [x, y] = id.split('x');
    this.tileClicked.emit({ x: +x, y: +y });
  }
}
