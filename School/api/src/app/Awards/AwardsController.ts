import { Request, Response } from "express";
import Award from "./AwardModel";
import { ResponseMessage } from "../../utils/ResponseMessage";
import { ErrorMessage } from "../../utils/ErrorMessage";
import TaskSolutionModel from "../taskSolution/TaskSolutionModel";
import { ValidationError } from "../../utils/ValidationError";
import { awardSchema } from "./awardSchema";
// create Award
export const createAward = async (req: Request, res: Response) => {
  const { award, level, class_id } = req.body;
  let id = Number(class_id);
  const validation = awardSchema.safeParse({ ...req.body, class_id: id });
  try {
    if (!validation.success) return ValidationError(validation, res);
    const data = await Award.create({
      user_id: 1 as number,
      class_id: id,
      award,
      level,
      image: req.file?.filename as Express.Multer.File["filename"],
    });
    ResponseMessage(res, 200, data);
  } catch (error) {
    ErrorMessage(res, error, 400);
  }
};

// get all Award
export const getAllAward = async (req: Request, res: Response) => {
  try {
    const data = await Award.findAll();
    ResponseMessage(res, 200, data);
  } catch (error) {
    ErrorMessage(res, error, 400);
  }
};

// get single Award
export const getSingleAward = async (req: Request, res: Response) => {
  try {
    const data = await Award.findByPk(req.params.id);
    if (!data)
      return ErrorMessage(res, "no data found with id " + req.params.id, 400);
    else {
      ResponseMessage(res, 200, data);
    }
  } catch (error) {
    ErrorMessage(res, error, 400);
  }
};

// update Award
export const updateAward = async (req: Request, res: Response) => {
  const { award, level, class_id } = req.body;
  let id = Number(class_id);
  const validation = awardSchema.safeParse({ ...req.body, class_id: id });
  try {
    if (!validation.success) return ValidationError(validation, res);
    const data = await Award.findByPk(req.params.id);
    if (!data)
      return ErrorMessage(res, "no data found with id " + req.params.id, 400);
    else {
      const updateData = await Award.update(
        {
          user_id: 1 as number,
          class_id: id,
          award,
          level,
          image: req.file?.filename as Express.Multer.File["filename"],
        },
        { where: { id: req.params.id } }
      );
      ResponseMessage(res, 200, undefined, "data updated");
    }
  } catch (error) {
    ErrorMessage(res, error, 400);
  }
};

// delete Award
export const deleteAward = async (req: Request, res: Response) => {
  try {
    const data = await Award.findByPk(req.params.id);
    if (!data)
      return ErrorMessage(res, "no data found with id " + req.params.id, 400);
    else {
      const deleteData = await Award.destroy({
        where: { id: req.params.id },
      });
      ResponseMessage(res, 200, undefined, "data deleted");
    }
  } catch (error) {
    ErrorMessage(res, error, 400);
  }
};
