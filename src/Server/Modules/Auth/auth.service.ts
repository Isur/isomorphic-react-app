import { Inject, Service } from "typedi";
import { HTTPError } from "../../Utils/HTTPError";
import { JWT, BCrypt, Database } from "../../Utils";
import { UsersService } from "../Users";
import { SessionService } from "../Sessions";
import { Register } from "./interfaces/register.interface";
import { LoginResponse } from "./interfaces/login.interface";

@Service()
class Auth {
  @Inject()
  private readonly _jwt: JWT;

  @Inject()
  private readonly _db: Database;

  @Inject()
  private readonly _userService: UsersService;

  @Inject()
  private readonly _sessionService: SessionService;

  @Inject()
  private readonly _bcrypt: BCrypt;

  public login = async (username: string, password: string): Promise<LoginResponse> => {
    const user = await this._db.client.user.findFirst({ where: { OR: [{ username }, { email: username }] } });
    if(!user) throw new HTTPError(401, "Bad login and/or password");
    if(await this._bcrypt.compareHash(password, user.password) === false) throw new HTTPError(401, "Bad login and/or password");
    const sessionId = await this._sessionService.createSession(user.id);
    const token = this._jwt.generateAuthToken(user.id, sessionId);
    return { token, userId: user.id };
  }

  public register = async (userData: Register): Promise<string> => {
    if(userData.password !== userData.confirmPassword) throw new HTTPError(401, "Passwords mismatch");
    const emailTaken = await this._userService.findUser({ field: "email", value: userData.email });
    const usernameTaken = await this._userService.findUser({ field: "username", value: userData.username });
    if(emailTaken || usernameTaken) throw new HTTPError(401, "User already exists");

    const id = await this._userService.createUser({ ...userData });

    return id;
  }

  public logout = async (sessionId: string) => {
    await this._sessionService.endSession(sessionId);
  }
}

export default Auth;
