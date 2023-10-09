import { Model, DataTypes } from "sequelize";
import Connection from "../../db/dbConfig";
import User from "../users/userModel";
import { TaskType } from "./TaskType";
import SchoolModel from "../schools/schoolModel";
import ClassModel from "../classes/ClassModel";

class TaskModel extends Model<TaskType> {}

TaskModel.init(
  {
    id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
    created_by: { type: DataTypes.BIGINT },
    school_id: { type: DataTypes.BIGINT },
    class_id: { type: DataTypes.BIGINT },
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    status: { type: DataTypes.TINYINT, defaultValue: 1 },
  },
  {
    timestamps: false,
    sequelize: Connection,
    modelName: "tasks",
    freezeTableName: true, //mean not add the s pluralize with table
  }
);

User.hasMany(TaskModel, { foreignKey: "created_by" });
TaskModel.belongsTo(User, { foreignKey: "created_by" });

ClassModel.hasMany(TaskModel, { foreignKey: "class_id" });
TaskModel.belongsTo(ClassModel, { foreignKey: "class_id" });

SchoolModel.hasMany(TaskModel, { foreignKey: "school_id" });
TaskModel.belongsTo(SchoolModel, { foreignKey: "school_id" });

export default TaskModel;
