import { IDeconnectionService } from "./IDeconnectionService";
import { IDeconnectionRepository } from "../Ports/IDeconnectionRepository";

class DeconnectionService implements IDeconnectionService {
    constructor(private readonly respository: IDeconnectionRepository) { }

    UnSubscribe = async (connectionId: string): Promise<void> => {
        return await this.respository.RemoveConnection(connectionId);
    }
}

export { DeconnectionService }