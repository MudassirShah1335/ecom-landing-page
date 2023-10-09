"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dbConfig_1 = __importDefault(require("../../db/dbConfig"));
const userModel_1 = __importDefault(require("../users/userModel"));
class SchoolModel extends sequelize_1.Model {
}
SchoolModel.init({
    id: {
        type: sequelize_1.DataTypes.BIGINT({ length: 10 }),
        primaryKey: true,
        autoIncrement: true,
    },
    add_by: sequelize_1.DataTypes.INTEGER,
    school_name: sequelize_1.DataTypes.STRING,
    address: sequelize_1.DataTypes.STRING,
    status: { type: sequelize_1.DataTypes.INTEGER, defaultValue: 1 },
}, {
    timestamps: false,
    sequelize: dbConfig_1.default,
    modelName: "schools",
    freezeTableName: true,
});
SchoolModel.hasMany(userModel_1.default, { foreignKey: "school_id" });
userModel_1.default.belongsTo(SchoolModel, { foreignKey: "school_id" });
exports.default = SchoolModel;
