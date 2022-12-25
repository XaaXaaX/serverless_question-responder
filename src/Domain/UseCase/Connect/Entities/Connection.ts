import { IConnection } from "../../../Models/IConnection";
import { ConnectionIdNullException } from "../../../Exceptions/ConnectionIdNullException";

class Connection implements IConnection {
    constructor(
        private readonly connectionId: string,
        private readonly connectionDate?: number) {
            if(!connectionId)
                throw new ConnectionIdNullException(); 

            this.connectionDate = new Date().getTime();
        }

    GetConnectionId(): string { return this.connectionId; }

    GetConnectionDate(): number { return this.connectionDate!; }
}

export {
    Connection
}