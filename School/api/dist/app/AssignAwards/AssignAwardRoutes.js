"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const AuthMiddleware_1 = __importDefault(require("../../middleware/AuthMiddleware"));
const AssignAwardControllers_1 = require("./AssignAwardControllers");
const routes = (0, express_1.Router)();
routes.get("/Assign-award", AuthMiddleware_1.default, AssignAwardControllers_1.getUserAssignAwards);
routes.post("/assign-award", AssignAwardControllers_1.createAssignAward);
exports.default = routes;
