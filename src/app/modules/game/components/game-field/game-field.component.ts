import { Component, Input } from '@angular/core';
import { GameEngineService } from '@app-services';
import { GameSymbol } from '@app-enums';

@Component({
  selector: 'app-game-field',
  templateUrl: './game-field.component.html',
  styleUrls: ['./game-field.component.scss']
})
export class GameFieldComponent {

  //#region Angular stuff

  @Input() row: number;
  @Input() col: number;

  //#endregion

  get currentPlayer(): GameSymbol {
    return this.gameEngineService.gameBoard[this.row][this.col];
  }

  constructor(private gameEngineService: GameEngineService) { }

  //#region UI events

  public onPlay(): void {
    this.gameEngineService.play(this.row, this.col);
  }

  //#endregion

}
