"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dbConfig_1 = __importDefault(require("../../db/dbConfig"));
const TaskSolutionModel_1 = __importDefault(require("../taskSolution/TaskSolutionModel"));
const userModel_1 = __importDefault(require("../users/userModel"));
class CommentModel extends sequelize_1.Model {
}
CommentModel.init({
    id: { type: sequelize_1.DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
    text: { type: sequelize_1.DataTypes.STRING, allowNull: false },
    task_sol_id: { type: sequelize_1.DataTypes.BIGINT },
    user_id: { type: sequelize_1.DataTypes.BIGINT },
}, {
    timestamps: false,
    sequelize: dbConfig_1.default,
    modelName: "comments",
    freezeTableName: true, //mean not add the s pluralize with table
});
TaskSolutionModel_1.default.hasMany(CommentModel, { foreignKey: "task_sol_id" });
CommentModel.belongsTo(TaskSolutionModel_1.default, { foreignKey: "task_sol_id" });
userModel_1.default.hasMany(CommentModel, { foreignKey: "user_id" });
CommentModel.belongsTo(userModel_1.default, { foreignKey: "user_id" });
exports.default = CommentModel;
