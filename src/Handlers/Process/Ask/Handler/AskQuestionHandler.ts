
import { inject, injectable } from "tsyringe";
import { IAskQuestionService } from "../../../../Domain/UseCase/AskQuestion/Services/IAskQuestionService";
import { Question } from "../../../../Domain/UseCase/AskQuestion/Entities/Question";
import { Answer } from "../../../../Domain/UseCase/AskQuestion/Entities/Answer";
import { Text } from "../../../../Domain/UseCase/AskQuestion/Entities/Text";
import { ProcessQuestion } from "../../Shared/Models/ProcessQuestionModel";
import { DefaultLanguage } from "../../../../Domain/Models/ILanguage";

@injectable()
class AskQuestionHandler {
    constructor(
        @inject("IAskQuestionService") private readonly service: IAskQuestionService ) { }

    Invoke = async (event: ProcessQuestion): Promise<Answer> => {
        return await this.service.Ask(new Question(new Text(event.Question), DefaultLanguage));
    }
}

export  { AskQuestionHandler };