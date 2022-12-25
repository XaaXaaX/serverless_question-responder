import { Language } from "../Entities/Language";
import { ILanguageDetectionRepository } from "../Ports/ILanguageDetectionRepository";
import { ILanguageDetectionService } from "./ILanguageDetecttionService";

class LanguageDetectionService implements ILanguageDetectionService {
    constructor(private readonly languageRepository: ILanguageDetectionRepository) {}
    
    Detect = async (text: string): Promise<Language> => {
        return await this.languageRepository.Detect(text);
    }
}

export { LanguageDetectionService };