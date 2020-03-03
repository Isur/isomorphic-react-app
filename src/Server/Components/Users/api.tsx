import Router from "express-promise-router";
import { Request, Response } from "express";

const router = Router();
export default router;

router.get("/", (req: Request, res: Response) => {
  res.json({
    server: "User list...",
  });
});
