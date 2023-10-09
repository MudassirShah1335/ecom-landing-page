import { Router } from "express";
import protect from "../../middleware/AuthMiddleware";
import {
  createAssignTask,
  deleteAssignTask,
  getAllAssignTask,
  getAllUsersAssignedTasks,
  getSingleAssignTask,
  updateAssignTask,
  getAllSchoolAssignedTasks,
} from "./AssignTaskController";
import { IsAdminRole } from "../../middleware/UserRole";

const routes = Router();

routes.get("/assign-task", protect, getAllAssignTask);
routes.get("/user-assign-task", protect, getAllUsersAssignedTasks);
routes.get(
  "/school-assign-task/:id",
  protect,
  IsAdminRole(1),
  getAllSchoolAssignedTasks
);
routes.get("/assign-task/:id", protect, IsAdminRole(1), getSingleAssignTask);

routes.post("/assign-task", protect, IsAdminRole(1), createAssignTask);
routes.patch("/assign-task/:id", protect, IsAdminRole(1), updateAssignTask);
routes.delete("/assign-task/:id", protect, IsAdminRole(1), deleteAssignTask);

export default routes;
