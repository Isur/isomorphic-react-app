import { NextFunction, Request, Response } from "express";
import { SessionService, Session } from "../Modules/Sessions";
import { HTTPError } from "../Utils";
import JWT, { JwtHelper } from "../Utils/JWT";
import { Middleware } from "./Middleware.interface";

class Authenticate implements Middleware {
  constructor(
    private readonly _jwt: JwtHelper,
    private readonly _sessionService: SessionService,
  ) {  }

  execute = async (req: Request, res: Response, next: NextFunction) => {
    const token = this.getToken(req);

    try {
      const decoded = this._jwt.tokenVerify(token);
      if(!decoded) throw new HTTPError(403, "Unauthorized");
      const session = await this._sessionService.getSession(decoded.sessionid);
      req.session = {
        userid: session.userId,
        id: session.sessionId,
      };
      next();
    } catch(error) {
      throw new HTTPError(403, "Unauthorized");
    }
  }

  private getToken = (req: Request): string => {
    if(req.cookies.jwt) {
      return req.cookies.jwt;
    } else {
      return req.get("auth-token");
    }
  }
}

export default new Authenticate(
  JWT, Session,
);
