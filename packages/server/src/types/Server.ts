import { Server as HttpServer } from "http";
import { Server as HttpsServer } from "https";
import { Prisma } from "../generated/prisma-client";

export type App = HttpServer | HttpsServer;
export interface StartServerResponse {
  app: App;
  prisma: Prisma;
}

export interface MyRequest extends Express.Request {
  body?: any;
}
