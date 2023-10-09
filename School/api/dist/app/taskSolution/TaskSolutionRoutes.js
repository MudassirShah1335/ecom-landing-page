"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const AuthMiddleware_1 = __importDefault(require("../../middleware/AuthMiddleware"));
const TaskSolutionController_1 = require("./TaskSolutionController");
const Uploads_1 = require("../../utils/Uploads");
const UserRole_1 = require("../../middleware/UserRole");
const routes = (0, express_1.Router)();
routes.get("/task-solution", AuthMiddleware_1.default, TaskSolutionController_1.getAllTaskSolution);
routes.get("/task-solution/:id", AuthMiddleware_1.default, TaskSolutionController_1.getSingleTaskSolution);
routes.get("/user-task-solution/:id", AuthMiddleware_1.default, TaskSolutionController_1.getUsersTaskSolution);
routes.get("/task-solution-count", AuthMiddleware_1.default, TaskSolutionController_1.getUsersTaskSolutionCount);
routes.get("/pending-task/:id", AuthMiddleware_1.default, TaskSolutionController_1.getPendingTasks);
routes.get("/rejected-task-solution/:id", AuthMiddleware_1.default, TaskSolutionController_1.getUsersRejectedTaskSolution);
routes.get("/approved-task-solution/:id", AuthMiddleware_1.default, TaskSolutionController_1.getUsersApprovedTaskSolution);
routes.post("/task-solution", AuthMiddleware_1.default, (0, UserRole_1.IsAdminRole)(4), Uploads_1.UploadFiles.fields([
    { name: "pdf", maxCount: 3 },
    { name: "image", maxCount: 10 },
    { name: "video", maxCount: 3 },
]), TaskSolutionController_1.submitTaskSolution);
routes.patch("/task-solution/:id", AuthMiddleware_1.default, Uploads_1.UploadFiles.fields([
    { name: "pdf", maxCount: 3 },
    { name: "image", maxCount: 10 },
    { name: "video", maxCount: 3 },
]), (0, UserRole_1.IsAdminRole)(4), TaskSolutionController_1.updateTaskSolution);
routes.patch("/task-solution-status/:id", AuthMiddleware_1.default, (0, UserRole_1.IsAdminRole)(3), TaskSolutionController_1.updateTaskSolutionStatus);
routes.delete("/task-solution/:id", AuthMiddleware_1.default, TaskSolutionController_1.deleteTaskSolution);
exports.default = routes;
