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
exports.deleteAssignTask = exports.updateAssignTask = exports.getSingleAssignTask = exports.getAllSchoolAssignedTasks = exports.getAllUsersAssignedTasks = exports.getAllAssignTask = exports.createAssignTask = void 0;
const ResponseMessage_1 = require("../../utils/ResponseMessage");
const ErrorMessage_1 = require("../../utils/ErrorMessage");
const AssignTaskModel_1 = __importDefault(require("./AssignTaskModel"));
const userModel_1 = __importDefault(require("../users/userModel"));
const TaskModel_1 = __importDefault(require("../task/TaskModel"));
const AssignTaskSchema_1 = require("./AssignTaskSchema");
const ValidationError_1 = require("../../utils/ValidationError");
// create AssignTask
const createAssignTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { class_id, task_id, school_id, description } = req.body;
    const validation = AssignTaskSchema_1.assignTaskSchema.safeParse(req.body);
    try {
        if (!validation.success)
            return (0, ValidationError_1.ValidationError)(validation, res);
        const users = yield userModel_1.default.findAll({ where: { class_id } });
        const promises = users.map((it) => __awaiter(void 0, void 0, void 0, function* () {
            const findAll = yield AssignTaskModel_1.default.findAll({
                where: { school_id, task_id, std_id: it.dataValues.id },
            });
            if (findAll.length > 0) {
                yield AssignTaskModel_1.default.destroy({
                    where: { school_id, task_id, std_id: it.dataValues.id },
                });
                return "task denied";
            }
            else {
                yield AssignTaskModel_1.default.create({
                    std_id: it.dataValues.id,
                    task_id,
                    school_id,
                    description,
                });
                return "task assigned";
            }
        }));
        // Wait for all promises to resolve
        const results = yield Promise.all(promises);
        // Check if any result indicates "task denied"
        if (results.includes("task denied")) {
            return (0, ResponseMessage_1.ResponseMessage)(res, 200, undefined, "task denied");
        }
        else {
            return (0, ResponseMessage_1.ResponseMessage)(res, 200, undefined, "task assigned");
        }
    }
    catch (error) {
        (0, ErrorMessage_1.ErrorMessage)(res, error, 400);
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
});
exports.createAssignTask = createAssignTask;
// get all AssignTask
const getAllAssignTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield AssignTaskModel_1.default.findAll({
            include: [
                { model: userModel_1.default, attributes: { exclude: ["password"] } },
                { model: TaskModel_1.default },
            ],
        });
        (0, ResponseMessage_1.ResponseMessage)(res, 200, data);
    }
    catch (error) {
        (0, ErrorMessage_1.ErrorMessage)(res, error, 400);
    }
});
exports.getAllAssignTask = getAllAssignTask;
// get all user's assigned Tasks
const getAllUsersAssignedTasks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const data = yield AssignTaskModel_1.default.findAll({
            where: { std_id: (_a = req.user) === null || _a === void 0 ? void 0 : _a.id },
            include: [
                { model: userModel_1.default, attributes: { exclude: ["password"] } },
                { model: TaskModel_1.default },
            ],
        });
        (0, ResponseMessage_1.ResponseMessage)(res, 200, data);
    }
    catch (error) {
        (0, ErrorMessage_1.ErrorMessage)(res, error, 400);
    }
});
exports.getAllUsersAssignedTasks = getAllUsersAssignedTasks;
// get all user's assigned Tasks
const getAllSchoolAssignedTasks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield AssignTaskModel_1.default.findAll({
            where: { school_id: req.params.id },
            include: [
                // { model: SchoolModel, attributes: ["school_name", "address", "phone"] },
                { model: TaskModel_1.default, attributes: ["title", "description"] },
            ],
        });
        (0, ResponseMessage_1.ResponseMessage)(res, 200, data);
    }
    catch (error) {
        (0, ErrorMessage_1.ErrorMessage)(res, error, 400);
    }
});
exports.getAllSchoolAssignedTasks = getAllSchoolAssignedTasks;
// get single AssignTask
const getSingleAssignTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield AssignTaskModel_1.default.findByPk(req.params.id, {
            include: [{ model: userModel_1.default }, { model: TaskModel_1.default }],
        });
        if (!data)
            return (0, ErrorMessage_1.ErrorMessage)(res, "no data found", 400);
        else {
            (0, ResponseMessage_1.ResponseMessage)(res, 200, data);
        }
    }
    catch (error) {
        (0, ErrorMessage_1.ErrorMessage)(res, error, 400);
    }
});
exports.getSingleAssignTask = getSingleAssignTask;
// update AssignTask
const updateAssignTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield AssignTaskModel_1.default.findByPk(req.params.id);
        if (!data)
            return (0, ErrorMessage_1.ErrorMessage)(res, "no data found", 400);
        else {
            const updateData = yield AssignTaskModel_1.default.update(Object.assign({}, req.body), { where: { id: req.params.id } });
            (0, ResponseMessage_1.ResponseMessage)(res, 200, undefined, "data updated");
        }
    }
    catch (error) {
        (0, ErrorMessage_1.ErrorMessage)(res, error, 400);
    }
});
exports.updateAssignTask = updateAssignTask;
// delete AssignTask
const deleteAssignTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield AssignTaskModel_1.default.findByPk(req.params.id);
        if (!data)
            return (0, ErrorMessage_1.ErrorMessage)(res, "no data found", 400);
        else {
            const deleteData = yield AssignTaskModel_1.default.destroy({
                where: { id: req.params.id },
            });
            (0, ResponseMessage_1.ResponseMessage)(res, 200, undefined, "data deleted");
        }
    }
    catch (error) {
        (0, ErrorMessage_1.ErrorMessage)(res, error, 400);
    }
});
exports.deleteAssignTask = deleteAssignTask;
