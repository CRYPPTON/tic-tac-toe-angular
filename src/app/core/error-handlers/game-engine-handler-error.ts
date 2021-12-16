import { InformationDialogType } from "src/app/shared/enums"

export class GameEngineHandlerError extends Error {
    constructor(message: string, public errorType: InformationDialogType) {
        super(message);
    }
}
