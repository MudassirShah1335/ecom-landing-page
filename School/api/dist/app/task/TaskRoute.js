"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const AuthMiddleware_1 = __importDefault(require("../../middleware/AuthMiddleware"));
const TaskController_1 = require("./TaskController");
const UserRole_1 = require("../../middleware/UserRole");
const routes = (0, express_1.Router)();
routes.get("/task", AuthMiddleware_1.default, TaskController_1.getAllTask);
routes.get("/task/:id", AuthMiddleware_1.default, TaskController_1.getSingleTask);
routes.get("/school-task/:id", AuthMiddleware_1.default, TaskController_1.getAllSchoolTasks);
routes.get("/class-task", AuthMiddleware_1.default, TaskController_1.getAllClassTasks);
routes.post("/task", AuthMiddleware_1.default, (0, UserRole_1.IsAdminRole)(1), TaskController_1.createTask);
routes.patch("/task/:id", AuthMiddleware_1.default, (0, UserRole_1.IsAdminRole)(1), TaskController_1.updateTask);
routes.delete("/task/:id", AuthMiddleware_1.default, (0, UserRole_1.IsAdminRole)(1), TaskController_1.deleteTask);
exports.default = routes;
