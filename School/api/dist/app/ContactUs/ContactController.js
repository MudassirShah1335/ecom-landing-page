"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contactUs = void 0;
const ErrorMessage_1 = require("../../utils/ErrorMessage");
const SendMail_1 = require("../../utils/SendMail");
const ValidationError_1 = require("../../utils/ValidationError");
const ContactSchema_1 = require("./ContactSchema");
const EmailMessages_1 = require("../../config/EmailMessages");
const ResponseMessage_1 = require("../../utils/ResponseMessage");
const contactUs = (req, res) => {
    const validation = ContactSchema_1.contactSchema.safeParse(req.body);
    if (!validation.success)
        return (0, ValidationError_1.ValidationError)(validation, res);
    const { name, email, message } = req.body;
    try {
        (0, ResponseMessage_1.ResponseMessage)(res, 200, undefined, "message sent");
        (0, SendMail_1.sendMail)([email], "Contact Us", (0, EmailMessages_1.contactUsMsg)(name, email, message));
    }
    catch (error) {
        (0, ErrorMessage_1.ErrorMessage)(res, error, 400);
    }
};
exports.contactUs = contactUs;
