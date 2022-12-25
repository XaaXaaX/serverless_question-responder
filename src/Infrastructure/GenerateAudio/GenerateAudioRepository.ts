import { IText } from "Domain/Models/IText";
import { PollyRepository } from "../Polly/PollyRepository";
import { IGenerateAudioRepository } from "../../Domain/UseCase/GenerateAudio/Ports/IGenerateAudioRepository";

class GenerateAudioRepository extends PollyRepository implements IGenerateAudioRepository {
    GenerateAudioAsyncFor = async (text: IText): Promise<boolean> => {
        return await this.StartSpeechSynthesis(text);
    }

}

export { GenerateAudioRepository };