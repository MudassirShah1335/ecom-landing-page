import { Request, Response } from "express";
import UserModel from "./userModel";
import bcrypt from "bcryptjs";
import jwt, { sign } from "jsonwebtoken";
import { ErrorMessage } from "../../utils/ErrorMessage";
import { sendMail } from "../../utils/SendMail";
import { ResponseMessage } from "../../utils/ResponseMessage";
import NodeCache from "node-cache";
import { UserProps } from "./UserType";
import ClassModel from "../classes/ClassModel";
import AssignTaskModel from "../assignTasks/AssignTaskModel";
import TaskModel from "../task/TaskModel";
import { RegisterStudentMsg, UpdateUserMsg } from "../../config/EmailMessages";

const cache = new NodeCache();
// create sUsers
export const createsUsers = async (req: any, res: Response): Promise<void> => {
  const { password, name, email, class_id, school_id } = req.body;

  const hashPassword = await bcrypt.hash(password, 12);
  try {
    const data = await UserModel.create({
      ...req.body,
      password: hashPassword,
      profile: req.file?.filename,
    });

    sendMail(
      [email],
      `Student Registration`,
      RegisterStudentMsg(`${name}`, password, email)
    );
    ResponseMessage(res, 200, data);
  } catch (error) {
    ErrorMessage(res, error, 400);
  }
};

export const assignTaskToCreatedUser = async (req: Request, res: Response) => {
  try {
    const data = await UserModel.findOne({
      where: { school_id: req.params.school_id },
      order: [["id", "DESC"]],
    });

    // assign task to student of the class
    const findUser = await UserModel.findOne({
      where: { class_id: data?.dataValues.class_id as number },
    });
    const findAssignTask = await AssignTaskModel.findAll({
      where: { std_id: findUser?.dataValues.id },
    });

    const assignTask = findAssignTask.map(async (task) => {
      await AssignTaskModel.create({
        std_id: data?.dataValues.id as number,
        task_id: task?.dataValues?.task_id as number,
        school_id: task?.dataValues?.school_id as number,
      });
    });
    ResponseMessage(res, 200, undefined, "task assigned");
  } catch (error) {
    ErrorMessage(res, error, 400);
  }
};

// get all sUsers
export const getAllUsers = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    // i have exculded the password because i dont want to show it to the user side
    const data = await UserModel.findAll({
      attributes: { exclude: ["password"] },
    });
    res.status(200).json({
      status: "success",
      length: data.length,
      data,
    });
  } catch (error) {
    res.json({
      status: "fail",
      message: error,
    });
  }
};

// get single Users
export const getSingleUsers = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    // i have exculded the password because i dont want to show it to the user side

    const data = await UserModel.findByPk(req.params.id, {
      attributes: { exclude: ["password"] },
    });
    if (!data)
      return res.status(400).json({
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

// update sUsers
export const updatesUsers = async (
  req: Request,
  res: Response
): Promise<any> => {
  const { password, name, mobile_no, email } = req.body;

  try {
    const data = await UserModel.findByPk(req.params.id);
    if (!data)
      return ErrorMessage(res, "no data found with id " + req.params.id, 400);

    if (password) {
      const hashPassword = await bcrypt.hash(password, 12);
      const updateData = await UserModel.update(
        { ...req.body, password: hashPassword, profile: req.file?.filename },
        { where: { id: req.params.id } }
      );
    } else {
      const updateData = await UserModel.update(
        { name, mobile_no, email, profile: req.file?.filename },
        { where: { id: req.params.id } }
      );
    }
    sendMail([email], "User Updated", UpdateUserMsg(name, password, email));
    ResponseMessage(res, 200, undefined, "data updated successfully");
  } catch (error) {
    ErrorMessage(res, error, 400);
  }
};

// update updatesUserStatus
export const updatesUserStatus = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const data = await UserModel.findByPk(req.params.id);
    if (!data)
      res.status(400).json({
        status: "fail",
        message: "no data found with id " + req.params.id,
      });
    else {
      const updateData = await UserModel.update(
        { status: req.body.status },
        {
          where: { id: req.params.id },
        }
      );
    }
    ResponseMessage(res, 200, undefined, "status updated successfully");
  } catch (error) {
    ErrorMessage(res, error, 400);
  }
};

// Delete sUsers
export const deletesUsers = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const data = await UserModel.findByPk(req.params.id);
    if (!data)
      return res.status(400).json({
        status: "fail",
        message: "no data found with id " + req.params.id,
      });
    else {
      const deleteData = await UserModel.destroy({
        where: { id: req.params.id },
      });
    }
    ResponseMessage(res, 200, undefined, "data deleted successfully");
  } catch (error) {
    ErrorMessage(res, error, 400);
  }
};

// assign User to teacher
export const assignStdToTeacher = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { teacher_id } = req.body;
  try {
    // this will store the teacher id inside std data and when fetch every std will have its own teacher many std will have 1 teacher
    const data = await UserModel.update(
      { teacher_id },
      { where: { id: req.params.id } }
    );
    ResponseMessage(res, 200, undefined, "user assigned to teacher");
  } catch (error) {
    ErrorMessage(res, error, 400);
  }
};

