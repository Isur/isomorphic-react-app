import { Inject, Service } from "typedi";
import { SessionObject } from "../../../Common/Interfaces/session.interface";
import { Config } from "../../Config";
import { Database } from "../../Utils";

@Service()
class SessionService {
  @Inject()
  private readonly _config: Config;

  @Inject()
  private readonly _db: Database;

  public createSession = async (userId: string): Promise<string> => {
    const session = await this._db.client.session.create({
      data: {
        user: {
          connect: {
            id: userId,
          },
        },
        expiryTime: new Date(Date.now() + this._config.cookies.maxAge),
      },
    });

    return session.id;
  }

  public endSession = async (sessionId: string): Promise<void> => {
    await this._db.client.session.delete({ where: { id: sessionId } });
  }

  public getSession = async (sessionId: string): Promise<SessionObject> => {
    const session = await this._db.client.session.findFirst({ where: { id: sessionId } });
    return {
      sessionId: session.id,
      userId: session.userId,
      expiryTime: session.expiryTime,
    };
  }
}

export default SessionService;
