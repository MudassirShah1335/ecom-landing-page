import { Router } from "express";
import protect from "../../middleware/AuthMiddleware";
import {
  submitTaskSolution,
  deleteTaskSolution,
  getAllTaskSolution,
  getSingleTaskSolution,
  updateTaskSolution,
  getUsersRejectedTaskSolution,
  getUsersApprovedTaskSolution,
  getUsersTaskSolution,
  getPendingTasks,
  updateTaskSolutionStatus,
  getUsersTaskSolutionCount,
} from "./TaskSolutionController";
import { UploadFiles } from "../../utils/Uploads";
import { IsAdminRole } from "../../middleware/UserRole";

const routes = Router();

routes.get("/task-solution", protect, getAllTaskSolution);
routes.get("/task-solution/:id", protect, getSingleTaskSolution);
routes.get("/user-task-solution/:id", protect, getUsersTaskSolution);
routes.get("/task-solution-count", protect, getUsersTaskSolutionCount);
routes.get("/pending-task/:id", protect, getPendingTasks);
routes.get(
  "/rejected-task-solution/:id",
  protect,
  getUsersRejectedTaskSolution
);
routes.get(
  "/approved-task-solution/:id",
  protect,
  getUsersApprovedTaskSolution
);

routes.post(
  "/task-solution",
  protect,
  IsAdminRole(4),
  UploadFiles.fields([
    { name: "pdf", maxCount: 3 },
    { name: "image", maxCount: 10 },
    { name: "video", maxCount: 3 },
  ]),
  submitTaskSolution
);
routes.patch(
  "/task-solution/:id",
  protect,
  UploadFiles.fields([
    { name: "pdf", maxCount: 3 },
    { name: "image", maxCount: 10 },
    { name: "video", maxCount: 3 },
  ]),
  IsAdminRole(4),
  updateTaskSolution
);
routes.patch(
  "/task-solution-status/:id",
  protect,
  IsAdminRole(3),
  updateTaskSolutionStatus
);

routes.delete("/task-solution/:id", protect, deleteTaskSolution);

export default routes;
