import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { GameSymbol, InformationDialogType } from '@app-enums';
import { GameEngineHandlerError } from '@app-error-handlers';

@Injectable({
  providedIn: 'root'
})
export class GameEngineService {
  //#region Class properties

  gameOver: boolean;
  currentPlayer: GameSymbol;
  gameBoard: Array<GameSymbol[]>;
  winner: GameSymbol;

  //#endregion

  constructor(private translateService: TranslateService) {
    this.createNewGame();
  }

  //#region Init

  private initCreateGame(): void {
    this.gameOver = false;

    this.currentPlayer = GameSymbol.X;

    this.gameBoard = this.createBoard();

    this.winner = null;
  }

  //#endregion

  //#region Game utility

  private createBoard(): Array<GameSymbol[]> {
    return [
      new Array(3),
      new Array(3),
      new Array(3),
    ];
  }

  private changeCurrentPlayer(): void {
    if (this.currentPlayer === GameSymbol.X) {
      this.currentPlayer = GameSymbol.O;
    } else {
      this.currentPlayer = GameSymbol.X;
    }
  }

  private setBoard(row: number, col: number): void {
    this.gameBoard[row][col] = this.currentPlayer;
  }

  //#endregion

  //#region Game check exceptions

  public checkAllRule(row: number, col: number): void {
    this.exceptionGameOver(this.gameOver);
    this.exceptionInvalidMove(row, col);

  }

  private exceptionInvalidMove(row: number, col: number): void {
    if (this.gameBoard[row][col] != undefined) {
      throw new GameEngineHandlerError(
        this.translateService.instant('exceptions.invalidMove'),
        InformationDialogType.failure);
    }
  }

  private exceptionGameOver(gameOver: boolean): void {
    if (gameOver) {
      throw new GameEngineHandlerError(
        this.translateService.instant('exceptions.startNewGame'),
        InformationDialogType.failure);
    }
  }

  private exceptionWin(winner: GameSymbol): void {
    throw new GameEngineHandlerError(
      this.translateService.instant('exceptions.win') + ' ' + winner,
      InformationDialogType.success);
  }

  private checkWin(): void {
    let boardLength = this.gameBoard.length;
    let countSymbolsRow: number = 0;
    let countSymbolsCol: number = 0;
    let countSymbolsMainDiagonal: number = 0;
    let countSymbolsSecondaryDiagonal: number = 0;

    for (let i = 0; i < boardLength; i++) {
      countSymbolsRow = 0;
      countSymbolsCol = 0;

      for (let j = 0; j < boardLength; j++) {

        // check rows.
        if (this.gameBoard[i][0] === this.gameBoard[i][j] && this.gameBoard[i][j]) {
          countSymbolsRow++;
          if (countSymbolsRow === boardLength) {
            this.winner = this.gameBoard[i][j];
            break;
          }
        }

        // check columns.
        if (this.gameBoard[0][i] === this.gameBoard[j][i] && this.gameBoard[j][i]) {
          countSymbolsCol++;
          if (countSymbolsCol === boardLength) {
            this.winner = this.gameBoard[j][i];
            break;
          }
        }
      }

      // check main diagonal
      if (this.gameBoard[0][0] === this.gameBoard[i][i] && this.gameBoard[i][i]) {
        countSymbolsMainDiagonal++;
        if (countSymbolsMainDiagonal === boardLength) {
          this.winner = this.gameBoard[0][0];
        }
      }

      //check secondary diagonal
      if (this.gameBoard[0][boardLength - 1] === this.gameBoard[i][boardLength - 1 - i]
        && this.gameBoard[i][boardLength - 1 - i]) {
        countSymbolsSecondaryDiagonal++;
        if (countSymbolsSecondaryDiagonal === boardLength) {
          this.winner = this.gameBoard[0][boardLength - 1];
        }
      }

      if (this.winner) {
        this.gameOver = true;
        this.exceptionWin(this.winner);
        break;
      }
    }
  }

  //#endregion

  //#region Game functionality

  public createNewGame(): void {
    this.initCreateGame();
  }

  public play(row: number, col: number): void {

    this.checkAllRule(row, col);

    this.setBoard(row, col);

    this.checkWin();

    this.changeCurrentPlayer();
  }

  //#endregion

}
