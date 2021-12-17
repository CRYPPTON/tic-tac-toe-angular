import { AfterViewInit, Component } from '@angular/core';
import { GameEngineService } from 'src/app/core/services';
import { GameSymbol } from 'src/app/shared/enums';
import { Score } from 'src/app/shared/models/score.model';

@Component({
  selector: 'app-tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.scss'],
})
export class TicTacToeComponent implements AfterViewInit {

  //#region Class properties

  board = [];
  score: Score;

  get currentPlayer(): GameSymbol {
    return this.gameEngineService.currentPlayer;
  }

  //public currentPlayer: string;

  //#endregion

  constructor(private gameEngineService: GameEngineService) {
    this.initGameSetup();
  }

  //#region Life cycle hooks

  ngAfterViewInit(): void {
    this.initSetGirdStyleSize();
  }

  //#endregion

  //#region init methods

  private initGameSetup(): void {
    this.initBoard();
    this.initScore();
  }

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

  private initScore(): void {
    this.score = this.gameEngineService.score;
  }

  //#endregion

  //#region UI events

  public onNewGame(): void {
    this.gameEngineService.createNewGame();
  }

  //#endregion

}
