import { Answer } from "../Entities/Answer";
import { Question } from "../Entities/Question";
import { IAskQuestionService } from "./IAskQuestionService";
import { IAskQuestionRepository } from "../Ports/IAskQuestionRepository";
class AskQuestionService implements IAskQuestionService {
    constructor(private readonly repository: IAskQuestionRepository) {}
    
    Ask = async (question: Question): Promise<Answer> => {
        return this.repository.AskForAnswer(question);
    }
}

export { AskQuestionService };