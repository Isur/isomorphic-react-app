import webpack from "webpack";
import whm from "webpack-hot-middleware";
import wdm from "webpack-dev-middleware";
import express, { Router } from "express";
import webpackClientDevConfig from "../../../webpack/client.dev.babel";

let cachedRouter: null | Router = null; // Cache for Server Side Hot Module Replacement

export const mount = () => {
  if(cachedRouter) return cachedRouter;

  const router = cachedRouter = express.Router();

  // eslint-disable-next-line no-console
  console.log(`\nWebpack Hot Middleware has been enabled!`);
  const compiler = webpack(webpackClientDevConfig as webpack.Configuration);

  router.use(wdm(compiler, {
    logLevel: "warn",
    logTime: true,
    publicPath: webpackClientDevConfig.output.publicPath,
  }));

  router.use(whm(compiler, {
    log: console.log, // eslint-disable-line no-console
    path: "/__webpack_hmr",
    heartbeat: 10 * 1000,
  }));

  return router;
};

