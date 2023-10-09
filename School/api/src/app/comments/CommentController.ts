import { Request, Response } from "express";
import Comment from "./CommentsModel";
import { ResponseMessage } from "../../utils/ResponseMessage";
import { ErrorMessage } from "../../utils/ErrorMessage";
import UserModel from "../users/userModel";
import TaskSolutionModel from "../taskSolution/TaskSolutionModel";

// create Comment
export const createComment = async (req: Request, res: Response) => {
  try {
    const data = await Comment.create({...req.body,user_id:req.user?.id});
    ResponseMessage(res, 200, data);
  } catch (error) {
    ErrorMessage(res, error, 400);
  }
};

// get all Comment
export const getAllComment = async (req: Request, res: Response) => {
  try {
    const data = await Comment.findAll();
    ResponseMessage(res, 200, data);
  } catch (error) {
    ErrorMessage(res, error, 400);
  }
};

// get single Comment
export const getSingleComment = async (req: Request, res: Response) => {
  try {
    const data = await Comment.findByPk(req.params.id,{
      include:[{model:UserModel,attributes:["f_name",'l_name','email']},{model:TaskSolutionModel}]
    });
    if (!data) return ErrorMessage(res, "no data found", 400);
    else {
      ResponseMessage(res, 200, data);
    }
  } catch (error) {
    ErrorMessage(res, error, 400);
  }
};

// get logged in Comment
export const getLoggedInUserComment = async (req: Request, res: Response) => {
  try {
    const data = await Comment.findByPk(req.user?.id,{
      include:[{model:UserModel,attributes:["f_name",'l_name','email']},{model:TaskSolutionModel}]
    });
    if (!data) return ErrorMessage(res, "no data found", 400);
    else {
      ResponseMessage(res, 200, data);
    }
  } catch (error) {
    ErrorMessage(res, error, 400);
  }
};

// update Comment
export const updateComment = async (req: Request, res: Response) => {
  try {
    const data = await Comment.findByPk(req.params.id);
    if (!data) return ErrorMessage(res, "no data found", 400);
    else {
      const updateData = await Comment.update(
        { text: req.body.text },
        { where: { id: req.params.id } }
      );
      ResponseMessage(res, 200, undefined, "data updated");
    }
  } catch (error) {
    ErrorMessage(res, error, 400);
  }
};

// delete Comment
export const deleteComment = async (req: Request, res: Response) => {
  try {
    const data = await Comment.findByPk(req.params.id);
    if (!data) return ErrorMessage(res, "no data found", 400);
    else {
      const deleteData = await Comment.destroy({
        where: { id: req.params.id },
      });
      ResponseMessage(res, 200, undefined, "data deleted");
    }
  } catch (error) {
    ErrorMessage(res, error, 400);
  }
};
