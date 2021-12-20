import { ErrorHandler, Injectable } from "@angular/core";
import { InformationDialogType } from "@app-enums";
import { InformationDialogService } from "@app-services";
import { GameEngineHandlerError } from "@app-error-handlers";

@Injectable()
export class GameEngineHandlerException implements ErrorHandler {

  constructor(private informationDialogService: InformationDialogService) { }

  handleError(error: any): void {

    if (error instanceof GameEngineHandlerError) {
      this.informationDialogService
        .showDialog(error.message, (error as GameEngineHandlerError).errorType);
    } else {
      this.informationDialogService
        .showDialog('Unknown error occurred', InformationDialogType.failure);
    }

  }

}
