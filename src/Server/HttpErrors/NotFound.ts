import { ErrorMessage, HTTPError } from "./HTTPError";

export default class NotFound extends HTTPError {
  constructor(message: ErrorMessage = "Not Found") {
    super(404, message);
  }
}
