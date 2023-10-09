import { Router } from "express";
import {
  LogOutUser,
  assignStdToTeacher,
  assignTaskToCreatedUser,
  createsUsers,
  deletesUsers,
  forgetPassword,
  getAllTeachersStd,
  getAllUsers,
  getCookies,
  getSingleUsers,
  loginUser,
  updatesUsers,
  verificationCode,
} from "./userController";
import { IsAdminRole } from "../../middleware/UserRole";
import protect from "../../middleware/AuthMiddleware";
import { UploadFiles } from "../../utils/Uploads";

const router = Router();

router.get("/users", getAllUsers);
router.get("/users/:id", getSingleUsers);
// inside school where a teacher will have specific students assigned to him
router.get("/teacher-students/:id", getAllTeachersStd);
router.get("/user-cookies", getCookies);

router.delete("/users/:id", protect, IsAdminRole(2), deletesUsers);

router.patch(
  "/assign-student/:id",
  protect,
  IsAdminRole(2),
  assignStdToTeacher
);
router.patch(
  "/users/:id",
  protect,
  UploadFiles.single("profile"),
  updatesUsers
);
router.post(
  "/users",
  protect,
  IsAdminRole(2),
  UploadFiles.single("profile"),
  createsUsers
);

router.post(
  "/assign-task-to-created-user/:school_id",
  protect,
  assignTaskToCreatedUser
);

router.post("/login-users", loginUser);
router.post("/logout-users", LogOutUser);

// forget password routes
router.post("/forget-password", forgetPassword);
router.post("/verify-code", verificationCode);

export default router;
