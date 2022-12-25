import { APIGatewayProxyEvent } from "aws-lambda";
import { injectable, inject } from "tsyringe";
import { ActionResults } from "../../../../Infrastructure/HttpActionResults/ActionResults";
import { IDeconnectionService } from "Domain/UseCase/Deconnect";

@injectable()
class DeconnectionHandler {
    constructor(
        @inject("IDeconnectionService") private readonly repository: IDeconnectionService
    ) { }

    Invoke = async (event: APIGatewayProxyEvent): Promise<any> => {
        const {  requestContext: { connectionId } } = event;
        try {
            await this.repository.UnSubscribe(connectionId as string);
            return ActionResults.Success("sucess");

        } catch (error) {
            return ActionResults.InternalServerError(error);
        }
    } 
}

export {
    DeconnectionHandler
};