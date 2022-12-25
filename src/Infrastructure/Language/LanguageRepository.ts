import { ComprehendClient, DetectDominantLanguageCommand, DetectDominantLanguageCommandInput } from "@aws-sdk/client-comprehend";
import { Language } from "Domain/UseCase/DetectLanguage/Entities/Language";
import { inject, injectable } from "tsyringe";
import { ILanguageDetectionRepository } from "../../Domain/UseCase/DetectLanguage/Ports/ILanguageDetectionRepository";

@injectable()
class LanguageRepository implements ILanguageDetectionRepository{
    constructor(@inject(ComprehendClient) private readonly client: ComprehendClient) { }

    Detect = async (text: string): Promise<Language> => {

        const commandInput: DetectDominantLanguageCommandInput = { Text: text }

        const result = await this.client.send(new DetectDominantLanguageCommand(commandInput));
        return new Language(result?.Languages?.[0].LanguageCode!);
    }


}

export { LanguageRepository }