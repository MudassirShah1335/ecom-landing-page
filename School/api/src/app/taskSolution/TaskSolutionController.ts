import { Request, Response } from "express";
import TaskSolutionModel from "./TaskSolutionModel";
import { ResponseMessage } from "../../utils/ResponseMessage";
import { ErrorMessage } from "../../utils/ErrorMessage";
import { TaskSolutionType } from "./TaskSolutionType";
import { ValidationError } from "../../utils/ValidationError";
import {
  submitTaskSolutionSchema,
  updateTaskSolutionSchema,
  TaskSolStatusSchema,
} from "./TaskSolutionSchema";
import CommentModel from "../comments/CommentsModel";
import UserModel from "../users/userModel";
import AssignTaskModel from "../assignTasks/AssignTaskModel";
import TaskModel from "../task/TaskModel";

// create TaskSolution
export const submitTaskSolution = async (req: any, res: Response) => {
  const { text } = req.body;

  let pdfArray: string[] = [];
  let imgArray: string[] = [];
  let videoArray: string[] = [];

  // const pdf = req.files["pdf"]?.[0]?.filename;

  req.files["pdf"]?.map((it: Express.Multer.File) => {
    return pdfArray.push(it.filename);
  });

  req.files["image"]?.map((it: Express.Multer.File) => {
    return imgArray.push(it.filename);
  });

  req.files["video"]?.map((it: Express.Multer.File) => {
    return videoArray.push(it.filename);
  });

  const { ass_tsk_id }: TaskSolutionType = req.body;
  const id = parseInt(ass_tsk_id as any);

  const validation = submitTaskSolutionSchema.safeParse({
    ...req.body,
    ass_tsk_id: id,
  });

  try {
    if (!validation.success) return ValidationError(validation, res);
    const data = await TaskSolutionModel.create({
      ...req.body,
      std_id: req.user?.id as number,
      ass_tsk_id: id as number,
      pdf: pdfArray,
      image: imgArray,
      video: videoArray,
    });

    const comment = await CommentModel.create({
      task_sol_id: data.dataValues.id as number,
      user_id: req.user?.id,
      text,
    });

    ResponseMessage(res, 200, data);
  } catch (error) {
    ErrorMessage(res, error, 400);
  }
};

// get all TaskSolution
export const getAllTaskSolution = async (req: Request, res: Response) => {
  try {
    const data = await TaskSolutionModel.findAll();
    ResponseMessage(res, 200, data);
  } catch (error) {
    ErrorMessage(res, error, 400);
  }
};

// get single TaskSolution
export const getSingleTaskSolution = async (req: Request, res: Response) => {
  try {
    const data = await TaskSolutionModel.findByPk(req.params.id, {
      include: [
        { model: CommentModel, attributes: ["text"] },
        { model: UserModel },
        { model: AssignTaskModel, include: [{ model: TaskModel }] },
      ],
    });
    if (!data)
      return ErrorMessage(res, "no data found with id " + req.params.id, 400);
    else {
      return ResponseMessage(res, 200, data);
    }
  } catch (error) {
    ErrorMessage(res, error, 400);
  }
};

// get pending Task
export const getPendingTasks = async (req: Request, res: Response) => {
  try {
    // assign task -all submited tasks

    const assginTasks = await AssignTaskModel.findAll({
      where: { std_id: req.params.id },
      // where: { std_id: req.user?.id },
    });

    const taskSolution = await TaskSolutionModel.findAll({
      where: { std_id: req.params.id },
      // where: { std_id: req.user?.id },
    });

    // filter those tasks which are pending mean inside taskSolution there will be assgnTask_id it means 5 asgnTask and 3 are tasksSol so then 5-3 2 will be left
    const pendingTasks = assginTasks
      .filter((it, ind) => {
        return it?.dataValues?.id !== taskSolution[ind]?.dataValues.ass_tsk_id;
      })
      .map((it) => it.dataValues);

    ResponseMessage(res, 200, pendingTasks);
  } catch (error) {
    ErrorMessage(res, error, 400);
  }
};

