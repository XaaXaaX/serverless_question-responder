import "reflect-metadata";
import { container } from "tsyringe";
import { 
    DeconnectionService,
    IDeconnectionRepository,
    IDeconnectionService
} from "../../../Domain/UseCase/Deconnect/index";
import { ConnectionRepository } from "../../../Infrastructure/Connection/ConnectionRepository";
import { AwsConfig } from "../../../Infrastructure/Aws/AwsConfig";
import { DeconnectionHandler } from "./Handler/DeconnectionHandler";
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";

container.register<IDeconnectionService>("IDeconnectionService", { useClass: DeconnectionService })
container.register<IDeconnectionRepository>("IConnectionRepository", { useClass: ConnectionRepository });
container.register<DynamoDBClient>(DynamoDBClient, { useValue: new DynamoDBClient({ region: AwsConfig.Region, endpoint: AwsConfig.DynamoDbEndpoint })});

export const deconnectionHandler: DeconnectionHandler = container.resolve(DeconnectionHandler);
export const handler = deconnectionHandler.Invoke.bind(deconnectionHandler);
