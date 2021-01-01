import { Request, Response } from "express";
import { body, query, param } from "express-validator";
import BaseController, { Routable } from "../BaseController";
import { ApiValidator, ApiAuth } from "../../Middlewares";
import e, { ExampleService } from "./example.service";

class ExampleController extends BaseController implements Routable {
  exampleService: ExampleService;
  constructor(exampleService: ExampleService) {
    super();
    this._initRoutes();
    this.exampleService = exampleService;
  }

  _initRoutes = (): void => {
    this.router.get("/", ApiAuth.execute, this.exampleGet);
    this.router.post("/", ApiValidator.execute([body("user").isString()
      .notEmpty()]), this.examplePost);
    this.router.patch("/", this.examplePut);
    this.router.delete("/", this.exampleDelete);
    this.router.get("/:id", ApiValidator.execute([param("id").isUUID()
      .notEmpty()]), this.exampleGetItem);
  }

  exampleGet = (req: Request, res: Response) => {
    res.json({ example: "Example router get" });
  }

  examplePost = (req: Request, res: Response) => {
    res.json({ body: req.body });
  }

  examplePut = (req: Request, res: Response) => {
    res.status(200).json("nothing");
  }

  exampleDelete = (req: Request, res: Response) => {
    res.status(404);
  }

  exampleGetItem = async (req: Request, res: Response) => {
    const x = await this.exampleService.doNothing();
    res.json({ item: req.params, x });
  }
}

export default new ExampleController(
  e,
);
