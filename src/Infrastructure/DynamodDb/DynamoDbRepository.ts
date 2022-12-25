import { 
  DeleteItemCommand,
  DeleteItemCommandInput,
  DynamoDBClient,
  PutItemCommand,
  PutItemCommandInput
} from "@aws-sdk/client-dynamodb";

  import { marshall } from "@aws-sdk/util-dynamodb";
import { inject } from "tsyringe";
  
  abstract class DynamoDbRepository<M,E> {
    constructor(
      @inject(DynamoDBClient) private readonly client: DynamoDBClient,
      private readonly tableName: string = process.env.TableName) {}
  
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
  
    protected abstract CastToDomain(entity: E): M;
    protected abstract CastToEntity(model: M): E; 
  
  }
  
export { DynamoDbRepository }