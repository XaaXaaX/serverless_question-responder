import { IText } from "Domain/Models/IText";

interface IGenerateAudioService {
    GenerateAudioFor(text: IText): Promise<boolean>;
}

export { IGenerateAudioService };