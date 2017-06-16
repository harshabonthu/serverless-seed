import { ProxyResult } from "aws-lambda";

export class APIResponse {
  private _statusCode: number;
  private _headers: { [name: string]: boolean | number | string };

  constructor() {
    this._statusCode = 200;
    this._headers = {
      "Content-Type": "application/json",
    };
  }

  public send(body: Object | null | string, statusCode?: number): ProxyResult {
    // Default to the status code from the object
    if (statusCode === undefined) statusCode = this._statusCode;

    // Turn the body into a stringified JSON object unless it's a string or null
    const _actualBody = body === null || typeof body === "string"
      ? body
      : JSON.stringify(body);

    // The default Content-Type should be text/html if the body is a string and application/json for everything else
    const _contentType =
      this._headers["Content-Type"] ||
      (typeof body === "string" ? "text/html" : "application/json");

    // Calculate the actual headers we are going to send.
    const actualHeaders = Object.assign({}, this._headers, {
      "Content-Type": _contentType,
    });

    // Return an AWS Lambda response object
    return {
      statusCode: statusCode,
      headers: actualHeaders,
      body: _actualBody as string,
    };
  }

  public setHeader(name: string, value: string | number | boolean) {
    this._headers[name] = value;
  }
}
