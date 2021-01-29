import jwt from "jsonwebtoken";
import { Inject, Service } from "typedi";
import { Config } from "../Config";

interface JwtToken {
  iat: number,
  userid: string,
  sessionid: string,
}
@Service()
class JWT {
  @Inject()
  private readonly config: Config;

  generateAuthToken = (userid: string, sessionId: string) => {
    return jwt.sign({ userid, sessionId }, this.config.environment.secret, { expiresIn: this.config.cookies.expiration });
  }

  tokenVerify = (token: string) => {
    return jwt.verify(token, this.config.environment.secret, (error: unknown, decoded: JwtToken) => {
      if(error) return undefined;
      if(decoded === undefined || Date.now() - decoded.iat * 1000 > this.config.cookies.maxAge)  {
        return undefined;
      }
      return decoded;
    }) as unknown as JwtToken;
  }
}

export default JWT;
