import { LanguageNullException } from "../../../Exceptions/LanguageNullException";

class Language {
    constructor(private readonly value: string) { 
        if( !value ) throw new LanguageNullException()
    }

    GetLanguage() { return this.value; }
}

export { Language }