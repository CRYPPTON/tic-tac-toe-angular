import { Component, } from '@angular/core';
import { GameEngineService } from 'src/app/core/services';
import { GameSymbol } from 'src/app/shared/enums';

@Component({
  selector: 'app-tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.scss'],
})
export class TicTacToeComponent {
  //#region Class properties

  get currentPlayer(): GameSymbol {
    return this.gameEngineService.currentPlayer;
  }

  //public currentPlayer: string;

  //#endregion

  constructor(private gameEngineService: GameEngineService) { }

  //#region UI events

  public onNewGame(): void {
    this.gameEngineService.createNewGame();
  }

  //#endregion

}
