import { InformationDialogType } from "@app-enums"

export class GameEngineHandlerError extends Error {
    constructor(message: string, public errorType: InformationDialogType) {
        super(message);
    }
}
