import express from "express";
import usersAPI from "./Components/Users/api";
import { apiBadEndpoint, apiError, apiLogger } from "./Middlewares/basics";

const router = express.Router();
router.use(apiLogger);
router.use("/users", usersAPI);
router.use(apiBadEndpoint);
router.use(apiError);
export default router;
