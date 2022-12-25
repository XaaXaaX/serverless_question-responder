import { inject, injectable } from "tsyringe";
import { ILanguageDetectionService } from "../../../../Domain/UseCase/DetectLanguage/Services/ILanguageDetecttionService";
import { ProcessQuestion } from "../../Shared/Models/ProcessQuestionModel";

@injectable()
class LanguageDetectionHandler {
    constructor(
        @inject("ILanguageDetectionService") private readonly service: ILanguageDetectionService ) { }

    Invoke = async (event: ProcessQuestion): Promise<string> => {
        return await (await this.service.Detect(event.Question)).GetLanguage();
    }
}

export  { LanguageDetectionHandler };