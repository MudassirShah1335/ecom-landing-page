import { Router } from "express";
import {
  createSchools,
  deleteSchool,
  getAllSchools,
  getAllSchoolsStudents,
  getAllSchoolsTeachers,
  getAllSchoolsUsers,
  getSingleSchool,
  updateSchool,
  updateSchoolsStatus,
} from "./schoolController";
import { UploadFiles } from "../../utils/Uploads";
import protect from "../../middleware/AuthMiddleware";
import { IsAdminRole } from "../../middleware/UserRole";

const router = Router();

router.get("/schools", getAllSchools);
router.get("/single-school/:id", getSingleSchool);
router.get("/schools-user/:id", getAllSchoolsUsers);

// for schools and admins both side
router.get(
  "/schools-teachers/:id",
  protect,
  IsAdminRole(1),
  getAllSchoolsTeachers
);
router.get(
  "/schools-students/:id",
  protect,
  IsAdminRole(1),
  getAllSchoolsStudents
);

router.post(
  "/schools",
  protect,
  IsAdminRole(1),
  UploadFiles.single("profile"),
  createSchools
);
router.patch("/schools/:id", protect, IsAdminRole(1), updateSchool);

router.patch("/schools-status", protect, IsAdminRole(1), updateSchoolsStatus);
router.delete("/schools/:id", protect, IsAdminRole(1), deleteSchool);

export default router;
