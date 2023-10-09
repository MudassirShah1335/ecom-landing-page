import { Request, Response } from "express";
import TaskModel from "./TaskModel";
import { ResponseMessage } from "../../utils/ResponseMessage";
import { ErrorMessage } from "../../utils/ErrorMessage";
import { TaskType } from "./TaskType";
import { ValidationError } from "../../utils/ValidationError";
import {
  createCustomTaskSchema,
  createTaskSchema,
  updateTaskSchema,
} from "./TaskSchema";
import { Op } from "sequelize";
import ClassModel from "../classes/ClassModel";

// create Task
export const createTask = async (req: Request, res: Response) => {
  const body: TaskType = req.body;
  const validation = createTaskSchema.safeParse(req.body);

  try {
    if (!validation.success) return ValidationError(validation, res);
    const data = await TaskModel.create({
      ...body,
      created_by: req.user?.id as number,
    });
    ResponseMessage(res, 200, data);
  } catch (error) {
    ErrorMessage(res, error, 400);
  }
};

// create custome Task
export const createCustomeTask = async (req: Request, res: Response) => {
  const body: TaskType = req.body;
  const validation = createCustomTaskSchema.safeParse(req.body);

  try {
    if (!validation.success) return ValidationError(validation, res);
    const data = await TaskModel.create({
      ...body,
      created_by: req.user?.id as number,
    });
    ResponseMessage(res, 200, data);
  } catch (error) {
    ErrorMessage(res, error, 400);
  }
};

// get all Task
export const getAllTask = async (req: Request, res: Response) => {
  try {
    const data = await TaskModel.findAll();
    ResponseMessage(res, 200, data);
  } catch (error) {
    ErrorMessage(res, error, 400);
  }
};

// get all school Task
export const getAllSchoolTasks = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const data = await TaskModel.findAll({
      where: {
        [Op.or]: [{ school_id: id }, { school_id: null }],
        // school_id: id | null,
        // //  {
        // // [Op.eq]: id,
        // // [Op.eq]: null,
        // // },
      },
    });
    ResponseMessage(res, 200, data);
  } catch (error) {
    ErrorMessage(res, error, 400);
  }
};

// get all Class Tasks
export const getAllClassTasks = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const data = await ClassModel.findAll({
      include: [{ model: TaskModel }],
    });
    ResponseMessage(res, 200, data);
  } catch (error) {
    ErrorMessage(res, error, 400);
  }
};

// get single Task
export const getSingleTask = async (req: Request, res: Response) => {
  try {
    const data = await TaskModel.findByPk(req.params.id);
    if (!data)
      return ErrorMessage(res, "no data found with id " + req.params.id, 400);
    else {
      ResponseMessage(res, 200, data);
    }
  } catch (error) {
    ErrorMessage(res, error, 400);
  }
};

// update Task
export const updateTask = async (req: Request, res: Response) => {
  const body: TaskType = req.body;
  const validation = updateTaskSchema.safeParse(req.body);

  try {
    if (!validation.success) return ValidationError(validation, res);
    const data = await TaskModel.findByPk(req.params.id);
    if (!data)
      return ErrorMessage(res, "no data found with id " + req.params.id, 400);
    else {
      const updateData = await TaskModel.update(
        { ...body },
        { where: { id: req.params.id } }
      );
      ResponseMessage(res, 200, undefined, "data updated successfully");
    }
  } catch (error) {
    ErrorMessage(res, error, 400);
  }
};

// delete Task
export const deleteTask = async (req: Request, res: Response) => {
  try {
    const data = await TaskModel.findByPk(req.params.id);
    if (!data)
      return ErrorMessage(res, "no data found with id " + req.params.id, 400);
    else {
      const deleteData = await TaskModel.destroy({
        where: { id: req.params.id },
      });
      ResponseMessage(res, 200, undefined, "data deleted successfully");
    }
  } catch (error) {
    ErrorMessage(res, error, 400);
  }
};
