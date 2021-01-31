import { PrismaClient } from "@prisma/client";
import { Service } from "typedi";

@Service()
class Prisma {
  public client: PrismaClient;
  public constructor() {
    this.client = new PrismaClient();
  }
}

export default Prisma;
