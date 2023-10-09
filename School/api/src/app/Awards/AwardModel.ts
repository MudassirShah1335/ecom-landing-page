import { Model, DataTypes } from "sequelize";
import Connection from "../../db/dbConfig";
import UserModel from "../users/userModel";
import ClassModel from "../classes/ClassModel";

type AwardProps = {
  id?: number;
  user_id: number;
  class_id: number;
  award: string;
  level: string;
  image: Express.Multer.File["filename"];
};

class AwardModel extends Model<AwardProps> {}

AwardModel.init(
  {
    id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
    user_id: { type: DataTypes.BIGINT },
    class_id: { type: DataTypes.BIGINT },
    award: DataTypes.STRING,
    level: DataTypes.STRING,
    image: DataTypes.STRING,
  },
  {
    timestamps: false,
    sequelize: Connection,
    modelName: "award",
    freezeTableName: true, //mean not add the s pluralize with table
  }
);

UserModel.hasMany(AwardModel, { foreignKey: "user_id" });
AwardModel.belongsTo(UserModel, { foreignKey: "user_id" });

ClassModel.hasOne(AwardModel, { foreignKey: "class_id" });
AwardModel.belongsTo(ClassModel, { foreignKey: "class_id" });

export default AwardModel;
