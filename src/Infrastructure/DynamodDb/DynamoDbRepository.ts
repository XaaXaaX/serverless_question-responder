import { 
  DeleteItemCommand,
  DeleteItemCommandInput,
  DynamoDBClient,
  PutItemCommand,
  PutItemCommandInput
} from "@aws-sdk/client-dynamodb";

  import { marshall } from "@aws-sdk/util-dynamodb";
import { BaseRepository } from "../Repository/BaseRepository";
import { inject } from "tsyringe";

abstract class DynamoDbRepository<M,E> extends BaseRepository<M,E>{
  constructor(
    @inject(DynamoDBClient) private readonly client: DynamoDBClient,
    private readonly tableName: string = process.env.TableName!
    ) {
      super();
    }

  PutItem = async (model: M): Promise<M> => {

    const commandInput: PutItemCommandInput = {
      TableName: this.tableName,
      Item: marshall(this.CastToEntity(model)),
    };

    await this.client.send( new PutItemCommand(commandInput));
    return model;      
  }
  
  DeleteItem = async (key: string): Promise<void> => {
    const commandInput: DeleteItemCommandInput = {
      TableName: this.tableName,
      Key: marshall({
        connectionId: key
      })
    };

    await this.client.send(new DeleteItemCommand(commandInput));
  }  
}

export { DynamoDbRepository }