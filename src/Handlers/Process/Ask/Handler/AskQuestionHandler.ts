import { IAskQuestionService } from "../../../../Domain/UseCase/AskQuestion/Services/IAskQuestionService";
import { ProcessQuestion } from "../../Shared/Models/ProcessQuestionModel";
import { inject, injectable } from "tsyringe";
import { Answer } from "../../../../Domain/UseCase/AskQuestion/Entities/Answer";
import { Question } from "../../../../Domain/UseCase/AskQuestion/Entities/Question";
import { DefaultLanguage } from "../../../../Domain/Models/ILanguage";
import { Text } from "../../../../Domain/UseCase/AskQuestion/Entities/Text";
@injectable()
class AskQuestionHandler {
    constructor(
        @inject("IAskQuestionService") private readonly service: IAskQuestionService ) { }

    Invoke = async (event: ProcessQuestion): Promise<Answer> => {
        return await this.service.Ask(new Question(new Text(event.Question), DefaultLanguage));
    }
}

export  { AskQuestionHandler };