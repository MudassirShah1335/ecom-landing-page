"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dbConfig_1 = __importDefault(require("../../db/dbConfig"));
const userModel_1 = __importDefault(require("../users/userModel"));
class ClassModel extends sequelize_1.Model {
}
ClassModel.init({
    id: { type: sequelize_1.DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
    class_name: sequelize_1.DataTypes.STRING,
}, {
    timestamps: false,
    sequelize: dbConfig_1.default,
    modelName: "class",
    freezeTableName: true, //mean not add the s pluralize with table
});
ClassModel.hasMany(userModel_1.default, { foreignKey: "class_id" });
userModel_1.default.belongsTo(ClassModel, { foreignKey: "class_id" });
exports.default = ClassModel;
