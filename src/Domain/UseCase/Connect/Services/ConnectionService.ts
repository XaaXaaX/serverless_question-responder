import { Connection } from "../Entities/Connection";
import { IConnectionService } from "./IConnectionService";
import { IConnectionRepository } from "../Ports/IConnectionRepository";

class ConnectionService implements IConnectionService {
    constructor(private readonly respository: IConnectionRepository) { }

    Subscribe = async (connection: Connection): Promise<Connection> => {
        return await this.respository.RegisterConnection(connection);
    }
}

export { ConnectionService }