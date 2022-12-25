import "reflect-metadata";
import { container } from "tsyringe";
import { QuestinnerRepository } from "Infrastructure/Questionner/QuestinnerRepository";
import { AskQuestionService } from "Domain/UseCase/AskQuestion/Services/AskQuestionService";
import { IAskQuestionService } from "Domain/UseCase/AskQuestion/Services/IAskQuestionService";
import { IAskQuestionRepository } from "Domain/UseCase/AskQuestion/Ports/IAskQuestionRepository";
import { AskQuestionHandler } from "./Handler/AskQuestionHandler";

container.register<IAskQuestionRepository>("IAskQuestionRepository", { useClass: QuestinnerRepository })
container.register<IAskQuestionService>("IAskQuestionService", { useClass: AskQuestionService });

export const askQuestionHandler: AskQuestionHandler = container.resolve(AskQuestionHandler);
export const handler = askQuestionHandler.Invoke.bind(askQuestionHandler);
