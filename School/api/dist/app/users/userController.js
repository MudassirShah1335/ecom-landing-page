"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verificationCode = exports.forgetPassword = exports.getCookies = exports.LogOutUser = exports.loginUser = exports.getAllTeachersStd = exports.assignStdToTeacher = exports.deletesUsers = exports.updatesUserStatus = exports.updatesUsers = exports.getSingleUsers = exports.getAllUsers = exports.assignTaskToCreatedUser = exports.createsUsers = void 0;
const userModel_1 = __importDefault(require("./userModel"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const ErrorMessage_1 = require("../../utils/ErrorMessage");
const SendMail_1 = require("../../utils/SendMail");
const ResponseMessage_1 = require("../../utils/ResponseMessage");
const node_cache_1 = __importDefault(require("node-cache"));
const AssignTaskModel_1 = __importDefault(require("../assignTasks/AssignTaskModel"));
const EmailMessages_1 = require("../../config/EmailMessages");
const cache = new node_cache_1.default();
// create sUsers
const createsUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const { password, name, email, class_id, school_id } = req.body;
    const hashPassword = yield bcryptjs_1.default.hash(password, 12);
    try {
        const data = yield userModel_1.default.create(Object.assign(Object.assign({}, req.body), { password: hashPassword, profile: (_a = req.file) === null || _a === void 0 ? void 0 : _a.filename }));
        (0, SendMail_1.sendMail)([email], `Student Registration`, (0, EmailMessages_1.RegisterStudentMsg)(`${name}`, password, email));
        (0, ResponseMessage_1.ResponseMessage)(res, 200, data);
    }
    catch (error) {
        (0, ErrorMessage_1.ErrorMessage)(res, error, 400);
    }
});
exports.createsUsers = createsUsers;
const assignTaskToCreatedUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield userModel_1.default.findOne({
            where: { school_id: req.params.school_id },
            order: [["id", "DESC"]],
        });
        // assign task to student of the class
        const findUser = yield userModel_1.default.findOne({
            where: { class_id: data === null || data === void 0 ? void 0 : data.dataValues.class_id },
        });
        const findAssignTask = yield AssignTaskModel_1.default.findAll({
            where: { std_id: findUser === null || findUser === void 0 ? void 0 : findUser.dataValues.id },
        });
        const assignTask = findAssignTask.map((task) => __awaiter(void 0, void 0, void 0, function* () {
            var _b, _c;
            yield AssignTaskModel_1.default.create({
                std_id: data === null || data === void 0 ? void 0 : data.dataValues.id,
                task_id: (_b = task === null || task === void 0 ? void 0 : task.dataValues) === null || _b === void 0 ? void 0 : _b.task_id,
                school_id: (_c = task === null || task === void 0 ? void 0 : task.dataValues) === null || _c === void 0 ? void 0 : _c.school_id,
            });
        }));
        (0, ResponseMessage_1.ResponseMessage)(res, 200, undefined, "task assigned");
    }
    catch (error) {
        (0, ErrorMessage_1.ErrorMessage)(res, error, 400);
    }
});
exports.assignTaskToCreatedUser = assignTaskToCreatedUser;
// get all sUsers
const getAllUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // i have exculded the password because i dont want to show it to the user side
        const data = yield userModel_1.default.findAll({
            attributes: { exclude: ["password"] },
        });
        res.status(200).json({
            status: "success",
            length: data.length,
            data,
        });
    }
    catch (error) {
        res.json({
            status: "fail",
            message: error,
        });
    }
});
exports.getAllUsers = getAllUsers;
// get single Users
const getSingleUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // i have exculded the password because i dont want to show it to the user side
        const data = yield userModel_1.default.findByPk(req.params.id, {
            attributes: { exclude: ["password"] },
        });
        if (!data)
            return res.status(400).json({
                status: "fail",
                message: "no data found with id " + req.params.id,
            });
        else {
            res.status(200).json({
                status: "success",
                data,
            });
        }
    }
    catch (error) {
        res.status(200).json({
            status: "fail",
            message: error,
        });
    }
});
exports.getSingleUsers = getSingleUsers;
// update sUsers
const updatesUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _d, _e;
    const { password, name, mobile_no, email } = req.body;
    try {
        const data = yield userModel_1.default.findByPk(req.params.id);
        if (!data)
            return (0, ErrorMessage_1.ErrorMessage)(res, "no data found with id " + req.params.id, 400);
        if (password) {
            const hashPassword = yield bcryptjs_1.default.hash(password, 12);
            const updateData = yield userModel_1.default.update(Object.assign(Object.assign({}, req.body), { password: hashPassword, profile: (_d = req.file) === null || _d === void 0 ? void 0 : _d.filename }), { where: { id: req.params.id } });
        }
        else {
            const updateData = yield userModel_1.default.update({ name, mobile_no, email, profile: (_e = req.file) === null || _e === void 0 ? void 0 : _e.filename }, { where: { id: req.params.id } });
        }
        (0, SendMail_1.sendMail)([email], "User Updated", (0, EmailMessages_1.UpdateUserMsg)(name, password, email));
        (0, ResponseMessage_1.ResponseMessage)(res, 200, undefined, "data updated successfully");
    }
    catch (error) {
        (0, ErrorMessage_1.ErrorMessage)(res, error, 400);
    }
});
exports.updatesUsers = updatesUsers;
// update updatesUserStatus
const updatesUserStatus = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield userModel_1.default.findByPk(req.params.id);
        if (!data)
            res.status(400).json({
                status: "fail",
                message: "no data found with id " + req.params.id,
            });
        else {
            const updateData = yield userModel_1.default.update({ status: req.body.status }, {
                where: { id: req.params.id },
            });
        }
        (0, ResponseMessage_1.ResponseMessage)(res, 200, undefined, "status updated successfully");
    }
    catch (error) {
        (0, ErrorMessage_1.ErrorMessage)(res, error, 400);
    }
});
exports.updatesUserStatus = updatesUserStatus;
// Delete sUsers
const deletesUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield userModel_1.default.findByPk(req.params.id);
        if (!data)
            return res.status(400).json({
                status: "fail",
                message: "no data found with id " + req.params.id,
            });
        else {
            const deleteData = yield userModel_1.default.destroy({
                where: { id: req.params.id },
            });
        }
        (0, ResponseMessage_1.ResponseMessage)(res, 200, undefined, "data deleted successfully");
    }
    catch (error) {
        (0, ErrorMessage_1.ErrorMessage)(res, error, 400);
    }
});
exports.deletesUsers = deletesUsers;
// assign User to teacher
const assignStdToTeacher = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { teacher_id } = req.body;
    try {
        // this will store the teacher id inside std data and when fetch every std will have its own teacher many std will have 1 teacher
        const data = yield userModel_1.default.update({ teacher_id }, { where: { id: req.params.id } });
        (0, ResponseMessage_1.ResponseMessage)(res, 200, undefined, "user assigned to teacher");
    }
    catch (error) {
        (0, ErrorMessage_1.ErrorMessage)(res, error, 400);
    }
});
exports.assignStdToTeacher = assignStdToTeacher;
// get all students of teachers
const getAllTeachersStd = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // i have exculded the password because i dont want to show it to the user side
        const data = yield userModel_1.default.findAll({
            attributes: { exclude: ["password"] },
            where: { teacher_id: req.params.id },
            // where: { teacher_id: req.user?.id },
        });
        res.status(200).json({
            status: "success",
            length: data.length,
            data,
        });
    }
    catch (error) {
        res.json({
            status: "fail",
            message: error,
        });
    }
});
exports.getAllTeachersStd = getAllTeachersStd;
// login users
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password, role_id } = req.body;
    if (!email || !password || !role_id) {
        return res.status(400).json({
            status: "fail",
            message: "please enter email , password or roleId ",
        });
    }
    try {
        const user = yield userModel_1.default.findOne({
            where: { email, role_id },
            // attributes:{exclude:['password']}
        });
        // UserAttributes
        if (!user)
            return (0, ErrorMessage_1.ErrorMessage)(res, "wrong credentials", 400);
        const comparePassword = yield bcryptjs_1.default.compare(password, user.password);
        if (!comparePassword)
            return (0, ErrorMessage_1.ErrorMessage)(res, "wrong credentials", 400);
        // condition to login only active users
        if (!(user === null || user === void 0 ? void 0 : user.dataValues.status))
            return (0, ErrorMessage_1.ErrorMessage)(res, "only active users allowed", 400);
        const token = jsonwebtoken_1.default.sign({ email: user.email, id: user.id }, process.env.SECRETE_KEY, { expiresIn: "24h" });
        const options = {
            expires: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
            httpOnly: true,
        };
        // let {id,role_id,_id,name,=user
        // we are extracting the password from the user object that is not gona be shown in the end point
        const userData = user.get({ plain: true });
        delete userData.password; // Remove the password field from the user data
        return res
            .status(200)
            .cookie("token", token, options)
            .json({ result: userData, token });
    }
    catch (error) {
        (0, ErrorMessage_1.ErrorMessage)(res, error, 400);
    }
});
exports.loginUser = loginUser;
// logOut users
const LogOutUser = (req, res) => {
    try {
        res.cookie("token", null, {
            expires: new Date(Date.now()),
            httpOnly: true,
        });
        (0, ResponseMessage_1.ResponseMessage)(res, 200, undefined, "user logout successfully");
    }
    catch (error) {
        (0, ErrorMessage_1.ErrorMessage)(res, error, 400);
    }
};
exports.LogOutUser = LogOutUser;
const getCookies = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // console.log('cookie', req.cookies);
    const { token } = req.cookies;
    try {
        if (!token) {
            return;
        }
        return res.json({
            user: req === null || req === void 0 ? void 0 : req.user,
            token,
        });
    }
    catch (error) {
        res.status(400).json({
            status: "fail",
            message: error,
        });
    }
});
exports.getCookies = getCookies;
// forget password will send a Notification code to the email and will have 1 to 2 minuts for verification.
// after verication success redirect to new Password and Confirm Password
// forget password.
const forgetPassword = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const findEmail = yield userModel_1.default.findOne({
            where: { email: req.body.email },
        });
        if (!findEmail)
            return (0, ErrorMessage_1.ErrorMessage)(res, "no data found with given Email", 404);
        // const value = Math.random().toString();
        // const code = value.slice(value.length - 7, value.length - 1);
        // Generate a random 4-digit number
        function generateRandom4DigitNumber() {
            // Generate a random number between 0 and 9999
            const randomNumber = Math.floor(Math.random() * 10000);
            // Ensure the number has exactly 4 digits by adding leading zeros if necessary
            const fourDigitNumber = randomNumber.toString().padStart(4, "0");
            return fourDigitNumber;
        }
        const randomCode = generateRandom4DigitNumber();
        // this will store a code in cache for 60 seconds and then we will compare it with the sended code in email inside verficationCode() function
        // cache.set("code",code)
        cache.set("code", parseInt(randomCode), 60); //storing for 1 mnts
        cache.set("user", findEmail, 240); //storing for 4 mnts
        (0, SendMail_1.sendMail)([req.body.email], "Password verifcation Code", `<p>your verication code is ${parseInt(randomCode)}</p>`);
        (0, ResponseMessage_1.ResponseMessage)(res, 200, undefined, `verification code send to ${req.body.email}`);
    }
    catch (error) {
        (0, ErrorMessage_1.ErrorMessage)(res, error, 400);
    }
});
exports.forgetPassword = forgetPassword;
// a verifcation code will be send to the email and verified
const verificationCode = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const verifyCode = cache.get("code");
        // let user:UserProp | undefined =cache.get("user")
        let user = cache.get("user");
        const token = jsonwebtoken_1.default.sign({ email: user === null || user === void 0 ? void 0 : user.email, id: user === null || user === void 0 ? void 0 : user.id }, process.env.SECRETE_KEY);
        const options = {
            expires: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
            httpOnly: true,
        };
        if (parseInt(verifyCode) === parseInt(req.body.code)) {
            res
                .status(200)
                .cookie("token", token, options)
                .json({
                message: `Verification Successfully ${req.body.code}`,
                token,
                id: user === null || user === void 0 ? void 0 : user.id,
            });
        }
        else {
            (0, ErrorMessage_1.ErrorMessage)(res, `Verification Failed with ${req.body.code}`, 400);
        }
    }
    catch (error) {
        (0, ErrorMessage_1.ErrorMessage)(res, `token might be expired please send token again`, 400);
    }
});
exports.verificationCode = verificationCode;
