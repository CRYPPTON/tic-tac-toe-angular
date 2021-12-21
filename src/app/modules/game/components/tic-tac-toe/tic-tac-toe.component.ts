import { AfterViewInit, Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { GameEngineService, InformationDialogService } from 'src/app/core/services';
import { GameSymbol, InformationDialogType } from 'src/app/shared/enums';
import { Score } from 'src/app/shared/models/score.model';

@Component({
  selector: 'app-tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.scss'],
})
export class TicTacToeComponent implements AfterViewInit {

  //#region Class properties

  board = [];

  public get currentPlayer(): GameSymbol {
    return this.gameEngineService.currentPlayer;
  }

  public get score(): Score {
    return this.gameEngineService.score;
  }

  public get gameSymbols(): typeof GameSymbol {
    return GameSymbol;
  }

  public get isUndo(): boolean {
    return this.gameEngineService.isUndo;
  }

  //public currentPlayer: string;

  //#endregion

  constructor(
    private infomationDialogService: InformationDialogService,
    private gameEngineService: GameEngineService,
    private translateService: TranslateService
  ) {
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

  //#endregion

  //#region UI events

  public onNewGame(): void {
    this.gameEngineService.createNewGame();
  }

  public onResetGame = async (): Promise<void> => {

    const result = await this.infomationDialogService.showDialog(
      this.translateService.instant('dialogs.reset'), InformationDialogType.reset);

    if (result) {
      this.gameEngineService.resetGame();
    }

    // .subscribe(
    //   (result) => {
    //     if (result) {
    //       this.gameEngineService.resetGame();
    //     }
    //   }
    // );
  }

  public onUndo(): void {
    this.gameEngineService.undo();
  }

  //#endregion

}
