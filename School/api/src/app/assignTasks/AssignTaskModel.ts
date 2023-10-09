import { Model, DataTypes } from "sequelize";
import Connection from "../../db/dbConfig";
import User from "../users/userModel";
import TaskSolution from "../taskSolution/TaskSolutionModel";
import { AssignTaskType } from "./AssignTaskTypes";
import TaskModel from "../task/TaskModel";
import SchoolModel from "../schools/schoolModel";

class AssignTaskModel extends Model<AssignTaskType> {}

AssignTaskModel.init(
  {
    id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
    // assigned to student
    std_id: { type: DataTypes.BIGINT },
    task_id: { type: DataTypes.BIGINT },
    school_id: { type: DataTypes.BIGINT },
    description: { type: DataTypes.TEXT },
    assigned_at: { type: DataTypes.DATE, defaultValue: Date.now },
    status: { type: DataTypes.TINYINT, defaultValue: 1 },
  },
  {
    timestamps: false,
    sequelize: Connection,
    modelName: "task_assign",
    freezeTableName: true, //mean not add the s pluralize with table
  }
);

User.hasMany(AssignTaskModel, { foreignKey: "std_id" });
AssignTaskModel.belongsTo(User, { foreignKey: "std_id" });

TaskModel.hasMany(AssignTaskModel, { foreignKey: "task_id" });
AssignTaskModel.belongsTo(TaskModel, { foreignKey: "task_id" });

SchoolModel.hasMany(AssignTaskModel, { foreignKey: "school_id" });
AssignTaskModel.belongsTo(SchoolModel, { foreignKey: "school_id" });

export default AssignTaskModel;
