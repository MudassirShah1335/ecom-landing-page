"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const AssignAwardRoutes_1 = __importDefault(require("./app/AssignAwards/AssignAwardRoutes"));
const AssignTaskRoute_1 = __importDefault(require("./app/assignTasks/AssignTaskRoute"));
const AwardRoutes_1 = __importDefault(require("./app/Awards/AwardRoutes"));
const ClassRoutes_1 = __importDefault(require("./app/classes/ClassRoutes"));
const ContactRoute_1 = __importDefault(require("./app/ContactUs/ContactRoute"));
const CommentRoute_1 = __importDefault(require("./app/comments/CommentRoute"));
const roleRoute_1 = __importDefault(require("./app/roles/roleRoute"));
const SchoolRoutes_1 = __importDefault(require("./app/schools/SchoolRoutes"));
const TaskRoute_1 = __importDefault(require("./app/task/TaskRoute"));
const TaskSolutionRoutes_1 = __importDefault(require("./app/taskSolution/TaskSolutionRoutes"));
const UserRoutes_1 = __importDefault(require("./app/users/UserRoutes"));
// models
// import dbInit from "./db/Init";
// route
const ErrorMessage_1 = require("./utils/ErrorMessage");
const cacheUtil_1 = require("./utils/cacheUtil");
const app = (0, express_1.default)();
dotenv_1.default.config();
const PORT = parseInt(process.env.PORT || "4000");
// middlewares
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use("", express_1.default.static("uploads"));
app.use((0, cors_1.default)({
    origin: {
        // this url and methods mean that this project is only access to this url and these methods only for security porpuse
        URL: [process.env.FRONTEND_URL],
    },
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    credentials: true,
}));
// tables genrating
// make it comment when once table is created
// dbInit;
// routes
app.use("/api", AssignTaskRoute_1.default);
app.use("/api", AssignAwardRoutes_1.default);
app.use("/api", AwardRoutes_1.default);
app.use("/api", ContactRoute_1.default);
app.use("/api", CommentRoute_1.default);
app.use("/api", ClassRoutes_1.default);
app.use("/api", SchoolRoutes_1.default);
app.use("/api", roleRoute_1.default);
app.use("/api", TaskRoute_1.default);
app.use("/api", TaskSolutionRoutes_1.default);
app.use("/api", UserRoutes_1.default);
app.get("/", (req, res) => {
    res.send("this is my app");
});
app.post("/api/v1/b2b/getCache", (req, res) => {
    const { cache_key } = req.body;
    const data = (0, cacheUtil_1.getCache)(cache_key);
    return res.send({ success: true, data: data });
});
app.use((req, res) => {
    return (0, ErrorMessage_1.ErrorMessage)(res, "no routes found with: " + req.url, 404);
});
app.listen(PORT, () => {
    console.log(`server runs on PORT ${PORT}`);
});
// Connection.sync({ alter: true })
//   .then(() => {
//     app.listen(PORT, () => {
//       console.log(`server runs on PORT ${PORT}`);
//     });
//   })
//   .catch((error: any) => {
//     console.error("Unable to connect to the database:", error);
//   });
