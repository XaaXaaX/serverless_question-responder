import { IQueston } from "../../Domain/Models/IQuestion";
import { Answer } from "../../Domain/UseCase/AskQuestion/Entities/Answer";
import { Configuration, OpenAIApi } from "openai";
import { BaseRepository } from "../Repository/BaseRepository";

abstract class ChatGPTRepository extends BaseRepository<Answer, any> {
    protected GetAnswer = async (question: IQueston): Promise<Answer> => {
        const configuration = new Configuration({
            apiKey: process.env.OPENAI_API_KEY,
          });
          const openai = new OpenAIApi(configuration);
          
          const completion = await openai.createCompletion({
            model: "text-davinci-002",
            prompt: question.GetText().GetContent(),
          });

          return this.CastToDomain(completion.data.choices[0].text);
    }
}

export { ChatGPTRepository };