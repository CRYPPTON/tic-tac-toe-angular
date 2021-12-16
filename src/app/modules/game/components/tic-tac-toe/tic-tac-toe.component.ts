import { AfterViewInit, Component } from '@angular/core';
import { GameEngineService } from 'src/app/core/services';
import { GameSymbol } from 'src/app/shared/enums';

@Component({
  selector: 'app-tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.scss'],
})
export class TicTacToeComponent implements AfterViewInit {
  //#region Class properties

  board = [];

  get currentPlayer(): GameSymbol {
    return this.gameEngineService.currentPlayer;
  }

  //public currentPlayer: string;

  //#endregion

  constructor(private gameEngineService: GameEngineService) {
    this.initBoard();
  }

  //#region Life cycle hooks

  ngAfterViewInit(): void {
    this.initSetGirdStyleSize();
  }

  //#endregion

  //#init

  private initSetGirdStyleSize(): void {
    const element = (document.querySelector('.border-game') as HTMLElement);
    element.style.gridTemplateColumns = `repeat(${this.board.length}, 1fr)`;
    element.style.gridTemplateRows = `repeat(${this.board.length}, 1fr)`
  }

  private initBoard(): void {
    for (let i = 0; i < this.gameEngineService.boardSize; i++) {
      this.board.push(Array(this.gameEngineService.boardSize));
    }
  }

  //#endregion

  //#region UI events

  public onNewGame(): void {
    this.gameEngineService.createNewGame();
  }

  //#endregion

}
