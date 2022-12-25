import { inject, injectable } from "tsyringe";
import { Language } from "../Entities/Language";
import { ILanguageDetectionRepository } from "../Ports/ILanguageDetectionRepository";
import { ILanguageDetectionService } from "./ILanguageDetecttionService";

@injectable()
class LanguageDetectionService implements ILanguageDetectionService {
    constructor(@inject("ILanguageDetectionRepository") private readonly repository: ILanguageDetectionRepository) {}
    
    Detect = async (text: string): Promise<Language> => {
        return await this.repository.Detect(text);
    }
}

export { LanguageDetectionService };