import { Router } from "express";
import protect from "../../middleware/AuthMiddleware";
import {
  createRole,
  deleteRole,
  getAllRole,
  getSingleRole,
  updateRole,
  updateRoleStatus,
} from "./roleController";
import { IsAdminRole } from "../../middleware/UserRole";

const routes = Router();

routes.get("/role", getAllRole);
routes.get("/role/:id", getSingleRole);

routes.post("/role", createRole);
routes.patch("/role/:id", updateRole);
routes.patch("/role-status/:id", updateRoleStatus);
routes.delete("/role/:id", deleteRole);

export default routes;
