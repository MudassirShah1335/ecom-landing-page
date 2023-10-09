import AssignAwardModel from "../app/AssignAwards/AssignAwardModel";
import AwardModel from "../app/Awards/AwardModel";
import AssignTaskModel from "../app/assignTasks/AssignTaskModel";
import ClassModel from "../app/classes/ClassModel";
import CommentModel from "../app/comments/CommentsModel";
import SchoolModel from "../app/schools/schoolModel";
import TaskModel from "../app/task/TaskModel";
import TaskSolutionModel from "../app/taskSolution/TaskSolutionModel";
import UserModel from "../app/users/userModel";

// const isDev = process.env.NODE_ENV === "development";

const dbInit = () => {
  AssignTaskModel.sync({ force: false });
  AssignAwardModel.sync({ force: false });
  AwardModel.sync({ force: false });
  ClassModel.sync({ force: false });
  CommentModel.sync({ force: false });
  SchoolModel.sync({ force: false });
  TaskModel.sync({ force: false });
  TaskModel.sync({ force: false });
  TaskSolutionModel.sync({ force: false });
  UserModel.sync({ force: false });
};

export default dbInit;
