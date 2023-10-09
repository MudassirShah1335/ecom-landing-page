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
exports.deleteTask = exports.updateTask = exports.getSingleTask = exports.getAllClassTasks = exports.getAllSchoolTasks = exports.getAllTask = exports.createCustomeTask = exports.createTask = void 0;
const TaskModel_1 = __importDefault(require("./TaskModel"));
const ResponseMessage_1 = require("../../utils/ResponseMessage");
const ErrorMessage_1 = require("../../utils/ErrorMessage");
const ValidationError_1 = require("../../utils/ValidationError");
const TaskSchema_1 = require("./TaskSchema");
const sequelize_1 = require("sequelize");
const ClassModel_1 = __importDefault(require("../classes/ClassModel"));
// create Task
const createTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const body = req.body;
    const validation = TaskSchema_1.createTaskSchema.safeParse(req.body);
    try {
        if (!validation.success)
            return (0, ValidationError_1.ValidationError)(validation, res);
        const data = yield TaskModel_1.default.create(Object.assign(Object.assign({}, body), { created_by: (_a = req.user) === null || _a === void 0 ? void 0 : _a.id }));
        (0, ResponseMessage_1.ResponseMessage)(res, 200, data);
    }
    catch (error) {
        (0, ErrorMessage_1.ErrorMessage)(res, error, 400);
    }
});
exports.createTask = createTask;
// create custome Task
const createCustomeTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    const body = req.body;
    const validation = TaskSchema_1.createCustomTaskSchema.safeParse(req.body);
    try {
        if (!validation.success)
            return (0, ValidationError_1.ValidationError)(validation, res);
        const data = yield TaskModel_1.default.create(Object.assign(Object.assign({}, body), { created_by: (_b = req.user) === null || _b === void 0 ? void 0 : _b.id }));
        (0, ResponseMessage_1.ResponseMessage)(res, 200, data);
    }
    catch (error) {
        (0, ErrorMessage_1.ErrorMessage)(res, error, 400);
    }
});
exports.createCustomeTask = createCustomeTask;
// get all Task
const getAllTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield TaskModel_1.default.findAll();
        (0, ResponseMessage_1.ResponseMessage)(res, 200, data);
    }
    catch (error) {
        (0, ErrorMessage_1.ErrorMessage)(res, error, 400);
    }
});
exports.getAllTask = getAllTask;
// get all school Task
const getAllSchoolTasks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const data = yield TaskModel_1.default.findAll({
            where: {
                [sequelize_1.Op.or]: [{ school_id: id }, { school_id: null }],
                // school_id: id | null,
                // //  {
                // // [Op.eq]: id,
                // // [Op.eq]: null,
                // // },
            },
        });
        (0, ResponseMessage_1.ResponseMessage)(res, 200, data);
    }
    catch (error) {
        (0, ErrorMessage_1.ErrorMessage)(res, error, 400);
    }
});
exports.getAllSchoolTasks = getAllSchoolTasks;
// get all Class Tasks
const getAllClassTasks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const data = yield ClassModel_1.default.findAll({
            include: [{ model: TaskModel_1.default }],
        });
        (0, ResponseMessage_1.ResponseMessage)(res, 200, data);
    }
    catch (error) {
        (0, ErrorMessage_1.ErrorMessage)(res, error, 400);
    }
});
exports.getAllClassTasks = getAllClassTasks;
// get single Task
const getSingleTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield TaskModel_1.default.findByPk(req.params.id);
        if (!data)
            return (0, ErrorMessage_1.ErrorMessage)(res, "no data found with id " + req.params.id, 400);
        else {
            (0, ResponseMessage_1.ResponseMessage)(res, 200, data);
        }
    }
    catch (error) {
        (0, ErrorMessage_1.ErrorMessage)(res, error, 400);
    }
});
exports.getSingleTask = getSingleTask;
// update Task
const updateTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    const validation = TaskSchema_1.updateTaskSchema.safeParse(req.body);
    try {
        if (!validation.success)
            return (0, ValidationError_1.ValidationError)(validation, res);
        const data = yield TaskModel_1.default.findByPk(req.params.id);
        if (!data)
            return (0, ErrorMessage_1.ErrorMessage)(res, "no data found with id " + req.params.id, 400);
        else {
            const updateData = yield TaskModel_1.default.update(Object.assign({}, body), { where: { id: req.params.id } });
            (0, ResponseMessage_1.ResponseMessage)(res, 200, undefined, "data updated successfully");
        }
    }
    catch (error) {
        (0, ErrorMessage_1.ErrorMessage)(res, error, 400);
    }
});
exports.updateTask = updateTask;
// delete Task
const deleteTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield TaskModel_1.default.findByPk(req.params.id);
        if (!data)
            return (0, ErrorMessage_1.ErrorMessage)(res, "no data found with id " + req.params.id, 400);
        else {
            const deleteData = yield TaskModel_1.default.destroy({
                where: { id: req.params.id },
            });
            (0, ResponseMessage_1.ResponseMessage)(res, 200, undefined, "data deleted successfully");
        }
    }
    catch (error) {
        (0, ErrorMessage_1.ErrorMessage)(res, error, 400);
    }
});
exports.deleteTask = deleteTask;
