import "reflect-metadata";
import { IGenerateAudioRepository } from "../../../Domain/UseCase/GenerateAudio/Ports/IGenerateAudioRepository";
import { IGenerateAudioService } from "../../../Domain/UseCase/GenerateAudio/Services/IGenerateAudioService";
import { GenerateAudioService } from "../../../Domain/UseCase/GenerateAudio/Services/GenerateAudioService";
import { GenerateAudioRepository } from "../../../Infrastructure/GenerateAudio/GenerateAudioRepository";
import { GenerateAudioHandler } from "./Handler/GenerateAudioHandler";
import { PollyClient } from "@aws-sdk/client-polly";
import { S3Client } from "@aws-sdk/client-s3";
import { AwsConfig } from "Infrastructure/Aws/AwsConfig";
import { container } from "tsyringe";

container.register<IGenerateAudioRepository>("IGenerateAudioRepository", { useClass: GenerateAudioRepository })
container.register<IGenerateAudioService>("IGenerateAudioService", { useClass: GenerateAudioService });
container.register<PollyClient>(PollyClient, { useValue: new PollyClient({ region: AwsConfig.Region })});
container.register<S3Client>(S3Client, { useValue: new S3Client({ region: AwsConfig.Region })});

export const generateAudioHandler: GenerateAudioHandler = container.resolve(GenerateAudioHandler);
export const handler = generateAudioHandler.Invoke.bind(generateAudioHandler);
