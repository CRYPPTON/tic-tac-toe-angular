import { Component, OnInit } from '@angular/core';
import { GameEngineService } from 'src/app/core/services';

@Component({
  selector: 'app-tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.scss']
})
export class TicTacToeComponent implements OnInit {
  //#region Class properties

  public gameBoard;
  public currentPlayer: string;

  //#endregion

  constructor(private gameEngineService: GameEngineService) { }

  //#region Life cycle hooks

  ngOnInit(): void {
    this.gameBoard = this.gameEngineService.gameBoard;
    this.currentPlayer = this.gameEngineService.currentPlayer;
  }

  //endregion

  //#region UI events

  public onNewGame(): void {
    this.gameEngineService.createNewGame();
  }

  //#endregion

}
