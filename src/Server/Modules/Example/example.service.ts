import LogMachine, { Logger } from "../../Utils/Logger";

export interface ExampleService {
  doNothing: () => Promise<string>,
}

class Example implements ExampleService {
  _logger: Logger;
  constructor(logger: Logger) {
    this._logger = logger;
  }

  doNothing = async () => {
    this._logger.log("Do nothing");
    return "nothing has been done";
  }
}

export default new Example(
  LogMachine,
);
