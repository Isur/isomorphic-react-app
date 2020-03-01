import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import { react } from "./Middlewares/react";
import view from "./View/html";

const app =  express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

if(process.env.NODE_ENV === "development") {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  app.use(require("./Middlewares/webpack").mount());
} else {
  app.use("/client.js", express.static("client.js"));
  app.use("/style.css", express.static("style.css"));
}

app.get("/api", (req: Request, res: Response) => {
  res.json({
    server: "This is server, could be hot reloaded.",
  });
});

app.get("*", (req, res) => {
  res.send(view(react()));
});

export default app;
