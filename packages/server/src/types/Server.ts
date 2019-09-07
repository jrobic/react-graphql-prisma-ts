import { Server as HttpServer } from "http";
import { Server as HttpsServer } from "https";
import { Prisma } from "../generated/prisma-client";

export interface StartServerResponse {
  app: HttpServer | HttpsServer | null;
  prisma: Prisma;
}

export interface MyRequest extends Express.Request {
  body?: any;
}
