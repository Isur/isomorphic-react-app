import { User } from "@prisma/client";
import { Inject, Service } from "typedi";
import { Database } from "../../Utils";
import { CreateUser } from "./interfaces/createUser.interface";
import { SearchUser } from "./interfaces/search.interface";

@Service()
class UsersRepository {
  @Inject()
  private readonly _db: Database;

  public createUser = async (data: CreateUser): Promise<User> => {
    const user = await this._db.client.user.create({
      data: {
        createdDate: new Date(Date.now()),
        email: data.email,
        password: data.password,
        username: data.username,
      },
    });
    return user;
  }

  public findUser = async (search: SearchUser): Promise<User> => {
    const user = await this._db.client.user.findFirst({
      where: {
        [search.field]: search.value,
      },
    });

    return user;
  }

  public findToLogin = async (login: string): Promise<User> => {
    const user = await this._db.client.user.findFirst({
      where: {
        OR: [{ username: login }, { email: login }],
      },
    });
    return user;
  }
}

export default UsersRepository;
