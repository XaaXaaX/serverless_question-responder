export class ActionResults {

  static Response(data:any, statusCode = 500 , correlationToken?: string){
    let result = { 
        statusCode: statusCode,
        headers: {
          "Content-Type": "application/json",
          "x-correlation-id": correlationToken
        },
        body: JSON.stringify(data, null, 2),
      };

    return result;
  }

  static Success(data:any, correlationToken?: string){
    return this.Response(data, 200, correlationToken);
  }

  static BadRequest(data: any, correlationToken?: string){
    return this.Response(data, 400, correlationToken);
  }

  static Conflict(data: any, correlationToken?: string){
    return this.Response(data, 429, correlationToken);
  }

  static UnAuthorized(data: any, correlationToken?: string){
    return this.Response(data, 401, correlationToken);
  }

  static NotFound(data: any, correlationToken?: string){
    return this.Response(data, 404, correlationToken);
  }

  static InternalServerError(data: any, correlationToken?: string){
    return this.Response(data, 500, correlationToken);
  }
}