import { Answer } from "../Entities/Answer";
import { Question } from "../Entities/Question";

interface IAskQuestionRepository {
    AskForAnswer(question: Question): Promise<Answer> 
}

export { IAskQuestionRepository };