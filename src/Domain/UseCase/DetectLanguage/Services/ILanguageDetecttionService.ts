import { Language } from "../Entities/Language";

interface ILanguageDetectionService {
    Detect(text: string): Promise<Language>;
}

export { ILanguageDetectionService };