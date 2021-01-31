import { RequestService } from "../Request/request.interface";
import { Request } from "../Request/request.service";

export abstract class ApiService {
  protected requestService: RequestService;

  public constructor(basePath: string) {
    this.requestService = new Request(basePath);
  }
}
