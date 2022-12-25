import "reflect-metadata";
import { container } from "tsyringe";
import { 
    ConnectionService, 
    IConnectionService, 
    IConnectionRepository 
} from "../../../Domain/UseCase/Connect/index";
import { ConnectionRepository } from "../../../Infrastructure/Connection/ConnectionRepository";
import { AwsConfig } from "../../../Infrastructure/Aws/AwsConfig";
import { ConnectionHandler } from "./Handler/ConnectionHandler";
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";

container.register<IConnectionService>("IConnectionService", { useClass: ConnectionService })
container.register<IConnectionRepository>("IConnectionRepository", { useClass: ConnectionRepository });
container.register<DynamoDBClient>(DynamoDBClient, { useValue: new DynamoDBClient({ region: AwsConfig.Region, endpoint: AwsConfig.DynamoDbEndpoint })});

export const connectionHandler: ConnectionHandler = container.resolve(ConnectionHandler);
export const handler = connectionHandler.Invoke.bind(connectionHandler);
