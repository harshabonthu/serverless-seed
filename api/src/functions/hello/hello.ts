import {
  APIGatewayEvent,
  Context,
  ProxyCallback,
  ProxyResult,
} from "aws-lambda";
import { APIGatewayHandler } from "../../utils/api_gateway_handler";
import { APIResponse } from "../../utils/api_response";
import { BadRequest } from "ts-httpexceptions";

export function hello(
  event: APIGatewayEvent,
  context: Context,
  callback: ProxyCallback
) {
  const _hello = new Hello();
  _hello.execute(event, context, callback);
}

export class Hello extends APIGatewayHandler {
  constructor() {
    super();
  }
  async handler(
    event: APIGatewayEvent,
    context: Context
  ): Promise<ProxyResult> {
    return new APIResponse().send({
      message: "Go Serverless v1.0! Your function executed successfully!",
      client: process.env.CLIENT_ID,
      input: event,
    });
  }
}
