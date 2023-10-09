import { Request, Response } from "express";
import assignAward from "./AssignAwardModel";
import { ResponseMessage } from "../../utils/ResponseMessage";
import { ErrorMessage } from "../../utils/ErrorMessage";
import TaskSolutionModel from "../taskSolution/TaskSolutionModel";
import UserModel from "../users/userModel";
import AwardModel from "../Awards/AwardModel";
// create assignAward
export const createAssignAward = async (req: Request, res: Response) => {
  try {
    const taskSol = await TaskSolutionModel.findAll({
      where: { std_id: req.user?.id, status: "APPROVED" },
    });

    const user = await UserModel.findOne({ where: { id: req.user?.id } });
    const award = await AwardModel.findOne({
      where: { class_id: user?.dataValues.class_id },
    });

    if ((taskSol.length = 16)) {
      assignAward.create({
        user_id: req.user?.id as number,
        award_id: award?.dataValues.id as number,
      });

      ResponseMessage(res, 200, undefined, "congratulation you win the award");
    }
  } catch (error) {
    ErrorMessage(res, error, 400);
  }
};

// get user assignaward
export const getUserAssignAwards = async (req: Request, res: Response) => {
  try {
    const data = await assignAward.findOne({
      where: { user_id: req.user?.id },
    });
    if (!data)
      return ErrorMessage(res, "no data found with id " + req.params.id, 400);
    else {
      ResponseMessage(res, 200, data);
    }
  } catch (error) {
    ErrorMessage(res, error, 400);
  }
};
