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
exports.deleteTaskSolution = exports.updateTaskSolutionStatus = exports.updateTaskSolution = exports.getUsersApprovedTaskSolution = exports.getUsersRejectedTaskSolution = exports.getUsersTaskSolutionCount = exports.getUsersTaskSolution = exports.getPendingTasks = exports.getSingleTaskSolution = exports.getAllTaskSolution = exports.submitTaskSolution = void 0;
const TaskSolutionModel_1 = __importDefault(require("./TaskSolutionModel"));
const ResponseMessage_1 = require("../../utils/ResponseMessage");
const ErrorMessage_1 = require("../../utils/ErrorMessage");
const ValidationError_1 = require("../../utils/ValidationError");
const TaskSolutionSchema_1 = require("./TaskSolutionSchema");
const CommentsModel_1 = __importDefault(require("../comments/CommentsModel"));
const userModel_1 = __importDefault(require("../users/userModel"));
const AssignTaskModel_1 = __importDefault(require("../assignTasks/AssignTaskModel"));
const TaskModel_1 = __importDefault(require("../task/TaskModel"));
// create TaskSolution
const submitTaskSolution = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d, _e;
    const { text } = req.body;
    let pdfArray = [];
    let imgArray = [];
    let videoArray = [];
    // const pdf = req.files["pdf"]?.[0]?.filename;
    (_a = req.files["pdf"]) === null || _a === void 0 ? void 0 : _a.map((it) => {
        return pdfArray.push(it.filename);
    });
    (_b = req.files["image"]) === null || _b === void 0 ? void 0 : _b.map((it) => {
        return imgArray.push(it.filename);
    });
    (_c = req.files["video"]) === null || _c === void 0 ? void 0 : _c.map((it) => {
        return videoArray.push(it.filename);
    });
    const { ass_tsk_id } = req.body;
    const id = parseInt(ass_tsk_id);
    const validation = TaskSolutionSchema_1.submitTaskSolutionSchema.safeParse(Object.assign(Object.assign({}, req.body), { ass_tsk_id: id }));
    try {
        if (!validation.success)
            return (0, ValidationError_1.ValidationError)(validation, res);
        const data = yield TaskSolutionModel_1.default.create(Object.assign(Object.assign({}, req.body), { std_id: (_d = req.user) === null || _d === void 0 ? void 0 : _d.id, ass_tsk_id: id, pdf: pdfArray, image: imgArray, video: videoArray }));
        const comment = yield CommentsModel_1.default.create({
            task_sol_id: data.dataValues.id,
            user_id: (_e = req.user) === null || _e === void 0 ? void 0 : _e.id,
            text,
        });
        (0, ResponseMessage_1.ResponseMessage)(res, 200, data);
    }
    catch (error) {
        (0, ErrorMessage_1.ErrorMessage)(res, error, 400);
    }
});
exports.submitTaskSolution = submitTaskSolution;
// get all TaskSolution
const getAllTaskSolution = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield TaskSolutionModel_1.default.findAll();
        (0, ResponseMessage_1.ResponseMessage)(res, 200, data);
    }
    catch (error) {
        (0, ErrorMessage_1.ErrorMessage)(res, error, 400);
    }
});
exports.getAllTaskSolution = getAllTaskSolution;
// get single TaskSolution
const getSingleTaskSolution = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield TaskSolutionModel_1.default.findByPk(req.params.id, {
            include: [
                { model: CommentsModel_1.default, attributes: ["text"] },
                { model: userModel_1.default },
                { model: AssignTaskModel_1.default, include: [{ model: TaskModel_1.default }] },
            ],
        });
        if (!data)
            return (0, ErrorMessage_1.ErrorMessage)(res, "no data found with id " + req.params.id, 400);
        else {
            return (0, ResponseMessage_1.ResponseMessage)(res, 200, data);
        }
    }
    catch (error) {
        (0, ErrorMessage_1.ErrorMessage)(res, error, 400);
    }
});
exports.getSingleTaskSolution = getSingleTaskSolution;
// get pending Task
const getPendingTasks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // assign task -all submited tasks
        const assginTasks = yield AssignTaskModel_1.default.findAll({
            where: { std_id: req.params.id },
            // where: { std_id: req.user?.id },
        });
        const taskSolution = yield TaskSolutionModel_1.default.findAll({
            where: { std_id: req.params.id },
            // where: { std_id: req.user?.id },
        });
        // filter those tasks which are pending mean inside taskSolution there will be assgnTask_id it means 5 asgnTask and 3 are tasksSol so then 5-3 2 will be left
        const pendingTasks = assginTasks
            .filter((it, ind) => {
            var _a, _b;
            return ((_a = it === null || it === void 0 ? void 0 : it.dataValues) === null || _a === void 0 ? void 0 : _a.id) !== ((_b = taskSolution[ind]) === null || _b === void 0 ? void 0 : _b.dataValues.ass_tsk_id);
        })
            .map((it) => it.dataValues);
        (0, ResponseMessage_1.ResponseMessage)(res, 200, pendingTasks);
    }
    catch (error) {
        (0, ErrorMessage_1.ErrorMessage)(res, error, 400);
    }
});
exports.getPendingTasks = getPendingTasks;
// get user's TaskSolution
const getUsersTaskSolution = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _f;
    try {
        const data = yield TaskSolutionModel_1.default.findAll({
            // where: { std_id: req.user?.id },
            where: { std_id: (_f = req.params) === null || _f === void 0 ? void 0 : _f.id },
        });
        (0, ResponseMessage_1.ResponseMessage)(res, 200, data);
    }
    catch (error) {
        (0, ErrorMessage_1.ErrorMessage)(res, error, 400);
    }
});
exports.getUsersTaskSolution = getUsersTaskSolution;
// get user's TaskSolution count (2/16)
const getUsersTaskSolutionCount = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _g, _h;
    try {
        const taskSolutionCount = yield TaskSolutionModel_1.default.findAll({
            where: { std_id: (_g = req.user) === null || _g === void 0 ? void 0 : _g.id, status: "APPROVED" },
        });
        const taskAssignCount = yield AssignTaskModel_1.default.findAll({
            where: { std_id: (_h = req.user) === null || _h === void 0 ? void 0 : _h.id },
        });
        let result = `${taskSolutionCount.length} / ${taskAssignCount.length}`;
        (0, ResponseMessage_1.ResponseMessage)(res, 200, undefined, result);
    }
    catch (error) {
        (0, ErrorMessage_1.ErrorMessage)(res, error, 400);
    }
});
exports.getUsersTaskSolutionCount = getUsersTaskSolutionCount;
// get user's Rejected TaskSolution
const getUsersRejectedTaskSolution = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield TaskSolutionModel_1.default.findAll({
            where: { std_id: req.params.id, status: "REJECTED" },
            // where: { std_id: req.user?.id, status: "REJECTED" },
        });
        (0, ResponseMessage_1.ResponseMessage)(res, 200, data);
    }
    catch (error) {
        (0, ErrorMessage_1.ErrorMessage)(res, error, 400);
    }
});
exports.getUsersRejectedTaskSolution = getUsersRejectedTaskSolution;
// get user's Approved TaskSolution
const getUsersApprovedTaskSolution = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _j;
    try {
        const data = yield TaskSolutionModel_1.default.findAll({
            where: { std_id: (_j = req.params) === null || _j === void 0 ? void 0 : _j.id, status: "APPROVED" },
            // where: { std_id: req.user?.id, status: "APPROVED" },
        });
        (0, ResponseMessage_1.ResponseMessage)(res, 200, data);
    }
    catch (error) {
        (0, ErrorMessage_1.ErrorMessage)(res, error, 400);
    }
});
exports.getUsersApprovedTaskSolution = getUsersApprovedTaskSolution;
// update TaskSolution
const updateTaskSolution = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _k, _l, _m;
    let pdfArray = [];
    let imgArray = [];
    let videoArray = [];
    // const pdf = req.files["pdf"]?.[0]?.filename;
    (_k = req.files["pdf"]) === null || _k === void 0 ? void 0 : _k.map((it) => {
        return pdfArray.push(it.filename);
    });
    (_l = req.files["image"]) === null || _l === void 0 ? void 0 : _l.map((it) => {
        return imgArray.push(it.filename);
    });
    (_m = req.files["video"]) === null || _m === void 0 ? void 0 : _m.map((it) => {
        return videoArray.push(it.filename);
    });
    const body = req.body;
    const validation = TaskSolutionSchema_1.updateTaskSolutionSchema.safeParse(req.body);
    try {
        if (!validation.success)
            return (0, ValidationError_1.ValidationError)(validation, res);
        const data = yield TaskSolutionModel_1.default.findByPk(req.params.id);
        if (!data)
            return (0, ErrorMessage_1.ErrorMessage)(res, "no data found with id " + req.params.id, 400);
        else {
            const updateData = yield TaskSolutionModel_1.default.update(Object.assign(Object.assign({}, body), { pdf: pdfArray, image: imgArray, video: videoArray }), { where: { id: req.params.id } });
            (0, ResponseMessage_1.ResponseMessage)(res, 200, "data updated successfully");
        }
    }
    catch (error) {
        (0, ErrorMessage_1.ErrorMessage)(res, error, 400);
    }
});
exports.updateTaskSolution = updateTaskSolution;
// update TaskSolution
const updateTaskSolutionStatus = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { status } = req.body;
    const validation = TaskSolutionSchema_1.TaskSolStatusSchema.safeParse(req.body);
    try {
        if (!validation.success)
            return (0, ValidationError_1.ValidationError)(validation, res);
        const data = yield TaskSolutionModel_1.default.findByPk(req.params.id);
        if (!data)
            return (0, ErrorMessage_1.ErrorMessage)(res, "no data found with id " + req.params.id, 400);
        else {
            const updateData = yield TaskSolutionModel_1.default.update({ status: status }, { where: { id: req.params.id } });
            (0, ResponseMessage_1.ResponseMessage)(res, 200, undefined, "data updated successfully");
        }
    }
    catch (error) {
        (0, ErrorMessage_1.ErrorMessage)(res, error, 400);
    }
});
exports.updateTaskSolutionStatus = updateTaskSolutionStatus;
// delete TaskSolution
const deleteTaskSolution = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield TaskSolutionModel_1.default.findByPk(req.params.id);
        if (!data)
            return (0, ErrorMessage_1.ErrorMessage)(res, "no data found with id " + req.params.id, 400);
        else {
            const deleteData = yield TaskSolutionModel_1.default.destroy({
                where: { id: req.params.id },
            });
            (0, ResponseMessage_1.ResponseMessage)(res, 200, "data deleted successfully");
        }
    }
    catch (error) {
        (0, ErrorMessage_1.ErrorMessage)(res, error, 400);
    }
});
exports.deleteTaskSolution = deleteTaskSolution;
