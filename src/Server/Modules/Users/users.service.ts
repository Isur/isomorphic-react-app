import { Inject, Service } from "typedi";
import { UserObject } from "../../../Common/Interfaces/user.interface";
import { BCrypt, Database } from "../../Utils";
import { CreateUser } from "./interfaces/createUser.interface";
import { SearchUser } from "./interfaces/search.interface";

@Service()
class UsersService {
  @Inject()
  private readonly _db: Database;

  @Inject()
  private readonly _brycpt: BCrypt;

  public createUser = async (userData: CreateUser): Promise<string> => {
    const hash = await this._brycpt.hashData(userData.password);
    const u = await this._db.client.user.create({
      data: {
        createdDate: new Date(Date.now()),
        email: userData.email,
        password: hash,
        username: userData.username,
      },
    });

    return u.id;
  }

  public findUser = async (search: SearchUser): Promise<UserObject> => {
    const user = await this._db.client.user.findFirst({ where: { [search.field]: search.value } });

    if(!user) return null;

    return {
      createdDate: user.createdDate,
      email: user.email,
      id: user.id,
      username: user.username,
    };
  }
}

export default UsersService;
