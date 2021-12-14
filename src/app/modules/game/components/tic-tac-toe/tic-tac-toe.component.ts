import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.scss']
})
export class TicTacToeComponent implements OnInit {

  //#region Class properties

  public gameField = new Array(9);

  //#endregion

  constructor() { }

  ngOnInit(): void {
  }


  //#region UI events
  
  public onClickOnPosition(): void {

  }

  //#endregion

}
