import {
  APIGatewayEvent,
  Context,
  ProxyResult,
  ProxyCallback,
} from "aws-lambda";
import { Exception, BadRequest } from "ts-httpexceptions";
import { APIResponse } from "./api_response";
export abstract class APIGatewayHandler {
  abstract async handler(
    event: APIGatewayEvent,
    context: Context
  ): Promise<ProxyResult>;

  public execute(
    event: APIGatewayEvent,
    context: Context,
    callback: ProxyCallback
  ) {
    // Log the event and context here for debugging later
    console.log("Event", event);
    console.log("Context", context);

    this.handler(event, context)
      .then(result => {
        // Log the result
        console.log("Result", result);
        callback(undefined, result);
      })
      .catch(err => this._errorHandler(err, callback));
  }

  private _errorHandler(err: any, callback: ProxyCallback) {
    console.error("Unexpected Error", err);
    if (err instanceof Exception) {
      console.error("Name", err.name);
      console.error("Message", err.message);
      console.error("Stack Trace", err.stack);
      console.error("Inner Exception", err.innerException);

      callback(
        undefined,
        new APIResponse().send(
          {
            message: err.message,
          },
          err.status
        )
      );
    }
  }
}
