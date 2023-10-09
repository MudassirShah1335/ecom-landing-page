"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dbConfig_1 = __importDefault(require("../../db/dbConfig"));
const userModel_1 = __importDefault(require("../users/userModel"));
const ClassModel_1 = __importDefault(require("../classes/ClassModel"));
class AwardModel extends sequelize_1.Model {
}
AwardModel.init({
    id: { type: sequelize_1.DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
    user_id: { type: sequelize_1.DataTypes.BIGINT },
    class_id: { type: sequelize_1.DataTypes.BIGINT },
    award: sequelize_1.DataTypes.STRING,
    level: sequelize_1.DataTypes.STRING,
    image: sequelize_1.DataTypes.STRING,
}, {
    timestamps: false,
    sequelize: dbConfig_1.default,
    modelName: "award",
    freezeTableName: true, //mean not add the s pluralize with table
});
userModel_1.default.hasMany(AwardModel, { foreignKey: "user_id" });
AwardModel.belongsTo(userModel_1.default, { foreignKey: "user_id" });
ClassModel_1.default.hasOne(AwardModel, { foreignKey: "class_id" });
AwardModel.belongsTo(ClassModel_1.default, { foreignKey: "class_id" });
exports.default = AwardModel;
