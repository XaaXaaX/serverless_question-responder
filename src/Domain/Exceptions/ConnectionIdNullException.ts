class ConnectionIdNullException extends Error {
    Category: string = 'Connection';
    Reason: string =  'Nullability';
    constructor() {
        super();
        this.name = 'ConnectionIdNullException';
    }
}

export {
    ConnectionIdNullException
}