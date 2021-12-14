import { Component } from '@angular/core';
import { GameEngineHandlerError } from './core/error-handler/game-engine-handler-error';
import { InformationDialogService } from './core/services/information-dialog.service';
import { InformationDialogType } from './shared/enums/information-dialog-type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tic-tac-toe';

  constructor(private informationDialogService: InformationDialogService) { }

  openDialog() {
    this.informationDialogService.showDialog('Pobednik: X', InformationDialogType.failure);
  }

  showError() {
    throw new GameEngineHandlerError('Pobeda: X', InformationDialogType.success);
  }
}
