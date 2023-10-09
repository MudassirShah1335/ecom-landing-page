"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dbConfig_1 = __importDefault(require("../../db/dbConfig"));
const userModel_1 = __importDefault(require("../users/userModel"));
const TaskModel_1 = __importDefault(require("../task/TaskModel"));
const schoolModel_1 = __importDefault(require("../schools/schoolModel"));
class AssignTaskModel extends sequelize_1.Model {
}
AssignTaskModel.init({
    id: { type: sequelize_1.DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
    // assigned to student
    std_id: { type: sequelize_1.DataTypes.BIGINT },
    task_id: { type: sequelize_1.DataTypes.BIGINT },
    school_id: { type: sequelize_1.DataTypes.BIGINT },
    description: { type: sequelize_1.DataTypes.TEXT },
    assigned_at: { type: sequelize_1.DataTypes.DATE, defaultValue: Date.now },
    status: { type: sequelize_1.DataTypes.TINYINT, defaultValue: 1 },
}, {
    timestamps: false,
    sequelize: dbConfig_1.default,
    modelName: "task_assign",
    freezeTableName: true, //mean not add the s pluralize with table
});
userModel_1.default.hasMany(AssignTaskModel, { foreignKey: "std_id" });
AssignTaskModel.belongsTo(userModel_1.default, { foreignKey: "std_id" });
TaskModel_1.default.hasMany(AssignTaskModel, { foreignKey: "task_id" });
AssignTaskModel.belongsTo(TaskModel_1.default, { foreignKey: "task_id" });
schoolModel_1.default.hasMany(AssignTaskModel, { foreignKey: "school_id" });
AssignTaskModel.belongsTo(schoolModel_1.default, { foreignKey: "school_id" });
exports.default = AssignTaskModel;
