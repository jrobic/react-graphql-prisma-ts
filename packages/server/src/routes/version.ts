// eslint-disable-next-line import/no-extraneous-dependencies
import { Request, Response } from "express";
import { ApiVersion, name, version } from "../utils/version";

export default (_req: Request, res: Response): Response => {
  return res.send({ name, version } as ApiVersion);
};
