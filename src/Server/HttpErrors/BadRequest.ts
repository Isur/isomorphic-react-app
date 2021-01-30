import { ErrorMessage, HTTPError } from "./HTTPError";

export default class BadRequest extends HTTPError {
  constructor(message: ErrorMessage = "Bad request") {
    super(400, message);
  }
}
