import { Model, DataTypes } from "sequelize";
import Connection from "../../db/dbConfig";
import User from "../users/userModel";
import AssignTaskModel from "../assignTasks/AssignTaskModel";
import { TaskSolutionType } from "./TaskSolutionType";

class TaskSolutionModel extends Model<TaskSolutionType> {}

TaskSolutionModel.init(
  {
    id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
    // solved by the student
    std_id: { type: DataTypes.BIGINT },
    ass_tsk_id: { type: DataTypes.BIGINT },
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    // pdf: DataTypes.STRING,
    // image: DataTypes.STRING,
    // video: DataTypes.STRING,
    image: {
      type: DataTypes.TEXT,
      get: function () {
        return JSON.parse(this.getDataValue("image") as string);
      },
      set: function (val) {
        return this.setDataValue("image", JSON.stringify(val));
      },
    },
    pdf: {
      type: DataTypes.TEXT,
      get: function () {
        return JSON.parse(this.getDataValue("pdf") as string);
      },
      set: function (val) {
        return this.setDataValue("pdf", JSON.stringify(val));
      },
    },
    video: {
      type: DataTypes.TEXT,
      get: function () {
        return JSON.parse(this.getDataValue("video") as string);
      },
      set: function (val) {
        return this.setDataValue("video", JSON.stringify(val));
      },
    },
    evaluation: DataTypes.STRING,
    solved_at: { type: DataTypes.DATE, defaultValue: Date.now },
    status: {
      // pending are those tasks whcih are not submited yet
      type: DataTypes.ENUM("SUBMITED", "APPROVED", "REJECTED"),
      defaultValue: "SUBMITED",
    },
  },
  {
    timestamps: false,
    sequelize: Connection,
    modelName: "task_solution",
    freezeTableName: true, //mean not add the s pluralize with table
  }
);

User.hasMany(TaskSolutionModel, { foreignKey: "std_id" });
TaskSolutionModel.belongsTo(User, { foreignKey: "std_id" });

AssignTaskModel.hasMany(TaskSolutionModel, { foreignKey: "ass_tsk_id" });
TaskSolutionModel.belongsTo(AssignTaskModel, { foreignKey: "ass_tsk_id" });

export default TaskSolutionModel;
