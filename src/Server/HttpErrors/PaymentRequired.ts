import { ErrorMessage, HTTPError } from "./HTTPError";

export default class PaymentRequired extends HTTPError {
  constructor(message: ErrorMessage = "Payment Required") {
    super(402, message);
  }
}
