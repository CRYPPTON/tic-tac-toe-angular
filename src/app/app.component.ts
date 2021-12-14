import { Component } from '@angular/core';
import { GameEngineHandlerError } from '@app-error-handlers';
import { InformationDialogService } from '@app-services';
import { InformationDialogType } from '@app-enums';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tic-tac-toe';

  constructor(private informationDialogService: InformationDialogService) { }

  onOpenDialog(): void {
    this.informationDialogService.showDialog('Pobednik: X', InformationDialogType.failure);
  }

  onShowError(): void {
    throw new GameEngineHandlerError('Pobeda: X', InformationDialogType.success);
  }
}
