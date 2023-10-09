import { Router } from "express";
import protect from "../../middleware/AuthMiddleware";
import {
  createAward,
  deleteAward,
  getAllAward,
  getSingleAward,
  updateAward,
} from "./AwardsController";
import { UploadFiles } from "../../utils/Uploads";
import { IsAdminRole } from "../../middleware/UserRole";

const routes = Router();

routes.get("/award",  getAllAward);
routes.get("/award/:id",  getSingleAward);

routes.post(
  "/award",
  
  
  UploadFiles.single("image"),
  createAward
);
routes.patch(
  "/award/:id",
  
  
  UploadFiles.single("image"),
  updateAward
);
routes.delete("/award/:id",   deleteAward);

export default routes;
