class LanguageNullException extends Error {
    Category: string = 'Language';
    Reason: string =  'Nullability';
    constructor() {
        super();
        this.name = 'LanguageNullException';
    }
}

export {
    LanguageNullException
}