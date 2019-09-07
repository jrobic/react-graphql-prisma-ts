import { MyRequest } from "./Server";
import { Prisma } from "../generated/prisma-client";

export interface MyContext {
  req: MyRequest;
  res: Express.Response;
  url: string;
  prisma: Prisma;
}
