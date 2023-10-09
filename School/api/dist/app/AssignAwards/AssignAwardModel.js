"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dbConfig_1 = __importDefault(require("../../db/dbConfig"));
const userModel_1 = __importDefault(require("../users/userModel"));
const AwardModel_1 = __importDefault(require("../Awards/AwardModel"));
class AssignAwardModel extends sequelize_1.Model {
}
AssignAwardModel.init({
    id: { type: sequelize_1.DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
    user_id: { type: sequelize_1.DataTypes.BIGINT },
    award_id: sequelize_1.DataTypes.BIGINT,
}, {
    timestamps: false,
    sequelize: dbConfig_1.default,
    modelName: "assign_award",
    freezeTableName: true, //mean not add the s pluralize with table
});
userModel_1.default.hasMany(AssignAwardModel, { foreignKey: "user_id" });
AssignAwardModel.belongsTo(userModel_1.default, { foreignKey: "user_id" });
AwardModel_1.default.hasMany(AssignAwardModel, { foreignKey: "award_id" });
AssignAwardModel.belongsTo(AwardModel_1.default, { foreignKey: "award_id" });
exports.default = AssignAwardModel;
