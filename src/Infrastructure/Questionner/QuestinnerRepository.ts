import { IAskQuestionRepository } from "../../Domain/UseCase/AskQuestion/Ports/IAskQuestionRepository";
import { Question } from "../../Domain/UseCase/AskQuestion/Entities/Question";
import { Answer } from "../../Domain/UseCase/AskQuestion/Entities/Answer";
import { Text  } from "../../Domain/UseCase/AskQuestion/Entities/Text";
import { ChatGPTRepository } from "../ChatGPT/ChatGPTRepository";
import { DefaultLanguage } from "../../Domain/Models/ILanguage";

class QuestinnerRepository extends ChatGPTRepository implements IAskQuestionRepository {
    protected CastToDomain(entity: any): Answer {
        return new Answer(new Text(entity), DefaultLanguage)
    }
    protected CastToEntity(model: Answer) {
        throw new Error("Method not implemented.");
    }
    AskForAnswer = async (question: Question): Promise<Answer> => {
        return await this.GetAnswer(question);
    }
}

export { QuestinnerRepository }