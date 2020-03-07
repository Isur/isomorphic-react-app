import express from "express";
import bodyParser from "body-parser";
import { react } from "./Middlewares/react";
import routes from "./api";

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

app.use("/api", routes);

app.get("*", (req, res) => {
  res.send(react(req));
});

export default app;
