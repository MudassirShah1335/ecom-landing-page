import { Router } from "express";
import protect from "../../middleware/AuthMiddleware";
import {
  createComment,
  deleteComment,
  getAllComment,
  getSingleComment,
  updateComment,
} from "./CommentController";

const routes = Router();

routes.get("/comment", protect, getAllComment);
routes.get("/comment/:id", protect, getSingleComment);

routes.post("/comment", protect, createComment);
routes.patch("/comment/:id", protect, updateComment);
routes.delete("/comment/:id", protect, deleteComment);

export default routes;
