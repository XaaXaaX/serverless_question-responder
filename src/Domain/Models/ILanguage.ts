interface ILanguage { 
    GetLanguageTag(): string;
}

const DefaultLanguage: ILanguage = {
    GetLanguageTag(): string {
        return "en-US";
    }
}

export { ILanguage, DefaultLanguage }