import { Question } from "../Entities/Question";
import { Answer } from "../Entities/Answer";

interface IAskQuestionService {
    Ask(question: Question): Promise<Answer>
}

export { IAskQuestionService }