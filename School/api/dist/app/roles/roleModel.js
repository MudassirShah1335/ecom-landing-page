"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dbConfig_1 = __importDefault(require("../../db/dbConfig"));
class RoleModel extends sequelize_1.Model {
}
RoleModel.init({
    role_id: { type: sequelize_1.DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
    // role_name: { type: DataTypes.STRING || DataTypes.ENUM("Admin", "General Manager", "Call Center", "Accountant", "Finance Manager", "Sub Office GM", "Sub office Call Center", "Travel Consultant"," Sales Manager" ,"General Manager Sub Agent","Call Center  Sub Agent"), unique:true },
    role_name: { type: sequelize_1.DataTypes.STRING, allowNull: false },
    status: { type: sequelize_1.DataTypes.INTEGER, defaultValue: 1 },
}, {
    timestamps: false,
    sequelize: dbConfig_1.default,
    modelName: "role",
    freezeTableName: true //mean not add the s pluralize with table  
});
exports.default = RoleModel;
