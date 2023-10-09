"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dbConfig_1 = __importDefault(require("../../db/dbConfig"));
const userModel_1 = __importDefault(require("../users/userModel"));
const AssignTaskModel_1 = __importDefault(require("../assignTasks/AssignTaskModel"));
class TaskSolutionModel extends sequelize_1.Model {
}
TaskSolutionModel.init({
    id: { type: sequelize_1.DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
    // solved by the student
    std_id: { type: sequelize_1.DataTypes.BIGINT },
    ass_tsk_id: { type: sequelize_1.DataTypes.BIGINT },
    title: sequelize_1.DataTypes.STRING,
    description: sequelize_1.DataTypes.TEXT,
    // pdf: DataTypes.STRING,
    // image: DataTypes.STRING,
    // video: DataTypes.STRING,
    image: {
        type: sequelize_1.DataTypes.TEXT,
        get: function () {
            return JSON.parse(this.getDataValue("image"));
        },
        set: function (val) {
            return this.setDataValue("image", JSON.stringify(val));
        },
    },
    pdf: {
        type: sequelize_1.DataTypes.TEXT,
        get: function () {
            return JSON.parse(this.getDataValue("pdf"));
        },
        set: function (val) {
            return this.setDataValue("pdf", JSON.stringify(val));
        },
    },
    video: {
        type: sequelize_1.DataTypes.TEXT,
        get: function () {
            return JSON.parse(this.getDataValue("video"));
        },
        set: function (val) {
            return this.setDataValue("video", JSON.stringify(val));
        },
    },
    evaluation: sequelize_1.DataTypes.STRING,
    solved_at: { type: sequelize_1.DataTypes.DATE, defaultValue: Date.now },
    status: {
        // pending are those tasks whcih are not submited yet
        type: sequelize_1.DataTypes.ENUM("SUBMITED", "APPROVED", "REJECTED"),
        defaultValue: "SUBMITED",
    },
}, {
    timestamps: false,
    sequelize: dbConfig_1.default,
    modelName: "task_solution",
    freezeTableName: true, //mean not add the s pluralize with table
});
userModel_1.default.hasMany(TaskSolutionModel, { foreignKey: "std_id" });
TaskSolutionModel.belongsTo(userModel_1.default, { foreignKey: "std_id" });
AssignTaskModel_1.default.hasMany(TaskSolutionModel, { foreignKey: "ass_tsk_id" });
TaskSolutionModel.belongsTo(AssignTaskModel_1.default, { foreignKey: "ass_tsk_id" });
exports.default = TaskSolutionModel;
