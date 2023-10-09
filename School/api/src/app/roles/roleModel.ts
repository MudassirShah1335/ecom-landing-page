import { Model, DataTypes } from "sequelize";
import Connection from "../../db/dbConfig";
import { RoleType } from "./roleType";



class RoleModel extends Model<RoleType> {}

RoleModel.init(
  {
    role_id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
    // role_name: { type: DataTypes.STRING || DataTypes.ENUM("Admin", "General Manager", "Call Center", "Accountant", "Finance Manager", "Sub Office GM", "Sub office Call Center", "Travel Consultant"," Sales Manager" ,"General Manager Sub Agent","Call Center  Sub Agent"), unique:true },
    role_name: { type: DataTypes.STRING, allowNull: false },
    status: { type: DataTypes.INTEGER, defaultValue:1 },
  },
  {
    timestamps: false,
    sequelize: Connection,
    modelName: "role",
    freezeTableName:true //mean not add the s pluralize with table  
  }
);




export default RoleModel;

