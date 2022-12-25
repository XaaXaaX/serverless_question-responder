import { ProcessQuestion } from "../../Shared/Models/ProcessQuestionModel";
import { inject, injectable } from "tsyringe";
import { IGenerateAudioService } from "../../../../Domain/UseCase/GenerateAudio/Services/IGenerateAudioService";
import { Text } from "../../../../Domain/UseCase/AskQuestion/Entities/Text";

@injectable()
class GenerateAudioHandler {
    constructor(
        @inject("IGenerateAudioService") private readonly service: IGenerateAudioService
    ) { }

    Invoke = async (event: ProcessQuestion): Promise<boolean> => {
        return await this.service.GenerateAudioFor(new Text(event.Answer!));
    }
}

export { GenerateAudioHandler };