import { PrismaClient } from "@prisma/client";
import { Service } from "typedi";

@Service()
class Prisma {
  client: PrismaClient;
  constructor() {
    this.client = new PrismaClient();
  }
}

export default Prisma;
