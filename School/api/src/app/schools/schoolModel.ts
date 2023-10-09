import { Model, DataTypes } from "sequelize";
import Connection from "../../db/dbConfig";
import UserModel from "../users/userModel";
import { SchoolProps } from "./SchoolType";

class SchoolModel extends Model<SchoolProps> {}

SchoolModel.init(
  {
    id: {
      type: DataTypes.BIGINT({ length: 10 }),
      primaryKey: true,
      autoIncrement: true,
    },
    add_by: DataTypes.INTEGER,
    school_name: DataTypes.STRING,
    address: DataTypes.STRING,
    status: { type: DataTypes.INTEGER, defaultValue: 1 },
  },
  {
    timestamps: false,
    sequelize: Connection,
    modelName: "schools",
    freezeTableName: true,
  }
);

SchoolModel.hasMany(UserModel, { foreignKey: "school_id" });
UserModel.belongsTo(SchoolModel, { foreignKey: "school_id" });

export default SchoolModel;
