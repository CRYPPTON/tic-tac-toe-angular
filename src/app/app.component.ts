import { Component } from '@angular/core';
import { GameEngineHandlerError } from '@app-error-handlers';
import { InformationDialogService } from '@app-services';
import { InformationDialogType } from '@app-enums';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tic-tac-toe';

  constructor(
    private informationDialogService: InformationDialogService,
    private translate: TranslateService
  ) {
    this.translate.setDefaultLang('sr');
  }

  onOpenDialog(): void {
    this.informationDialogService.showDialog(
      this.translate.instant('exceptions.invalidMove'),
      InformationDialogType.failure);
  }

  onShowError(): void {
    throw new GameEngineHandlerError(
      this.translate.instant('exceptions.win'),
      InformationDialogType.success);
  }
}
