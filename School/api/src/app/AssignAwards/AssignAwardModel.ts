import { Model, DataTypes } from "sequelize";
import Connection from "../../db/dbConfig";
import UserModel from "../users/userModel";
import AwardModel from "../Awards/AwardModel";

type assignAwardProps = {
  id?: number;
  user_id: number | null;
  award_id: number;
};

class AssignAwardModel extends Model<assignAwardProps> {}

AssignAwardModel.init(
  {
    id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
    user_id: { type: DataTypes.BIGINT },
    award_id: DataTypes.BIGINT,
  },
  {
    timestamps: false,
    sequelize: Connection,
    modelName: "assign_award",
    freezeTableName: true, //mean not add the s pluralize with table
  }
);

UserModel.hasMany(AssignAwardModel, { foreignKey: "user_id" });
AssignAwardModel.belongsTo(UserModel, { foreignKey: "user_id" });

AwardModel.hasMany(AssignAwardModel, { foreignKey: "award_id" });
AssignAwardModel.belongsTo(AwardModel, { foreignKey: "award_id" });

export default AssignAwardModel;
