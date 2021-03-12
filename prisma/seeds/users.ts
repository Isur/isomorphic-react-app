import bcrypt from "../../src/Server/Utils/BCrypt";

const hasher = new bcrypt();

export const getUsersSeed = async () => {
  return [{
    username: "Admin",
    email: "admin@admin.admin",
    createdDate: new Date(Date.now()),
    password: await hasher.hashData("admin"),
  }]
}
