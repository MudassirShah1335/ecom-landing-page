import { Model, DataTypes } from "sequelize";
import Connection from "../../db/dbConfig";
import Role from "../roles/roleModel";
import { UserProps } from "./UserType";

class UserModel extends Model<UserProps> {}

UserModel.init(
  {
    id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
    school_id: { type: DataTypes.BIGINT },
    // teacher_id will store an id of a teacher for a student that student will belongs to this teacher and this is the self join inside a table
    teacher_id: { type: DataTypes.BIGINT },
    role_id: { type: DataTypes.BIGINT },
    class_id: { type: DataTypes.BIGINT },
    name: { type: DataTypes.STRING },
    mobile_no: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING },
    academic_year: { type: DataTypes.DATE, defaultValue: Date.now },
    profile: DataTypes.STRING,
    password: { type: DataTypes.STRING },
    created_at: { type: DataTypes.DATE, defaultValue: Date.now },
    status: { type: DataTypes.INTEGER, defaultValue: 1 },
  },
  {
    timestamps: false,
    sequelize: Connection,
    modelName: "users",
  }
);

// Define the association between Users and RoleModel
Role.hasMany(UserModel, { foreignKey: "role_id" }); // A Role can have many users
UserModel.belongsTo(Role, { foreignKey: "role_id" }); // A user belongs to one Role

export default UserModel;
