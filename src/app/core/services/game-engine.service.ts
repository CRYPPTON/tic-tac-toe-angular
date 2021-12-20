import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { GameSymbol, InformationDialogType } from '@app-enums';
import { GameEngineHandlerError } from '@app-error-handlers';
import { Score } from '@app-models';

@Injectable({
  providedIn: 'root'
})
export class GameEngineService {

  //#region Class properties

  gameOver: boolean;
  currentPlayer: GameSymbol;
  gameBoard: Array<GameSymbol[]>;
  winner: GameSymbol;
  boardSize: number;
  score: Score;

  //#endregion

  constructor(private translateService: TranslateService) {
    this.score = { [GameSymbol.X]: 0, [GameSymbol.O]: 0 };
    this.createNewGame();
  }

  //#region Game functionality

  public createNewGame(): void {
    this.initCreateGame();
  }

  public play(row: number, col: number): void {

    this.checkForErrors(row, col);

    this.setBoard(row, col);

    this.checkWin();

    this.changeCurrentPlayer();
  }

  //#endregion

  //#region Init

  private initCreateGame(): void {
    this.boardSize = 3;

    this.gameOver = false;

    this.currentPlayer = GameSymbol.X;

    this.gameBoard = this.createBoard();

    this.winner = null;
  }

  //#endregion

  //#region Game utility

  public resetGame(): void {
    this.score = { [GameSymbol.X]: 0, [GameSymbol.O]: 0 };
    this.createNewGame();
  }

  private createBoard(): Array<GameSymbol[]> {
    let board = new Array();
    for (let i = 0; i < this.boardSize; i++) {
      board.push(new Array(this.boardSize));
    }
    return board;
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

  private updateScore(winner: GameSymbol): void {
    this.score[winner]++;
  }

  //#endregion

  //#region Game check exceptions

  private checkForErrors(row: number, col: number): void {
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
    let countSymbolsRow: number = 0;
    let countSymbolsCol: number = 0;
    let countSymbolsMainDiagonal: number = 0;
    let countSymbolsSecondaryDiagonal: number = 0;

    for (let i = 0; i < this.boardSize; i++) {
      countSymbolsRow = 0;
      countSymbolsCol = 0;

      for (let j = 0; j < this.boardSize; j++) {

        // check rows.
        if (this.gameBoard[i][0] === this.gameBoard[i][j]) {
          countSymbolsRow++;
          if (countSymbolsRow === this.boardSize) {
            this.winner = this.gameBoard[i][j];
            break;
          }
        }

        // check columns.
        if (this.gameBoard[0][i] === this.gameBoard[j][i]) {
          countSymbolsCol++;
          if (countSymbolsCol === this.boardSize) {
            this.winner = this.gameBoard[j][i];
            break;
          }
        }
      }

      // check main diagonal
      if (this.gameBoard[0][0] === this.gameBoard[i][i]) {
        countSymbolsMainDiagonal++;
        if (countSymbolsMainDiagonal === this.boardSize) {
          this.winner = this.gameBoard[0][0];
        }
      }

      //check secondary diagonal
      if (this.gameBoard[0][this.boardSize - 1] === this.gameBoard[i][this.boardSize - 1 - i]) {
        countSymbolsSecondaryDiagonal++;
        if (countSymbolsSecondaryDiagonal === this.boardSize) {
          this.winner = this.gameBoard[0][this.boardSize - 1];
        }
      }

      if (this.winner) {
        this.gameOver = true;
        this.updateScore(this.winner);
        this.exceptionWin(this.winner);
        break;
      }
    }
  }

  //#endregion

}
