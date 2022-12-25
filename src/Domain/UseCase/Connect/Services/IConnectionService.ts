import { Connection } from "../Entities/Connection";

interface IConnectionService {
    Subscribe(connection: Connection): Promise<Connection>;
}

export { IConnectionService }