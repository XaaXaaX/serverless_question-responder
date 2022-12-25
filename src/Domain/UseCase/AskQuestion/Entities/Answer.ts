import { IAnswer } from "Domain/Models/IAnswer";
import { ILanguage } from "Domain/Models/ILanguage";
import { IText } from "../../../Models/IText";

class Answer implements IAnswer{
    constructor(
        private readonly text: IText,
        private readonly language: ILanguage
    ) { }

    GetLanguage(): ILanguage { return this.language; }

    GetText(): IText { return this.text; }

}

export { Answer };