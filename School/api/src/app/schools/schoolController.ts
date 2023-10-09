import bcrypt from "bcryptjs";
import { z } from "zod";
import { Request, Response } from "express";

import UserModel from "../users/userModel";
import SchoolModel from "./schoolModel";
import { ValidationError } from "../../utils/ValidationError";
import { ErrorMessage } from "../../utils/ErrorMessage";
import { checkValueExists } from "../../utils/CheckValueExist";
import { ResponseMessage } from "../../utils/ResponseMessage";
import deleteImage from "../../utils/DeleteImage";
import { SchoolProps } from "./SchoolType";
import { createSChoolSchema } from "./SchoolSchema";
import { sendMail } from "../../utils/SendMail";
import { createSchoolMsg, updateSchoolMsg } from "../../config/EmailMessages";

// get all Schools
export const getAllSchools = async (req: Request, res: Response) => {
  try {
    const data = await SchoolModel.findAll();
    ResponseMessage(res, 200, data);
  } catch (error) {
    ErrorMessage(res, error, 400);
  }
};

// get all SchoolsUsers
export const getAllSchoolsUsers = async (req: Request, res: Response) => {
  try {
    const data = await SchoolModel.findAll({
      where: { id: req.params.id },
      include: [{ model: UserModel, attributes: ["id", "email", "name", ""] }],
    });
    ResponseMessage(res, 200, data);
  } catch (error) {
    ErrorMessage(res, error, 400);
  }
};

// get all Schools Teachers
export const getAllSchoolsTeachers = async (req: Request, res: Response) => {
  try {
    const data = await SchoolModel.findAll({
      where: { id: req.params.id },
      include: [
        {
          model: UserModel,
          attributes: ["id", "email", "name", "profile"],
          where: { role_id: 3 },
        },
      ],
    });
    ResponseMessage(res, 200, data);
  } catch (error) {
    ErrorMessage(res, error, 400);
  }
};

// get all Schools Students
export const getAllSchoolsStudents = async (req: Request, res: Response) => {
  try {
    const data = await SchoolModel.findAll({
      where: { id: req.params.id },
      include: [
        {
          model: UserModel,
          attributes: ["id", "email", "name", "profile"],
          where: { role_id: 4 },
        },
      ],
    });
    ResponseMessage(res, 200, data);
  } catch (error) {
    ErrorMessage(res, error, 400);
  }
};

// get single Schools
export const getSingleSchool = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = await SchoolModel.findByPk(id);
    if (!data) return ErrorMessage(res, "no data found with id : " + id, 400);
    ResponseMessage(res, 200, data);
  } catch (error) {
    ErrorMessage(res, error, 400);
  }
};

// create Schools
export const createSchools = async (req: any, res: Response) => {
  const body: SchoolProps = req.body;

  const { name, mobile_no, email, password, address } = req.body;
  const validation = createSChoolSchema.safeParse(req.body);

  try {
    if (!validation.success) return ValidationError(validation, res);

    const userEmailExists = await checkValueExists(UserModel, "email", email);
    if (userEmailExists) {
      return ErrorMessage(res, "User Email already exists.", 400);
    }

    const school = await SchoolModel.create({
      address,
      school_name: name,
      add_by: req.user?.id,
    });

    const hashPassword = await bcrypt.hash(password, 12);
    const user = await UserModel.create({
      role_id: 2,
      name: name,
      school_id: school.dataValues.id,
      mobile_no,
      email,
      password: hashPassword,
      profile: req.file.filename,
    });
    sendMail(
      [email],
      "New School Registration",
      createSchoolMsg(name, email, password)
    );
    ResponseMessage(res, 200, undefined, "School data created successfully");
  } catch (error: any) {
    ErrorMessage(res, error.message, 400);
  }
};

// // update School
// export const updateSchool = async (req: any, res: Response) => {
//   const { name, mobile_no, user_id , email, password } =
//     req.body;

//   try {
//     // checking if the 2 tables exists are not
//     const school = await SchoolModel.findByPk(req.params.id);
//     const user = await UserModel.findByPk(user_id);

//     if (!user)
//       return ErrorMessage(res, "User data not found with id " + user_id, 400);
//     if (!school)
//       return ErrorMessage(
//         res,
//         "School data not found with id " + req.params.id,
//         400
//       );

//     const data = await SchoolModel.update(
//       {
//         email: school_email,
//         ...req.body,
//       },
//       { where: { id: req.params.id } }
//     );

//     if (password) {
//       const hashPassword = await bcrypt.hash(req.body.password, 12);
//       const updateData = await UserModel.update(
//         {
//           ...req.body,
//           password: hashPassword,
//           updated_by: req?.user?.user_id,
//           updated_at: new Date(),
//         },
//         { where: { id: user_id } }
//       );
//     } else {
//       const updateData = await UserModel.update(
//         {
//           name,
//           mobile_no,
//           email: user_email,
//         },
//         { where: { id: user_id } }
//       );
//     }
//     sendMail(
//       [user_email],
//       "School Data Updation",
//       updateSchoolMsg(name, user_email, password)
//     );
//     ResponseMessage(res, 200, undefined, "data updated successfully");
//   } catch (error) {
//     ErrorMessage(res, error, 400);
//   }
// };

// update School
export const updateSchool = async (req: any, res: Response) => {
  const { address, name } = req.body;

  try {
    const school = await SchoolModel.findByPk(req.params.id);

    if (!school)
      return ErrorMessage(
        res,
        "School data not found with id " + req.params.id,
        400
      );

    const data = await SchoolModel.update(
      {
        school_name: name,
        address,
      },
      { where: { id: req.params.id } }
    );

    // sendMail(
    //   [user_email],
    //   "School Data Updation",
    //   updateSchoolMsg(name, user_email, password)
    // );
    ResponseMessage(res, 200, undefined, "data updated successfully");
  } catch (error) {
    ErrorMessage(res, error, 400);
  }
};

// update Schools Status
export const updateSchoolsStatus = async (req: Request, res: Response) => {
  try {
    const findSchool = await SchoolModel.findByPk(req.params.id);
    if (!findSchool) return ErrorMessage(res, "no data found", 400);
    const allSchoolUser = await UserModel.findAll({
      where: { school_id: req.params.id },
    });

    // for updating all status of the Schools Users
    allSchoolUser.map((usr) => {
      return UserModel.update(
        { status: req.body.status },
        { where: { id: usr.dataValues.id } }
      );
    });

    const data = await SchoolModel.update(
      { status: req.body.status },
      { where: { id: req.params.id } }
    );

    ResponseMessage(res, 200, undefined, "status updated successfully");
  } catch (error) {
    ErrorMessage(res, error, 400);
  }
};

export const deleteSchool = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const findSchool = await SchoolModel.findByPk(id);
    if (!findSchool) return ErrorMessage(res, "no data found :" + id, 400);

    const data = await SchoolModel.destroy({ where: { id: id } });

    ResponseMessage(res, 200, undefined, "School deleted successfully");
  } catch (error) {
    ErrorMessage(res, error, 400);
  }
};
