import { IText } from "../../../Models/IText";

interface IGenerateAudioRepository {
    GenerateAudioAsyncFor(text: IText): Promise<boolean>;
}

export { IGenerateAudioRepository }