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
exports.deleteClass = exports.updateClass = exports.getSingleClass = exports.getAllClass = exports.createClass = void 0;
const ClassModel_1 = __importDefault(require("./ClassModel"));
const ResponseMessage_1 = require("../../utils/ResponseMessage");
const ErrorMessage_1 = require("../../utils/ErrorMessage");
// create Class
const createClass = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.body.class_name)
        return (0, ErrorMessage_1.ErrorMessage)(res, "please enter class name", 400);
    try {
        const data = yield ClassModel_1.default.create(req.body);
        (0, ResponseMessage_1.ResponseMessage)(res, 200, data);
    }
    catch (error) {
        (0, ErrorMessage_1.ErrorMessage)(res, error, 400);
    }
});
exports.createClass = createClass;
// get all Class
const getAllClass = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield ClassModel_1.default.findAll();
        (0, ResponseMessage_1.ResponseMessage)(res, 200, data);
    }
    catch (error) {
        (0, ErrorMessage_1.ErrorMessage)(res, error, 400);
    }
});
exports.getAllClass = getAllClass;
// get single Class
const getSingleClass = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield ClassModel_1.default.findByPk(req.params.id);
        if (!data)
            return (0, ErrorMessage_1.ErrorMessage)(res, "no data found with id " + req.params.id, 400);
        else {
            (0, ResponseMessage_1.ResponseMessage)(res, 200, data);
        }
    }
    catch (error) {
        (0, ErrorMessage_1.ErrorMessage)(res, error, 400);
    }
});
exports.getSingleClass = getSingleClass;
// update Class
const updateClass = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const data = yield ClassModel_1.default.findByPk(req.params.id);
        if (!data)
            return (0, ErrorMessage_1.ErrorMessage)(res, "no data found with id " + req.params.id, 400);
        else {
            const updateData = yield ClassModel_1.default.update({ class_name: (_a = req.body) === null || _a === void 0 ? void 0 : _a.class_name }, { where: { id: req.params.id } });
            (0, ResponseMessage_1.ResponseMessage)(res, 200, undefined, "data updated");
        }
    }
    catch (error) {
        (0, ErrorMessage_1.ErrorMessage)(res, error, 400);
    }
});
exports.updateClass = updateClass;
// delete Class
const deleteClass = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield ClassModel_1.default.findByPk(req.params.id);
        if (!data)
            return (0, ErrorMessage_1.ErrorMessage)(res, "no data found with id " + req.params.id, 400);
        else {
            const deleteData = yield ClassModel_1.default.destroy({
                where: { id: req.params.id },
            });
            (0, ResponseMessage_1.ResponseMessage)(res, 200, undefined, "data deleted");
        }
    }
    catch (error) {
        (0, ErrorMessage_1.ErrorMessage)(res, error, 400);
    }
});
exports.deleteClass = deleteClass;