// get all students of teachers
export const getAllTeachersStd = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    // i have exculded the password because i dont want to show it to the user side
    const data = await UserModel.findAll({
      attributes: { exclude: ["password"] },
      where: { teacher_id: req.params.id },
      // where: { teacher_id: req.user?.id },
    });
    res.status(200).json({
      status: "success",
      length: data.length,
      data,
    });
  } catch (error) {
    res.json({
      status: "fail",
      message: error,
    });
  }
};

// login users
export const loginUser = async (req: Request, res: Response) => {
  const { email, password, role_id }: UserProps = req.body;

  if (!email || !password || !role_id) {
    return res.status(400).json({
      status: "fail",
      message: "please enter email , password or roleId ",
    });
  }
  try {
    const user: any = await UserModel.findOne({
      where: { email, role_id },
      // attributes:{exclude:['password']}
    });

    // UserAttributes
    if (!user) return ErrorMessage(res, "wrong credentials", 400);

    const comparePassword = await bcrypt.compare(password, user.password);

    if (!comparePassword) return ErrorMessage(res, "wrong credentials", 400);

    // condition to login only active users
    if (!user?.dataValues.status)
      return ErrorMessage(res, "only active users allowed", 400);

    const token = jwt.sign(
      { email: user.email, id: user.id },
      process.env.SECRETE_KEY as string,
      { expiresIn: "24h" }
    );

    const options = {
      expires: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
      httpOnly: true,
    };

    // let {id,role_id,_id,name,=user
    // we are extracting the password from the user object that is not gona be shown in the end point
    const userData = user.get({ plain: true }) as { [key: string]: any };
    delete userData.password; // Remove the password field from the user data
    return res
      .status(200)
      .cookie("token", token, options)
      .json({ result: userData, token });
  } catch (error) {
    ErrorMessage(res, error, 400);
  }
};

// logOut users
export const LogOutUser = (req: Request, res: Response) => {
  try {
    res.cookie("token", null, {
      expires: new Date(Date.now()),
      httpOnly: true,
    });
    ResponseMessage(res, 200, undefined, "user logout successfully");
  } catch (error) {
    ErrorMessage(res, error, 400);
  }
};

export const getCookies = async (
  req: any,
  res: Response
): Promise<Response | void> => {
  // console.log('cookie', req.cookies);

  const { token } = req.cookies;
  try {
    if (!token) {
      return;
    }
    return res.json({
      user: req?.user,
      token,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};

// forget password will send a Notification code to the email and will have 1 to 2 minuts for verification.
// after verication success redirect to new Password and Confirm Password

// forget password.
export const forgetPassword = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const findEmail = await UserModel.findOne({
      where: { email: req.body.email },
    });
    if (!findEmail)
      return ErrorMessage(res, "no data found with given Email", 404);
    // const value = Math.random().toString();
    // const code = value.slice(value.length - 7, value.length - 1);

    // Generate a random 4-digit number
    function generateRandom4DigitNumber() {
      // Generate a random number between 0 and 9999
      const randomNumber = Math.floor(Math.random() * 10000);
      // Ensure the number has exactly 4 digits by adding leading zeros if necessary
      const fourDigitNumber = randomNumber.toString().padStart(4, "0");
      return fourDigitNumber;
    }
    const randomCode = generateRandom4DigitNumber();
    // this will store a code in cache for 60 seconds and then we will compare it with the sended code in email inside verficationCode() function
    // cache.set("code",code)
    cache.set("code", parseInt(randomCode), 60); //storing for 1 mnts
    cache.set("user", findEmail, 240); //storing for 4 mnts

    sendMail(
      [req.body.email],
      "Password verifcation Code",
      `<p>your verication code is ${parseInt(randomCode)}</p>`
    );

    ResponseMessage(
      res,
      200,
      undefined,
      `verification code send to ${req.body.email}`
    );
  } catch (error) {
    ErrorMessage(res, error, 400);
  }
};

// a verifcation code will be send to the email and verified
export const verificationCode = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const verifyCode = cache.get("code") as string;

    // let user:UserProp | undefined =cache.get("user")
    let user: any = cache.get("user");

    const token = jwt.sign(
      { email: user?.email, id: user?.id },
      process.env.SECRETE_KEY as string
    );

    const options = {
      expires: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
      httpOnly: true,
    };

    if (parseInt(verifyCode) === parseInt(req.body.code)) {
      res
        .status(200)
        .cookie("token", token, options)
        .json({
          message: `Verification Successfully ${req.body.code}`,
          token,
          id: user?.id,
        });
    } else {
      ErrorMessage(res, `Verification Failed with ${req.body.code}`, 400);
    }
  } catch (error) {
    ErrorMessage(res, `token might be expired please send token again`, 400);
  }
};
