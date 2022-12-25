import { IDeconnectionService } from "./IDeconnectionService";
import { IDeconnectionRepository } from "../Ports/IDeconnectionRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class DeconnectionService implements IDeconnectionService {
    constructor(@inject("IDeconnectionRepository") private readonly respository: IDeconnectionRepository) { }

    UnSubscribe = async (connectionId: string): Promise<void> => {
        return await this.respository.RemoveConnection(connectionId);
    }
}

export { DeconnectionService }