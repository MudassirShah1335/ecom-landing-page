"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteSchool = exports.updateSchoolsStatus = exports.updateSchool = exports.createSchools = exports.getSingleSchool = exports.getAllSchoolsStudents = exports.getAllSchoolsTeachers = exports.getAllSchoolsUsers = exports.getAllSchools = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const userModel_1 = __importDefault(require("../users/userModel"));
const schoolModel_1 = __importDefault(require("./schoolModel"));
const ValidationError_1 = require("../../utils/ValidationError");
const ErrorMessage_1 = require("../../utils/ErrorMessage");
const CheckValueExist_1 = require("../../utils/CheckValueExist");
const ResponseMessage_1 = require("../../utils/ResponseMessage");
const SchoolSchema_1 = require("./SchoolSchema");
const SendMail_1 = require("../../utils/SendMail");
const EmailMessages_1 = require("../../config/EmailMessages");
// get all Schools
const getAllSchools = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield schoolModel_1.default.findAll();
        (0, ResponseMessage_1.ResponseMessage)(res, 200, data);
    }
    catch (error) {
        (0, ErrorMessage_1.ErrorMessage)(res, error, 400);
    }
});
exports.getAllSchools = getAllSchools;
// get all SchoolsUsers
const getAllSchoolsUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield schoolModel_1.default.findAll({
            where: { id: req.params.id },
            include: [{ model: userModel_1.default, attributes: ["id", "email", "name", ""] }],
        });
        (0, ResponseMessage_1.ResponseMessage)(res, 200, data);
    }
    catch (error) {
        (0, ErrorMessage_1.ErrorMessage)(res, error, 400);
    }
});
exports.getAllSchoolsUsers = getAllSchoolsUsers;
// get all Schools Teachers
const getAllSchoolsTeachers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield schoolModel_1.default.findAll({
            where: { id: req.params.id },
            include: [
                {
                    model: userModel_1.default,
                    attributes: ["id", "email", "name", "profile"],
                    where: { role_id: 3 },
                },
            ],
        });
        (0, ResponseMessage_1.ResponseMessage)(res, 200, data);
    }
    catch (error) {
        (0, ErrorMessage_1.ErrorMessage)(res, error, 400);
    }
});
exports.getAllSchoolsTeachers = getAllSchoolsTeachers;
// get all Schools Students
const getAllSchoolsStudents = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield schoolModel_1.default.findAll({
            where: { id: req.params.id },
            include: [
                {
                    model: userModel_1.default,
                    attributes: ["id", "email", "name", "profile"],
                    where: { role_id: 4 },
                },
            ],
        });
        (0, ResponseMessage_1.ResponseMessage)(res, 200, data);
    }
    catch (error) {
        (0, ErrorMessage_1.ErrorMessage)(res, error, 400);
    }
});
exports.getAllSchoolsStudents = getAllSchoolsStudents;
// get single Schools
const getSingleSchool = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const data = yield schoolModel_1.default.findByPk(id);
        if (!data)
            return (0, ErrorMessage_1.ErrorMessage)(res, "no data found with id : " + id, 400);
        (0, ResponseMessage_1.ResponseMessage)(res, 200, data);
    }
    catch (error) {
        (0, ErrorMessage_1.ErrorMessage)(res, error, 400);
    }
});
exports.getSingleSchool = getSingleSchool;
// create Schools
const createSchools = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const body = req.body;
    const { name, mobile_no, email, password, address } = req.body;
    const validation = SchoolSchema_1.createSChoolSchema.safeParse(req.body);
    try {
        if (!validation.success)
            return (0, ValidationError_1.ValidationError)(validation, res);
        const userEmailExists = yield (0, CheckValueExist_1.checkValueExists)(userModel_1.default, "email", email);
        if (userEmailExists) {
            return (0, ErrorMessage_1.ErrorMessage)(res, "User Email already exists.", 400);
        }
        const school = yield schoolModel_1.default.create({
            address,
            school_name: name,
            add_by: (_a = req.user) === null || _a === void 0 ? void 0 : _a.id,
        });
        const hashPassword = yield bcryptjs_1.default.hash(password, 12);
        const user = yield userModel_1.default.create({
            role_id: 2,
            name: name,
            school_id: school.dataValues.id,
            mobile_no,
            email,
            password: hashPassword,
            profile: req.file.filename,
        });
        (0, SendMail_1.sendMail)([email], "New School Registration", (0, EmailMessages_1.createSchoolMsg)(name, email, password));
        (0, ResponseMessage_1.ResponseMessage)(res, 200, undefined, "School data created successfully");
    }
    catch (error) {
        (0, ErrorMessage_1.ErrorMessage)(res, error.message, 400);
    }
});
exports.createSchools = createSchools;
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
const updateSchool = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { address, name } = req.body;
    try {
        const school = yield schoolModel_1.default.findByPk(req.params.id);
        if (!school)
            return (0, ErrorMessage_1.ErrorMessage)(res, "School data not found with id " + req.params.id, 400);
        const data = yield schoolModel_1.default.update({
            school_name: name,
            address,
        }, { where: { id: req.params.id } });
        // sendMail(
        //   [user_email],
        //   "School Data Updation",
        //   updateSchoolMsg(name, user_email, password)
        // );
        (0, ResponseMessage_1.ResponseMessage)(res, 200, undefined, "data updated successfully");
    }
    catch (error) {
        (0, ErrorMessage_1.ErrorMessage)(res, error, 400);
    }
});
exports.updateSchool = updateSchool;
// update Schools Status
const updateSchoolsStatus = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const findSchool = yield schoolModel_1.default.findByPk(req.params.id);
        if (!findSchool)
            return (0, ErrorMessage_1.ErrorMessage)(res, "no data found", 400);
        const allSchoolUser = yield userModel_1.default.findAll({
            where: { school_id: req.params.id },
        });
        // for updating all status of the Schools Users
        allSchoolUser.map((usr) => {
            return userModel_1.default.update({ status: req.body.status }, { where: { id: usr.dataValues.id } });
        });
        const data = yield schoolModel_1.default.update({ status: req.body.status }, { where: { id: req.params.id } });
        (0, ResponseMessage_1.ResponseMessage)(res, 200, undefined, "status updated successfully");
    }
    catch (error) {
        (0, ErrorMessage_1.ErrorMessage)(res, error, 400);
    }
});
exports.updateSchoolsStatus = updateSchoolsStatus;
const deleteSchool = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const findSchool = yield schoolModel_1.default.findByPk(id);
        if (!findSchool)
            return (0, ErrorMessage_1.ErrorMessage)(res, "no data found :" + id, 400);
        const data = yield schoolModel_1.default.destroy({ where: { id: id } });
        (0, ResponseMessage_1.ResponseMessage)(res, 200, undefined, "School deleted successfully");
    }
    catch (error) {
        (0, ErrorMessage_1.ErrorMessage)(res, error, 400);
    }
});
exports.deleteSchool = deleteSchool;
