"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const schoolController_1 = require("./schoolController");
const Uploads_1 = require("../../utils/Uploads");
const AuthMiddleware_1 = __importDefault(require("../../middleware/AuthMiddleware"));
const UserRole_1 = require("../../middleware/UserRole");
const router = (0, express_1.Router)();
router.get("/schools", schoolController_1.getAllSchools);
router.get("/single-school/:id", schoolController_1.getSingleSchool);
router.get("/schools-user/:id", schoolController_1.getAllSchoolsUsers);
// for schools and admins both side
router.get("/schools-teachers/:id", AuthMiddleware_1.default, (0, UserRole_1.IsAdminRole)(1), schoolController_1.getAllSchoolsTeachers);
router.get("/schools-students/:id", AuthMiddleware_1.default, (0, UserRole_1.IsAdminRole)(1), schoolController_1.getAllSchoolsStudents);
router.post("/schools", AuthMiddleware_1.default, (0, UserRole_1.IsAdminRole)(1), Uploads_1.UploadFiles.single("profile"), schoolController_1.createSchools);
router.patch("/schools/:id", AuthMiddleware_1.default, (0, UserRole_1.IsAdminRole)(1), schoolController_1.updateSchool);
router.patch("/schools-status", AuthMiddleware_1.default, (0, UserRole_1.IsAdminRole)(1), schoolController_1.updateSchoolsStatus);
router.delete("/schools/:id", AuthMiddleware_1.default, (0, UserRole_1.IsAdminRole)(1), schoolController_1.deleteSchool);
exports.default = router;
