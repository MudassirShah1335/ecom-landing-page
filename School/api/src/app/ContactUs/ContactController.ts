import { Request, Response } from "express";
import { ErrorMessage } from "../../utils/ErrorMessage";
import { sendMail } from "../../utils/SendMail";
import { ValidationError } from "../../utils/ValidationError";
import { contactSchema } from "./ContactSchema";
import { contactUsMsg } from "../../config/EmailMessages";
import { ResponseMessage } from "../../utils/ResponseMessage";

export const contactUs = (req: Request, res: Response) => {
  const validation = contactSchema.safeParse(req.body);
  if (!validation.success) return ValidationError(validation, res);

  const { name, email, message } = req.body;
  try {
    ResponseMessage(res, 200, undefined, "message sent");
    sendMail([email], "Contact Us", contactUsMsg(name, email, message));
  } catch (error) {
    ErrorMessage(res, error, 400);
  }
};
