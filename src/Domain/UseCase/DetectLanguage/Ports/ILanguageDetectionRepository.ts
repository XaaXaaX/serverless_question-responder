import { Language } from "../Entities/Language";

interface ILanguageDetectionRepository {
    Detect(text: string): Promise<Language>;
}

export { ILanguageDetectionRepository };