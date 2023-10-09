"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const AuthMiddleware_1 = __importDefault(require("../../middleware/AuthMiddleware"));
const AssignTaskController_1 = require("./AssignTaskController");
const UserRole_1 = require("../../middleware/UserRole");
const routes = (0, express_1.Router)();
routes.get("/assign-task", AuthMiddleware_1.default, AssignTaskController_1.getAllAssignTask);
routes.get("/user-assign-task", AuthMiddleware_1.default, AssignTaskController_1.getAllUsersAssignedTasks);
routes.get("/school-assign-task/:id", AuthMiddleware_1.default, (0, UserRole_1.IsAdminRole)(1), AssignTaskController_1.getAllSchoolAssignedTasks);
routes.get("/assign-task/:id", AuthMiddleware_1.default, (0, UserRole_1.IsAdminRole)(1), AssignTaskController_1.getSingleAssignTask);
routes.post("/assign-task", AuthMiddleware_1.default, (0, UserRole_1.IsAdminRole)(1), AssignTaskController_1.createAssignTask);
routes.patch("/assign-task/:id", AuthMiddleware_1.default, (0, UserRole_1.IsAdminRole)(1), AssignTaskController_1.updateAssignTask);
routes.delete("/assign-task/:id", AuthMiddleware_1.default, (0, UserRole_1.IsAdminRole)(1), AssignTaskController_1.deleteAssignTask);
exports.default = routes;
