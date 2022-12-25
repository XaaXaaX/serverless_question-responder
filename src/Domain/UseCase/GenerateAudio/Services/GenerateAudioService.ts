import { inject } from "tsyringe";
import { IGenerateAudioRepository } from "../Ports/IGenerateAudioRepository";
import { IGenerateAudioService } from "./IGenerateAudioService";
import { IText } from "../../../Models/IText";

class GenerateAudioService implements IGenerateAudioService  {
    constructor(
        @inject("IGenerateAudioRepository") private readonly repository: IGenerateAudioRepository
    ) {}
    GenerateAudioFor = async (text: IText): Promise<boolean> => {
        return await this.repository.GenerateAudioAsyncFor(text);
    }
}

export { GenerateAudioService }