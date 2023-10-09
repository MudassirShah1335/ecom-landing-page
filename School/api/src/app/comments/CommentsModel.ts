import { Model, DataTypes } from "sequelize";
import Connection from "../../db/dbConfig";
import TaskSolutionModel from "../taskSolution/TaskSolutionModel";
import UserModel from "../users/userModel";

type CommentProps = {
  id?: number;
  text: string;
  task_sol_id: number;
  user_id: number;
};
class CommentModel extends Model<CommentProps> {}

CommentModel.init(
  {
    id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
    text: { type: DataTypes.STRING, allowNull: false },
    task_sol_id: { type: DataTypes.BIGINT },
    user_id: { type: DataTypes.BIGINT },
  },
  {
    timestamps: false,
    sequelize: Connection,
    modelName: "comments",
    freezeTableName: true, //mean not add the s pluralize with table
  }
);

TaskSolutionModel.hasMany(CommentModel, { foreignKey: "task_sol_id" });
CommentModel.belongsTo(TaskSolutionModel, { foreignKey: "task_sol_id" });

UserModel.hasMany(CommentModel, { foreignKey: "user_id" });
CommentModel.belongsTo(UserModel, { foreignKey: "user_id" });

export default CommentModel;