// get user's TaskSolution
export const getUsersTaskSolution = async (req: Request, res: Response) => {
  try {
    const data = await TaskSolutionModel.findAll({
      // where: { std_id: req.user?.id },
      where: { std_id: req.params?.id },
    });
    ResponseMessage(res, 200, data);
  } catch (error) {
    ErrorMessage(res, error, 400);
  }
};

// get user's TaskSolution count (2/16)
export const getUsersTaskSolutionCount = async (
  req: Request,
  res: Response
) => {
  try {
    const taskSolutionCount = await TaskSolutionModel.findAll({
      where: { std_id: req.user?.id, status: "APPROVED" },
    });

    const taskAssignCount = await AssignTaskModel.findAll({
      where: { std_id: req.user?.id },
    });
    let result = `${taskSolutionCount.length} / ${taskAssignCount.length}`;
    ResponseMessage(res, 200, undefined, result);
  } catch (error) {
    ErrorMessage(res, error, 400);
  }
};

// get user's Rejected TaskSolution
export const getUsersRejectedTaskSolution = async (
  req: Request,
  res: Response
) => {
  try {
    const data = await TaskSolutionModel.findAll({
      where: { std_id: req.params.id, status: "REJECTED" },
      // where: { std_id: req.user?.id, status: "REJECTED" },
    });
    ResponseMessage(res, 200, data);
  } catch (error) {
    ErrorMessage(res, error, 400);
  }
};

// get user's Approved TaskSolution
export const getUsersApprovedTaskSolution = async (
  req: Request,
  res: Response
) => {
  try {
    const data = await TaskSolutionModel.findAll({
      where: { std_id: req.params?.id, status: "APPROVED" },
      // where: { std_id: req.user?.id, status: "APPROVED" },
    });
    ResponseMessage(res, 200, data);
  } catch (error) {
    ErrorMessage(res, error, 400);
  }
};

// update TaskSolution
export const updateTaskSolution = async (req: any, res: Response) => {
  let pdfArray: string[] = [];
  let imgArray: string[] = [];
  let videoArray: string[] = [];

  // const pdf = req.files["pdf"]?.[0]?.filename;

  req.files["pdf"]?.map((it: Express.Multer.File) => {
    return pdfArray.push(it.filename);
  });

  req.files["image"]?.map((it: Express.Multer.File) => {
    return imgArray.push(it.filename);
  });

  req.files["video"]?.map((it: Express.Multer.File) => {
    return videoArray.push(it.filename);
  });

  const body: TaskSolutionType = req.body;
  const validation = updateTaskSolutionSchema.safeParse(req.body);

  try {
    if (!validation.success) return ValidationError(validation, res);
    const data = await TaskSolutionModel.findByPk(req.params.id);
    if (!data)
      return ErrorMessage(res, "no data found with id " + req.params.id, 400);
    else {
      const updateData = await TaskSolutionModel.update(
        { ...body, pdf: pdfArray, image: imgArray, video: videoArray },
        { where: { id: req.params.id } }
      );
      ResponseMessage(res, 200, "data updated successfully");
    }
  } catch (error) {
    ErrorMessage(res, error, 400);
  }
};

// update TaskSolution
export const updateTaskSolutionStatus = async (req: any, res: Response) => {
  const { status } = req.body;
  const validation = TaskSolStatusSchema.safeParse(req.body);

  try {
    if (!validation.success) return ValidationError(validation, res);
    const data = await TaskSolutionModel.findByPk(req.params.id);
    if (!data)
      return ErrorMessage(res, "no data found with id " + req.params.id, 400);
    else {
      const updateData = await TaskSolutionModel.update(
        { status: status },
        { where: { id: req.params.id } }
      );
      ResponseMessage(res, 200, undefined, "data updated successfully");
    }
  } catch (error) {
    ErrorMessage(res, error, 400);
  }
};

// delete TaskSolution
export const deleteTaskSolution = async (req: Request, res: Response) => {
  try {
    const data = await TaskSolutionModel.findByPk(req.params.id);
    if (!data)
      return ErrorMessage(res, "no data found with id " + req.params.id, 400);
    else {
      const deleteData = await TaskSolutionModel.destroy({
        where: { id: req.params.id },
      });
      ResponseMessage(res, 200, "data deleted successfully");
    }
  } catch (error) {
    ErrorMessage(res, error, 400);
  }
};
