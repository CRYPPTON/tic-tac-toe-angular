import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.scss']
})
export class TicTacToeComponent {

  //#region Class properties

  public gameField = new Array(9);

  //#endregion
  constructor() { }

  //#region UI events

  public onClickOnPosition(): void {

  }

  //#endregion

}
