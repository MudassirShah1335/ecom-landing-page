"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("./userController");
const UserRole_1 = require("../../middleware/UserRole");
const AuthMiddleware_1 = __importDefault(require("../../middleware/AuthMiddleware"));
const Uploads_1 = require("../../utils/Uploads");
const router = (0, express_1.Router)();
router.get("/users", userController_1.getAllUsers);
router.get("/users/:id", userController_1.getSingleUsers);
// inside school where a teacher will have specific students assigned to him
router.get("/teacher-students/:id", userController_1.getAllTeachersStd);
router.get("/user-cookies", userController_1.getCookies);
router.delete("/users/:id", AuthMiddleware_1.default, (0, UserRole_1.IsAdminRole)(2), userController_1.deletesUsers);
router.patch("/assign-student/:id", AuthMiddleware_1.default, (0, UserRole_1.IsAdminRole)(2), userController_1.assignStdToTeacher);
router.patch("/users/:id", AuthMiddleware_1.default, Uploads_1.UploadFiles.single("profile"), userController_1.updatesUsers);
router.post("/users", AuthMiddleware_1.default, (0, UserRole_1.IsAdminRole)(2), Uploads_1.UploadFiles.single("profile"), userController_1.createsUsers);
router.post("/assign-task-to-created-user/:school_id", AuthMiddleware_1.default, userController_1.assignTaskToCreatedUser);
router.post("/login-users", userController_1.loginUser);
router.post("/logout-users", userController_1.LogOutUser);
// forget password routes
router.post("/forget-password", userController_1.forgetPassword);
router.post("/verify-code", userController_1.verificationCode);
exports.default = router;
