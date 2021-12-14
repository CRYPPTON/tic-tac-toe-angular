import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameRoutingModule } from './game-routing.module';
import { TicTacToeComponent } from './components/tic-tac-toe/tic-tac-toe.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    TicTacToeComponent
  ],
  imports: [
    CommonModule,
    GameRoutingModule,
    FormsModule,
    SharedModule
  ]
})
export class GameModule { }
