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
exports.deleteRole = exports.updateRoleStatus = exports.updateRole = exports.getSingleRole = exports.getAllRole = exports.createRole = void 0;
const roleModel_1 = __importDefault(require("./roleModel"));
// create Role
const createRole = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield roleModel_1.default.create(req.body);
        res.status(200).json({
            status: "success",
            data,
        });
    }
    catch (error) {
        res.status(200).json({
            status: "fail",
            message: error,
        });
    }
});
exports.createRole = createRole;
// get all Role
const getAllRole = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield roleModel_1.default.findAll();
        res.status(200).json({
            status: "success",
            data,
        });
    }
    catch (error) {
        res.status(200).json({
            status: "fail",
            message: error,
        });
    }
});
exports.getAllRole = getAllRole;
// get single Role
const getSingleRole = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield roleModel_1.default.findByPk(req.params.id);
        if (!data)
            return res
                .status(400)
                .json({
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
exports.getSingleRole = getSingleRole;
// update Role
const updateRole = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const data = yield roleModel_1.default.findByPk(req.params.id);
        if (!data)
            return res
                .status(400)
                .json({
                status: "fail",
                message: "no data found with id " + req.params.id,
            });
        else {
            const updateData = yield roleModel_1.default.update({ role_name: (_a = req.body) === null || _a === void 0 ? void 0 : _a.role_name }, { where: { role_id: req.params.id } });
            res.status(200).json({
                status: "success",
                message: "data updated successfully",
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
exports.updateRole = updateRole;
// update RoleStatus
const updateRoleStatus = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield roleModel_1.default.findByPk(req.params.id);
        if (!data)
            return res
                .status(400)
                .json({
                status: "fail",
                message: "no data found with id " + req.params.id,
            });
        else {
            const updateData = yield roleModel_1.default.update({ status: req.body.status }, { where: { role_id: req.params.id } });
            res.status(200).json({
                status: "success",
                message: "Role updated successfully",
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
exports.updateRoleStatus = updateRoleStatus;
// delete Role
const deleteRole = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield roleModel_1.default.findByPk(req.params.id);
        if (!data)
            return res
                .status(400)
                .json({
                status: "fail",
                message: "no data found with id " + req.params.id,
            });
        else {
            const deleteData = yield roleModel_1.default.destroy({
                where: { role_id: req.params.id },
            });
            res.status(200).json({
                status: "success",
                message: "data deleted successfully",
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
exports.deleteRole = deleteRole;
