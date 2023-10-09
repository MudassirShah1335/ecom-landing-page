import express from "express";
import cors from "cors";
import Connection from "./db/dbConfig";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import assignAwardRoute from "./app/AssignAwards/AssignAwardRoutes";
import assignTaskRoute from "./app/assignTasks/AssignTaskRoute";
import awardRoute from "./app/Awards/AwardRoutes";
import classRoute from "./app/classes/ClassRoutes";
import contactUs from "./app/ContactUs/ContactRoute";
import commentRoute from "./app/comments/CommentRoute";
import roleRoute from "./app/roles/roleRoute";
import schoolRoutes from "./app/schools/SchoolRoutes";
import taskRoute from "./app/task/TaskRoute";
import taskSolutionRoute from "./app/taskSolution/TaskSolutionRoutes";
import userRoutes from "./app/users/UserRoutes";
// models
// import dbInit from "./db/Init";
// route

import { ErrorMessage } from "./utils/ErrorMessage";
import { getCache } from "./utils/cacheUtil";
import { sendMail } from "./utils/SendMail";

const app = express();

dotenv.config();
const PORT: number = parseInt(process.env.PORT || "4000");

// middlewares
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("", express.static("uploads"));
app.use(
  cors({
    origin: {
      // this url and methods mean that this project is only access to this url and these methods only for security porpuse
      URL: [process.env.FRONTEND_URL],
    } as any,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    credentials: true,
  })
);
// tables genrating
// make it comment when once table is created
// dbInit;

// routes
app.use("/api", assignTaskRoute);
app.use("/api", assignAwardRoute);
app.use("/api", awardRoute);
app.use("/api", contactUs);
app.use("/api", commentRoute);
app.use("/api", classRoute);
app.use("/api", schoolRoutes);
app.use("/api", roleRoute);
app.use("/api", taskRoute);
app.use("/api", taskSolutionRoute);
app.use("/api", userRoutes);

app.get("/", (req, res) => {
  res.send("this is my app");
});

app.post("/api/v1/b2b/getCache", (req, res) => {
  const { cache_key } = req.body;
  const data = getCache(cache_key);
  return res.send({ success: true, data: data });
});

app.use((req, res) => {
  return ErrorMessage(res, "no routes found with: " + req.url, 404);
});

app.listen(PORT, () => {
  console.log(`server runs on PORT ${PORT}`);
})

// Connection.sync({ alter: true })
//   .then(() => {
//     app.listen(PORT, () => {
//       console.log(`server runs on PORT ${PORT}`);
//     });
//   })
//   .catch((error: any) => {
//     console.error("Unable to connect to the database:", error);
//   });
