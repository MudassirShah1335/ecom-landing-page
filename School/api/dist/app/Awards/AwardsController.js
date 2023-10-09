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
exports.deleteAward = exports.updateAward = exports.getSingleAward = exports.getAllAward = exports.createAward = void 0;
const AwardModel_1 = __importDefault(require("./AwardModel"));
const ResponseMessage_1 = require("../../utils/ResponseMessage");
const ErrorMessage_1 = require("../../utils/ErrorMessage");
const ValidationError_1 = require("../../utils/ValidationError");
const awardSchema_1 = require("./awardSchema");
// create Award
const createAward = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const { award, level, class_id } = req.body;
    let id = Number(class_id);
    const validation = awardSchema_1.awardSchema.safeParse(Object.assign(Object.assign({}, req.body), { class_id: id }));
    try {
        if (!validation.success)
            return (0, ValidationError_1.ValidationError)(validation, res);
        const data = yield AwardModel_1.default.create({
            user_id: 1,
            class_id: id,
            award,
            level,
            image: (_a = req.file) === null || _a === void 0 ? void 0 : _a.filename,
        });
        (0, ResponseMessage_1.ResponseMessage)(res, 200, data);
    }
    catch (error) {
        (0, ErrorMessage_1.ErrorMessage)(res, error, 400);
    }
});
exports.createAward = createAward;
// get all Award
const getAllAward = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield AwardModel_1.default.findAll();
        (0, ResponseMessage_1.ResponseMessage)(res, 200, data);
    }
    catch (error) {
        (0, ErrorMessage_1.ErrorMessage)(res, error, 400);
    }
});
exports.getAllAward = getAllAward;
// get single Award
const getSingleAward = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield AwardModel_1.default.findByPk(req.params.id);
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
exports.getSingleAward = getSingleAward;
// update Award
const updateAward = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    const { award, level, class_id } = req.body;
    let id = Number(class_id);
    const validation = awardSchema_1.awardSchema.safeParse(Object.assign(Object.assign({}, req.body), { class_id: id }));
    try {
        if (!validation.success)
            return (0, ValidationError_1.ValidationError)(validation, res);
        const data = yield AwardModel_1.default.findByPk(req.params.id);
        if (!data)
            return (0, ErrorMessage_1.ErrorMessage)(res, "no data found with id " + req.params.id, 400);
        else {
            const updateData = yield AwardModel_1.default.update({
                user_id: 1,
                class_id: id,
                award,
                level,
                image: (_b = req.file) === null || _b === void 0 ? void 0 : _b.filename,
            }, { where: { id: req.params.id } });
            (0, ResponseMessage_1.ResponseMessage)(res, 200, undefined, "data updated");
        }
    }
    catch (error) {
        (0, ErrorMessage_1.ErrorMessage)(res, error, 400);
    }
});
exports.updateAward = updateAward;
// delete Award
const deleteAward = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield AwardModel_1.default.findByPk(req.params.id);
        if (!data)
            return (0, ErrorMessage_1.ErrorMessage)(res, "no data found with id " + req.params.id, 400);
        else {
            const deleteData = yield AwardModel_1.default.destroy({
                where: { id: req.params.id },
            });
            (0, ResponseMessage_1.ResponseMessage)(res, 200, undefined, "data deleted");
        }
    }
    catch (error) {
        (0, ErrorMessage_1.ErrorMessage)(res, error, 400);
    }
});
exports.deleteAward = deleteAward;
