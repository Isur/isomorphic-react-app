import http from "http";
import chalk from "chalk";
import dotenv from "dotenv";
import app from "./Server/app";

dotenv.config();

const port = process.env.PORT || 3000;
const server = http.createServer(app);

const originalApp = app;
let currentApp = app;

server.listen(port);
// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare const module: any; // without this line typescript doesn't know what module is
if(module.hot) {
  module.hot.accept("./Server/app", async () => {
    let newApp = app;
    if(originalApp === newApp) {
      newApp = (await import("./Server/app")).default;
    }
    server.removeListener("request", currentApp);
    server.on("request", newApp);
    currentApp = newApp;
  });
}

// eslint-disable-next-line no-console
console.log(`
  Isomorphic App listening on port ${chalk.red.bold(port)}
  Env: ${chalk.yellow.bold(process.env.NODE_ENV)}
 `);

