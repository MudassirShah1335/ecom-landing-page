import { Request, Response } from "express";
import Class from "./ClassModel";
import { ResponseMessage } from "../../utils/ResponseMessage";
import { ErrorMessage } from "../../utils/ErrorMessage";
// create Class
export const createClass = async (req: Request, res: Response) => {
  if (!req.body.class_name)
    return ErrorMessage(res, "please enter class name", 400);
  try {
    const data = await Class.create(req.body);
    ResponseMessage(res, 200, data);
  } catch (error) {
    ErrorMessage(res, error, 400);
  }
};

// get all Class
export const getAllClass = async (req: Request, res: Response) => {
  try {
    const data = await Class.findAll();
    ResponseMessage(res, 200, data);
  } catch (error) {
    ErrorMessage(res, error, 400);
  }
};

// get single Class
export const getSingleClass = async (req: Request, res: Response) => {
  try {
    const data = await Class.findByPk(req.params.id);
    if (!data)
      return ErrorMessage(res, "no data found with id " + req.params.id, 400);
    else {
      ResponseMessage(res, 200, data);
    }
  } catch (error) {
    ErrorMessage(res, error, 400);
  }
};

// update Class
export const updateClass = async (req: Request, res: Response) => {
  try {
    const data = await Class.findByPk(req.params.id);
    if (!data)
      return ErrorMessage(res, "no data found with id " + req.params.id, 400);
    else {
      const updateData = await Class.update(
        { class_name: req.body?.class_name },
        { where: { id: req.params.id } }
      );
      ResponseMessage(res, 200, undefined, "data updated");
    }
  } catch (error) {
    ErrorMessage(res, error, 400);
  }
};

// delete Class
export const deleteClass = async (req: Request, res: Response) => {
  try {
    const data = await Class.findByPk(req.params.id);
    if (!data)
      return ErrorMessage(res, "no data found with id " + req.params.id, 400);
    else {
      const deleteData = await Class.destroy({
        where: { id: req.params.id },
      });
      ResponseMessage(res, 200, undefined, "data deleted");
    }
  } catch (error) {
    ErrorMessage(res, error, 400);
  }
};
