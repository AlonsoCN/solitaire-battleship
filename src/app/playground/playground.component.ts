import { Component, OnInit } from '@angular/core';
import { BoardService } from '@core/services/board.service';
import { StoreStateService } from '@core/store/store-state.service';
import { IBoard, ISettings, XYCoords } from '@shared/models';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.scss'],
})
export class PlaygroundComponent implements OnInit {
  board: IBoard = null!;
  settings: ISettings = null!;
  toasterInfo: {
    title: string;
    message: string;
    type: 'success' | 'error' | 'warning';
    isShown: boolean;
  } = {
    title: 'Title',
    message: 'Message',
    type: 'success',
    isShown: false,
  };
  hasWon = false;
  hasLose = false;

  constructor(private storeStateService: StoreStateService, private boardService: BoardService) {}

  ngOnInit(): void {
    this.loadBoardAndStatus();
    this.loadSettings();
    this.checkWinLoseCondition();
  }

  tileClicked(xyCoords: XYCoords) {
    if (!this.hasWon && !this.hasLose) {
      const { currentBoardState } = this.board;
      const { checkShipCollision, checkValidCollision, hitShip, bulletMissed } = this.boardService;

      if (checkValidCollision(currentBoardState, xyCoords)) {
        if (checkShipCollision(currentBoardState, xyCoords)) {
          hitShip(this.board, xyCoords);
          this.storeStateService.increaseShipSunken();
          this.showToaster('Wuuu!', 'Haz asertado!', 'success');
        } else {
          bulletMissed(currentBoardState, xyCoords);
          this.showToaster('Oops!', 'Haz fallado!', 'error');
        }
        this.board.currentTurn++;
        this.storeStateService.updateBoard(currentBoardState);
        this.storeStateService.increaseTurnCounter();
        this.checkWinLoseCondition(true);
      } else {
        this.showToaster('!!!', 'Elige otra opción', 'warning');
      }
    }
  }

  resetGameSession() {
    this.hasLose = false;
    this.hasWon = false;
    this.toasterInfo.isShown = false;
    this.storeStateService.resetBoard();
    this.loadBoardAndStatus();
  }

  private checkWinLoseCondition(recordGame: boolean = false) {
    if (this.board.shipsSunken === this.settings.shipsAvailable) {
      // if (this.board.shipsSunken === 1) {
      this.hasWon = true;
      this.showToaster('GANASTE!', 'Hundiste todos los barcos!', 'success');
      if (recordGame) {
        this.recordGame();
      }
    } else if (this.board.currentTurn >= this.settings.maxTurns) {
      // } else if (this.board.currentTurn >= 3) {
      this.hasLose = true;
      this.showToaster('PERDISTE!', 'Se te acabaron los turnos', 'error');
      if (recordGame) {
        this.recordGame();
      }
    }
  }

  private recordGame() {
    this.storeStateService.addGameToHistory({
      hasWon: this.hasWon,
      usedTurns: this.board.currentTurn,
      settings: this.settings,
    });
  }

  private loadBoardAndStatus() {
    this.storeStateService.getBoardState().subscribe((board: IBoard) => {
      this.board = board;
    });
  }

  private loadSettings() {
    this.storeStateService.getSettings().subscribe((settings: ISettings) => {
      this.settings = settings;
    });
  }

  private showToaster(title: string, message: string, type: 'success' | 'warning' | 'error') {
    this.toasterInfo = {
      title,
      message,
      type,
      isShown: true,
    };
  }
}
