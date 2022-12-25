import { Connection, IConnectionRepository } from "../../Domain/UseCase/Connect";
import { IDeconnectionRepository } from "../../Domain/UseCase/Deconnect";
import { DynamoDbRepository } from "../DynamodDb/DynamoDbRepository";
import { ConnectionEntity } from "./ConnectionEntity";

class ConnectionRepository 
    extends DynamoDbRepository<Connection, ConnectionEntity> 
    implements IConnectionRepository , IDeconnectionRepository {

    protected CastToDomain(entity: ConnectionEntity): Connection {
        return new Connection(entity.ConnectionId, entity.ConnectionDate);
    }
    protected CastToEntity(model: Connection): ConnectionEntity {
        return { 
            ConnectionId: model.GetConnectionId(), 
            ConnectionDate: model.GetConnectionDate() 
        } as ConnectionEntity;
    }

    RegisterConnection = async (connection: Connection): Promise<Connection> => {
        return await this.PutItem(connection);
    }

    RemoveConnection = async (connectionId: string) : Promise<void> => {
        await this.DeleteItem(connectionId);
    }
}

export { ConnectionRepository };