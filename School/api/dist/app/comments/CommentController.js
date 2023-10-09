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
exports.deleteComment = exports.updateComment = exports.getLoggedInUserComment = exports.getSingleComment = exports.getAllComment = exports.createComment = void 0;
const CommentsModel_1 = __importDefault(require("./CommentsModel"));
const ResponseMessage_1 = require("../../utils/ResponseMessage");
const ErrorMessage_1 = require("../../utils/ErrorMessage");
const userModel_1 = __importDefault(require("../users/userModel"));
const TaskSolutionModel_1 = __importDefault(require("../taskSolution/TaskSolutionModel"));
// create Comment
const createComment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const data = yield CommentsModel_1.default.create(Object.assign(Object.assign({}, req.body), { user_id: (_a = req.user) === null || _a === void 0 ? void 0 : _a.id }));
        (0, ResponseMessage_1.ResponseMessage)(res, 200, data);
    }
    catch (error) {
        (0, ErrorMessage_1.ErrorMessage)(res, error, 400);
    }
});
exports.createComment = createComment;
// get all Comment
const getAllComment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield CommentsModel_1.default.findAll();
        (0, ResponseMessage_1.ResponseMessage)(res, 200, data);
    }
    catch (error) {
        (0, ErrorMessage_1.ErrorMessage)(res, error, 400);
    }
});
exports.getAllComment = getAllComment;
// get single Comment
const getSingleComment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield CommentsModel_1.default.findByPk(req.params.id, {
            include: [{ model: userModel_1.default, attributes: ["f_name", 'l_name', 'email'] }, { model: TaskSolutionModel_1.default }]
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
exports.getSingleComment = getSingleComment;
// get logged in Comment
const getLoggedInUserComment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    try {
        const data = yield CommentsModel_1.default.findByPk((_b = req.user) === null || _b === void 0 ? void 0 : _b.id, {
            include: [{ model: userModel_1.default, attributes: ["f_name", 'l_name', 'email'] }, { model: TaskSolutionModel_1.default }]
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
exports.getLoggedInUserComment = getLoggedInUserComment;
// update Comment
const updateComment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield CommentsModel_1.default.findByPk(req.params.id);
        if (!data)
            return (0, ErrorMessage_1.ErrorMessage)(res, "no data found", 400);
        else {
            const updateData = yield CommentsModel_1.default.update({ text: req.body.text }, { where: { id: req.params.id } });
            (0, ResponseMessage_1.ResponseMessage)(res, 200, undefined, "data updated");
        }
    }
    catch (error) {
        (0, ErrorMessage_1.ErrorMessage)(res, error, 400);
    }
});
exports.updateComment = updateComment;
// delete Comment
const deleteComment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield CommentsModel_1.default.findByPk(req.params.id);
        if (!data)
            return (0, ErrorMessage_1.ErrorMessage)(res, "no data found", 400);
        else {
            const deleteData = yield CommentsModel_1.default.destroy({
                where: { id: req.params.id },
            });
            (0, ResponseMessage_1.ResponseMessage)(res, 200, undefined, "data deleted");
        }
    }
    catch (error) {
        (0, ErrorMessage_1.ErrorMessage)(res, error, 400);
    }
});
exports.deleteComment = deleteComment;
