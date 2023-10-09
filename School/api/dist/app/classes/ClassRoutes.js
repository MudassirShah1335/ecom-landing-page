"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const AuthMiddleware_1 = __importDefault(require("../../middleware/AuthMiddleware"));
const ClassController_1 = require("./ClassController");
const routes = (0, express_1.Router)();
routes.get("/class", AuthMiddleware_1.default, ClassController_1.getAllClass);
routes.get("/class/:id", AuthMiddleware_1.default, ClassController_1.getSingleClass);
routes.post("/class", AuthMiddleware_1.default, ClassController_1.createClass);
routes.patch("/class/:id", AuthMiddleware_1.default, ClassController_1.updateClass);
routes.delete("/class/:id", AuthMiddleware_1.default, ClassController_1.deleteClass);
exports.default = routes;
