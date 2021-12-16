import { ErrorHandler, Injectable } from "@angular/core";
import { InformationDialogType } from "src/app/shared/enums";
import { InformationDialogService } from "../services";
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
