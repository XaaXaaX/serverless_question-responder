import { ComprehendClient } from "@aws-sdk/client-comprehend";
import { ILanguageDetectionRepository } from "Domain/UseCase/DetectLanguage/Ports/ILanguageDetectionRepository";
import { ILanguageDetectionService } from "Domain/UseCase/DetectLanguage/Services/ILanguageDetecttionService";
import { LanguageDetectionService } from "Domain/UseCase/DetectLanguage/Services/LanguageDetecttionService";
import { AwsConfig } from "Infrastructure/Aws/AwsConfig";
import { LanguageRepository } from "Infrastructure/Language/LanguageRepository";
import { container } from "tsyringe";
import { LanguageDetectionHandler } from "./Handler/LanguageDetectionHandler";

container.register<ILanguageDetectionRepository>("ILanguageDetectionRepository", { useClass: LanguageRepository })
container.register<ILanguageDetectionService>("ILanguageDetectionService", { useClass: LanguageDetectionService });
container.register<ComprehendClient>(ComprehendClient, { useValue: new ComprehendClient({ region: AwsConfig.Region })});

export const languageDetectionHandler: LanguageDetectionHandler = container.resolve(LanguageDetectionHandler);
export const handler = languageDetectionHandler.Invoke.bind(languageDetectionHandler);
