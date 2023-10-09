import { Router } from "express";
import { contactUs } from "./ContactController";

const routes = Router();

routes.post("/contact-us", contactUs);

export default routes;
