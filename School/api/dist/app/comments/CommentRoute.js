"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const AuthMiddleware_1 = __importDefault(require("../../middleware/AuthMiddleware"));
const CommentController_1 = require("./CommentController");
const routes = (0, express_1.Router)();
routes.get("/comment", AuthMiddleware_1.default, CommentController_1.getAllComment);
routes.get("/comment/:id", AuthMiddleware_1.default, CommentController_1.getSingleComment);
routes.post("/comment", AuthMiddleware_1.default, CommentController_1.createComment);
routes.patch("/comment/:id", AuthMiddleware_1.default, CommentController_1.updateComment);
routes.delete("/comment/:id", AuthMiddleware_1.default, CommentController_1.deleteComment);
exports.default = routes;
