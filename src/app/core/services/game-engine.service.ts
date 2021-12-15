import { Injectable } from '@angular/core';
import { GameSymbol } from 'src/app/shared/enums';

@Injectable({
  providedIn: 'root'
})
export class GameEngineService {
  //#region Class properties

  currentPlayer: GameSymbol = GameSymbol.X;

  gameBoard = [
    new Array(3),
    new Array(3),
    new Array(3),
  ];

  //#endregion

  constructor() { }

  //#region Game utility

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

  //#region

  public play(row: number, col: number): void {
    this.setBoard(row, col);
    this.changeCurrentPlayer();
  }

  //#endregion

}
