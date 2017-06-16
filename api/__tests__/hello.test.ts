import { APIGatewayEvent, Context, ProxyResult } from "aws-lambda";

import { hello } from "../handler";

describe("hello.ts", () => {
  it("outputs hello", async () => {
    return new Promise(resolve => {
      const context = ({} as any) as Context;
      const event = ({ hello: "hi" } as any) as APIGatewayEvent;
      hello(event, context, (err: Error, result: ProxyResult) => {
        const res = JSON.parse(result.body);
        expect(res.input.hello).toEqual("hi");
        resolve();
      });
    });
  });
});
