import { ErrorMessage, HTTPError } from "./HTTPError";

export default class Unauthorized extends HTTPError {
  constructor(message: ErrorMessage = "Unauthorized") {
    super(401, message);
  }
}
