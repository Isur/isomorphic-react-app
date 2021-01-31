import { Inject, Service } from "typedi";
import { SessionObject } from "../../../Common/Interfaces/session.interface";
import { Config } from "../../Config";
import SessionRepository from "./session.repository";

@Service()
class SessionService {
  @Inject()
  private readonly _config: Config;

  @Inject()
  private readonly _sessionRepository: SessionRepository;

  public createSession = async (userId: string): Promise<string> => {
    const expiry = new Date(Date.now() + this._config.cookies.maxAge);
    const session = await this._sessionRepository.createSession(userId, expiry);
    return session.id;
  }

  public endSession = async (sessionId: string): Promise<void> => {
    await this._sessionRepository.deleteSession(sessionId);
  }

  public getSession = async (sessionId: string): Promise<SessionObject> => {
    const session = await this._sessionRepository.findSession(sessionId);
    return {
      sessionId: session.id,
      userId: session.userId,
      expiryTime: session.expiryTime,
    };
  }
}

export default SessionService;
