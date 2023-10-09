"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AssignAwardModel_1 = __importDefault(require("../app/AssignAwards/AssignAwardModel"));
const AwardModel_1 = __importDefault(require("../app/Awards/AwardModel"));
const AssignTaskModel_1 = __importDefault(require("../app/assignTasks/AssignTaskModel"));
const ClassModel_1 = __importDefault(require("../app/classes/ClassModel"));
const CommentsModel_1 = __importDefault(require("../app/comments/CommentsModel"));
const schoolModel_1 = __importDefault(require("../app/schools/schoolModel"));
const TaskModel_1 = __importDefault(require("../app/task/TaskModel"));
const TaskSolutionModel_1 = __importDefault(require("../app/taskSolution/TaskSolutionModel"));
const userModel_1 = __importDefault(require("../app/users/userModel"));
// const isDev = process.env.NODE_ENV === "development";
const dbInit = () => {
    AssignTaskModel_1.default.sync({ force: false });
    AssignAwardModel_1.default.sync({ force: false });
    AwardModel_1.default.sync({ force: false });
    ClassModel_1.default.sync({ force: false });
    CommentsModel_1.default.sync({ force: false });
    schoolModel_1.default.sync({ force: false });
    TaskModel_1.default.sync({ force: false });
    TaskModel_1.default.sync({ force: false });
    TaskSolutionModel_1.default.sync({ force: false });
    userModel_1.default.sync({ force: false });
};
exports.default = dbInit;
