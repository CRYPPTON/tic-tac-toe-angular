import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameRoutingModule } from './game-routing.module';
import { TicTacToeComponent } from './components/tic-tac-toe/tic-tac-toe.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { GameFieldComponent } from './components/game-field/game-field.component';

@NgModule({
  declarations: [
    TicTacToeComponent,
    GameFieldComponent
  ],
  imports: [
    CommonModule,
    GameRoutingModule,
    FormsModule,
    SharedModule,
    TranslateModule
  ]
})
export class GameModule { }
