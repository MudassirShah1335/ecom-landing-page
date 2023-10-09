"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dbConfig_1 = __importDefault(require("../../db/dbConfig"));
const roleModel_1 = __importDefault(require("../roles/roleModel"));
class UserModel extends sequelize_1.Model {
}
UserModel.init({
    id: { type: sequelize_1.DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
    school_id: { type: sequelize_1.DataTypes.BIGINT },
    // teacher_id will store an id of a teacher for a student that student will belongs to this teacher and this is the self join inside a table
    teacher_id: { type: sequelize_1.DataTypes.BIGINT },
    role_id: { type: sequelize_1.DataTypes.BIGINT },
    class_id: { type: sequelize_1.DataTypes.BIGINT },
    name: { type: sequelize_1.DataTypes.STRING },
    mobile_no: { type: sequelize_1.DataTypes.STRING },
    email: { type: sequelize_1.DataTypes.STRING },
    academic_year: { type: sequelize_1.DataTypes.DATE, defaultValue: Date.now },
    profile: sequelize_1.DataTypes.STRING,
    password: { type: sequelize_1.DataTypes.STRING },
    created_at: { type: sequelize_1.DataTypes.DATE, defaultValue: Date.now },
    status: { type: sequelize_1.DataTypes.INTEGER, defaultValue: 1 },
}, {
    timestamps: false,
    sequelize: dbConfig_1.default,
    modelName: "users",
});
// Define the association between Users and RoleModel
roleModel_1.default.hasMany(UserModel, { foreignKey: "role_id" }); // A Role can have many users
UserModel.belongsTo(roleModel_1.default, { foreignKey: "role_id" }); // A user belongs to one Role
exports.default = UserModel;
