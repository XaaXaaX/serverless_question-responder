import { APIGatewayProxyEvent } from "aws-lambda";
import { Connection, IConnectionService } from "../../../../Domain/UseCase/Connect";
import { injectable, inject } from "tsyringe";
import { ActionResults } from "../../../../Infrastructure/HttpActionResults/ActionResults";
import { ConnectionIdNullException } from "Domain/Exceptions/ConnectionIdNullException";

@injectable()
class ConnectionHandler {
    constructor(
        @inject("IConnectionService") private readonly service: IConnectionService
    ) { }

    Invoke = async (event: APIGatewayProxyEvent): Promise<any> => {
        const {  requestContext: { connectionId } } = event;
        try {
            await this.service.Subscribe(new Connection(connectionId as string));
            return ActionResults.Success("sucess");

        } catch (error) {
            if( error instanceof ConnectionIdNullException)
                return ActionResults.BadRequest(error);

            return ActionResults.InternalServerError(error);
        }
    } 
}

export {
    ConnectionHandler
};