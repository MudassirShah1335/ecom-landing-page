import { Router } from "express";
import protect from "../../middleware/AuthMiddleware";
import {
  createTask,
  deleteTask,
  getAllClassTasks,
  getAllSchoolTasks,
  getAllTask,
  getSingleTask,
  updateTask,
} from "./TaskController";
import { UploadFiles } from "../../utils/Uploads";
import { IsAdminRole } from "../../middleware/UserRole";

const routes = Router();

routes.get("/task", protect, getAllTask);
routes.get("/task/:id", protect, getSingleTask);
routes.get("/school-task/:id", protect, getAllSchoolTasks);
routes.get("/class-task", protect, getAllClassTasks);

routes.post("/task", protect, IsAdminRole(1), createTask);
routes.patch("/task/:id", protect, IsAdminRole(1), updateTask);
routes.delete("/task/:id", protect, IsAdminRole(1), deleteTask);

export default routes;
