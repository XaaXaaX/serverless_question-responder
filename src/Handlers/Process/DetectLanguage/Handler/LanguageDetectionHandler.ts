import { ILanguageDetectionService } from "../../../../Domain/UseCase/DetectLanguage/Services/ILanguageDetecttionService";
import { ProcessQuestion } from "../../Shared/Models/ProcessQuestionModel";

class LanguageDetectionHandler {
    constructor(private readonly languageService: ILanguageDetectionService ) { }

    Invoke = async (event: ProcessQuestion): Promise<string> => {
        return await this.languageService.Detect(event.Question);
    }
}

export  { LanguageDetectionHandler };