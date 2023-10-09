import { Router } from "express";
import protect from "../../middleware/AuthMiddleware";
import {
  createAssignAward,
  getUserAssignAwards,
} from "./AssignAwardControllers";

const routes = Router();

routes.get("/Assign-award", protect, getUserAssignAwards);
routes.post("/assign-award", createAssignAward);

export default routes;
