import { Connection } from "../Entities/Connection";

interface IConnectionRepository {
    RegisterConnection(connection: Connection): Promise<Connection>;
}

export { IConnectionRepository };