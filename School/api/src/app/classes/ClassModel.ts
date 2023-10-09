import { Model, DataTypes } from "sequelize";
import Connection from "../../db/dbConfig";
import User from "../users/userModel";
import UserModel from "../users/userModel";

type ClassProp = {
  id?: number;
  class_name: string;
};

class ClassModel extends Model<ClassProp> {}

ClassModel.init(
  {
    id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
    class_name: DataTypes.STRING,
  },
  {
    timestamps: false,
    sequelize: Connection,
    modelName: "class",
    freezeTableName: true, //mean not add the s pluralize with table
  }
);

ClassModel.hasMany(UserModel, { foreignKey: "class_id" });
UserModel.belongsTo(ClassModel, { foreignKey: "class_id" });

export default ClassModel;
