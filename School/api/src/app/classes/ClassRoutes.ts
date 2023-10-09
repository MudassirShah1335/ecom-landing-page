import { Router } from "express";
import protect from "../../middleware/AuthMiddleware";
import {
  createClass,
  deleteClass,
  getAllClass,
  getSingleClass,
  updateClass,
} from "./ClassController";

const routes = Router();

routes.get("/class", protect, getAllClass);
routes.get("/class/:id", protect, getSingleClass);

routes.post("/class", protect, createClass);
routes.patch("/class/:id", protect, updateClass);
routes.delete("/class/:id", protect, deleteClass);

export default routes;
