// eslint-disable-next-line import/no-extraneous-dependencies
import request from "supertest";
import startServer from "../server";

import { StartServerResponse } from "../types/Server";

export interface TestServerResponse extends StartServerResponse {
  server: ServerTest;
}

export interface ServerTest extends request.SuperTest<request.Test> {
  sendQL(query: string, variables?: object, token?: string): request.Test;
}

// eslint-disable-next-line import/prefer-default-export
export async function createServer(): Promise<TestServerResponse> {
  const { app, prisma } = await startServer();
  const server = request(app) as ServerTest;

  server.sendQL = function sendQL(
    query = "",
    variables = {},
    token
  ): request.Test {
    const req = this.post("/");

    if (token) {
      req.set("Authorization", `Bearer ${token}`);
    }

    return req.send({ query, variables });
  };

  return { server, app, prisma };
}
