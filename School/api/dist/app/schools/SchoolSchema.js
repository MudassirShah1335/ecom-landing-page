"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateSchoolSchema = exports.createSChoolSchema = void 0;
const zod_1 = require("zod");
// creating a new School
exports.createSChoolSchema = zod_1.z.object({
    name: zod_1.z.string(),
    address: zod_1.z.string(),
    email: zod_1.z.string().email(),
    password: zod_1.z.string(),
});
exports.updateSchoolSchema = zod_1.z.object({
    name: zod_1.z.string(),
    address: zod_1.z.string(),
});
