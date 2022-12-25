interface IDeconnectionRepository {
    RemoveConnection(connectionId: string): Promise<void>;
}

export { IDeconnectionRepository };