import { ErrorMessage, HTTPError } from "./HTTPError";

export default class Forbidden extends HTTPError {
  constructor(message: ErrorMessage = "Forbidden") {
    super(403, message);
  }
}
