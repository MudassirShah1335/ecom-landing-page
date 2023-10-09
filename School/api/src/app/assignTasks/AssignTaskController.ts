import { Request, Response } from "express";
import { ResponseMessage } from "../../utils/ResponseMessage";
import { ErrorMessage } from "../../utils/ErrorMessage";
import AssignTask from "./AssignTaskModel";
import User from "../users/userModel";
import TaskModel from "../task/TaskModel";
import SchoolModel from "../schools/schoolModel";
import { assignTaskSchema } from "./AssignTaskSchema";
import { ValidationError } from "../../utils/ValidationError";

// create AssignTask
export const createAssignTask = async (req: Request, res: Response) => {
  const { class_id, task_id, school_id, description } = req.body;
  const validation = assignTaskSchema.safeParse(req.body);
  try {
    if (!validation.success) return ValidationError(validation, res);

    const users = await User.findAll({ where: { class_id } });

    const promises = users.map(async (it) => {
      const findAll = await AssignTask.findAll({
        where: { school_id, task_id, std_id: it.dataValues.id },
      });

      if (findAll.length > 0) {
        await AssignTask.destroy({
          where: { school_id, task_id, std_id: it.dataValues.id },
        });
        return "task denied";
      } else {
        await AssignTask.create({
          std_id: it.dataValues.id as number,
          task_id,
          school_id,
          description,
        });
        return "task assigned";
      }
    });

    // Wait for all promises to resolve
    const results = await Promise.all(promises);

    // Check if any result indicates "task denied"
    if (results.includes("task denied")) {
      return ResponseMessage(res, 200, undefined, "task denied");
    } else {
      return ResponseMessage(res, 200, undefined, "task assigned");
    }
  } catch (error) {
    ErrorMessage(res, error, 400);
  }

  // const { class_id, task_id, school_id } = req.body;
  // try {
  //   const users = await User.findAll({ where: { class_id } });

  //   return users.map(async (it) => {
  //     const findAll = await AssignTask.findAll({
  //       where: { school_id, task_id, std_id: it.dataValues.id },
  //     });

  //     if (findAll.length > 0) {
  //       await AssignTask.destroy({
  //         where: { school_id, task_id, std_id: it.dataValues.id },
  //       });
  //       return ResponseMessage(res, 200, undefined, "task denied ");
  //     } else {
  //       users.map(async (usr) => {
  //         await AssignTask.create({
  //           std_id: usr.dataValues.id as number,
  //           task_id,
  //           school_id,
  //         });
  //       });
  //       return ResponseMessage(res, 200, undefined, "task assigned ");
  //     }
  //   });
  // } catch (error) {
  //   ErrorMessage(res, error, 400);
  // }
};

// get all AssignTask
export const getAllAssignTask = async (req: Request, res: Response) => {
  try {
    const data = await AssignTask.findAll({
      include: [
        { model: User, attributes: { exclude: ["password"] } },
        { model: TaskModel },
      ],
    });
    ResponseMessage(res, 200, data);
  } catch (error) {
    ErrorMessage(res, error, 400);
  }
};

// get all user's assigned Tasks
export const getAllUsersAssignedTasks = async (req: Request, res: Response) => {
  try {
    const data = await AssignTask.findAll({
      where: { std_id: req.user?.id },
      include: [
        { model: User, attributes: { exclude: ["password"] } },
        { model: TaskModel },
      ],
    });
    ResponseMessage(res, 200, data);
  } catch (error) {
    ErrorMessage(res, error, 400);
  }
};

// get all user's assigned Tasks
export const getAllSchoolAssignedTasks = async (
  req: Request,
  res: Response
) => {
  try {
    const data = await AssignTask.findAll({
      where: { school_id: req.params.id },
      include: [
        // { model: SchoolModel, attributes: ["school_name", "address", "phone"] },
        { model: TaskModel, attributes: ["title", "description"] },
      ],
    });
    ResponseMessage(res, 200, data);
  } catch (error) {
    ErrorMessage(res, error, 400);
  }
};

// get single AssignTask
export const getSingleAssignTask = async (req: Request, res: Response) => {
  try {
    const data = await AssignTask.findByPk(req.params.id, {
      include: [{ model: User }, { model: TaskModel }],
    });
    if (!data) return ErrorMessage(res, "no data found", 400);
    else {
      ResponseMessage(res, 200, data);
    }
  } catch (error) {
    ErrorMessage(res, error, 400);
  }
};

// update AssignTask
export const updateAssignTask = async (req: Request, res: Response) => {
  try {
    const data = await AssignTask.findByPk(req.params.id);
    if (!data) return ErrorMessage(res, "no data found", 400);
    else {
      const updateData = await AssignTask.update(
        { ...req.body },
        { where: { id: req.params.id } }
      );
      ResponseMessage(res, 200, undefined, "data updated");
    }
  } catch (error) {
    ErrorMessage(res, error, 400);
  }
};

// delete AssignTask
export const deleteAssignTask = async (req: Request, res: Response) => {
  try {
    const data = await AssignTask.findByPk(req.params.id);
    if (!data) return ErrorMessage(res, "no data found", 400);
    else {
      const deleteData = await AssignTask.destroy({
        where: { id: req.params.id },
      });
      ResponseMessage(res, 200, undefined, "data deleted");
    }
  } catch (error) {
    ErrorMessage(res, error, 400);
  }
};
