interface IDeconnectionService {
    UnSubscribe(connectionId: string): Promise<void>;
}

export { IDeconnectionService }