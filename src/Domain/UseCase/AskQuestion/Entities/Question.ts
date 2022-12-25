import { IText } from "../../../Models/IText";
import { ILanguage } from "../../../Models/ILanguage";
import { IQueston } from "../../../Models/IQuestion";

class Question implements IQueston {
    constructor(
        private readonly text: IText,
        private readonly language: ILanguage
        ) { }

    GetLanguage(): ILanguage { return this.language; }

    GetText(): IText { return this.text; }
}

export { Question }