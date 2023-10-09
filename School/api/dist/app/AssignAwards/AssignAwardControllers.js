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
exports.getUserAssignAwards = exports.createAssignAward = void 0;
const AssignAwardModel_1 = __importDefault(require("./AssignAwardModel"));
const ResponseMessage_1 = require("../../utils/ResponseMessage");
const ErrorMessage_1 = require("../../utils/ErrorMessage");
const TaskSolutionModel_1 = __importDefault(require("../taskSolution/TaskSolutionModel"));
const userModel_1 = __importDefault(require("../users/userModel"));
const AwardModel_1 = __importDefault(require("../Awards/AwardModel"));
// create assignAward
const createAssignAward = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c;
    try {
        const taskSol = yield TaskSolutionModel_1.default.findAll({
            where: { std_id: (_a = req.user) === null || _a === void 0 ? void 0 : _a.id, status: "APPROVED" },
        });
        const user = yield userModel_1.default.findOne({ where: { id: (_b = req.user) === null || _b === void 0 ? void 0 : _b.id } });
        const award = yield AwardModel_1.default.findOne({
            where: { class_id: user === null || user === void 0 ? void 0 : user.dataValues.class_id },
        });
        if ((taskSol.length = 16)) {
            AssignAwardModel_1.default.create({
                user_id: (_c = req.user) === null || _c === void 0 ? void 0 : _c.id,
                award_id: award === null || award === void 0 ? void 0 : award.dataValues.id,
            });
            (0, ResponseMessage_1.ResponseMessage)(res, 200, undefined, "congratulation you win the award");
        }
    }
    catch (error) {
        (0, ErrorMessage_1.ErrorMessage)(res, error, 400);
    }
});
exports.createAssignAward = createAssignAward;
// get user assignaward
const getUserAssignAwards = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _d;
    try {
        const data = yield AssignAwardModel_1.default.findOne({
            where: { user_id: (_d = req.user) === null || _d === void 0 ? void 0 : _d.id },
        });
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
exports.getUserAssignAwards = getUserAssignAwards;
