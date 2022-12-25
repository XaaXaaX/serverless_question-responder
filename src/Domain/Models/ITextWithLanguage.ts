import { ILanguage } from "./ILanguage";
import { IText } from "./IText";

interface ITextWithLanguage {
    GetLanguage(): ILanguage;
    GetText(): IText;
}

export { ITextWithLanguage }