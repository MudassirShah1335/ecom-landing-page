"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dbConfig_1 = __importDefault(require("../../db/dbConfig"));
const userModel_1 = __importDefault(require("../users/userModel"));
const schoolModel_1 = __importDefault(require("../schools/schoolModel"));
const ClassModel_1 = __importDefault(require("../classes/ClassModel"));
class TaskModel extends sequelize_1.Model {
}
TaskModel.init({
    id: { type: sequelize_1.DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
    created_by: { type: sequelize_1.DataTypes.BIGINT },
    school_id: { type: sequelize_1.DataTypes.BIGINT },
    class_id: { type: sequelize_1.DataTypes.BIGINT },
    title: sequelize_1.DataTypes.STRING,
    description: sequelize_1.DataTypes.TEXT,
    status: { type: sequelize_1.DataTypes.TINYINT, defaultValue: 1 },
}, {
    timestamps: false,
    sequelize: dbConfig_1.default,
    modelName: "tasks",
    freezeTableName: true, //mean not add the s pluralize with table
});
userModel_1.default.hasMany(TaskModel, { foreignKey: "created_by" });
TaskModel.belongsTo(userModel_1.default, { foreignKey: "created_by" });
ClassModel_1.default.hasMany(TaskModel, { foreignKey: "class_id" });
TaskModel.belongsTo(ClassModel_1.default, { foreignKey: "class_id" });
schoolModel_1.default.hasMany(TaskModel, { foreignKey: "school_id" });
TaskModel.belongsTo(schoolModel_1.default, { foreignKey: "school_id" });
exports.default = TaskModel;
