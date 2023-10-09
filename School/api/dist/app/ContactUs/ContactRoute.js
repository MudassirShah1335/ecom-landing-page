"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ContactController_1 = require("./ContactController");
const routes = (0, express_1.Router)();
routes.post("/contact-us", ContactController_1.contactUs);
exports.default = routes;
