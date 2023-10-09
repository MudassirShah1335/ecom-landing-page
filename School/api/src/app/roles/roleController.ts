import { Request, Response } from "express";
import RoleModel from "./roleModel";

// create Role
export const createRole = async (req: Request, res: Response) => {
  try {
    const data = await RoleModel.create(req.body);
    res.status(200).json({
      status: "success",
      data,
    });
  } catch (error) {
    res.status(200).json({
      status: "fail",
      message: error,
    });
  }
};

// get all Role
export const getAllRole = async (req: Request, res: Response) => {
  try {
    const data = await RoleModel.findAll();
    res.status(200).json({
      status: "success",
      data,
    });
  } catch (error) {
    res.status(200).json({
      status: "fail",
      message: error,
    });
  }
};

// get single Role
export const getSingleRole = async (req: Request, res: Response) => {
  try {
    const data = await RoleModel.findByPk(req.params.id);
    if (!data)
      return res
        .status(400)
        .json({
          status: "fail",
          message: "no data found with id " + req.params.id,
        });
    else {
      res.status(200).json({
        status: "success",
        data,
      });
    }
  } catch (error) {
    res.status(200).json({
      status: "fail",
      message: error,
    });
  }
};

// update Role
export const updateRole = async (req: Request, res: Response) => {
  try {
    const data = await RoleModel.findByPk(req.params.id);
    if (!data)
      return res
        .status(400)
        .json({
          status: "fail",
          message: "no data found with id " + req.params.id,
        });
    else {
      const updateData = await RoleModel.update(
        { role_name: req.body?.role_name },
        { where: { role_id: req.params.id } }
      );
      res.status(200).json({
        status: "success",
        message: "data updated successfully",
      });
    }
  } catch (error) {
    res.status(200).json({
      status: "fail",
      message: error,
    });
  }
};

// update RoleStatus
export const updateRoleStatus = async (req: Request, res: Response) => {
  try {
    const data = await RoleModel.findByPk(req.params.id);
    if (!data)
      return res
        .status(400)
        .json({
          status: "fail",
          message: "no data found with id " + req.params.id,
        });
    else {
      const updateData = await RoleModel.update(
        { status: req.body.status },
        { where: { role_id: req.params.id } }
      );
      res.status(200).json({
        status: "success",
        message: "Role updated successfully",
      });
    }
  } catch (error) {
    res.status(200).json({
      status: "fail",
      message: error,
    });
  }
};

// delete Role
export const deleteRole = async (req: Request, res: Response) => {
  try {
    const data = await RoleModel.findByPk(req.params.id);
    if (!data)
      return res
        .status(400)
        .json({
          status: "fail",
          message: "no data found with id " + req.params.id,
        });
    else {
      const deleteData = await RoleModel.destroy({
        where: { role_id: req.params.id },
      });
      res.status(200).json({
        status: "success",
        message: "data deleted successfully",
      });
    }
  } catch (error) {
    res.status(200).json({
      status: "fail",
      message: error,
    });
  }
};
