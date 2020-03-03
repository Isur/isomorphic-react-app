import { NextFunction, Request, Response } from "express";
import { HTTPError } from "../Utils/HTTPError";

export const apiLogger = (req: Request, res: Response, next: NextFunction) => {
  // eslint-disable-next-line no-console
  console.log(`${req.method} - ${req.path}`);
  // eslint-disable-next-line no-console
  console.dir({ body: req.body }, { depth: null });
  next();
};

export const apiBadEndpoint = (req: Request, res: Response, next: NextFunction) => {
  next(new HTTPError(404, `No endpoint: ${req.method} ${req.path}`));
};

export const apiError = (error: HTTPError, req: Request, res: Response, next: NextFunction) => {
  console.error(error);
  res.status(error.code || 500).json({ code: error.code || 500, message: error.message });
};
