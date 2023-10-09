"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserSchema = void 0;
const zod_1 = require("zod");
// creating a new School
exports.createUserSchema = zod_1.z.object({
    // school_id: z.number(),
    // teacher_id: z.number(),
    // role_id: z.number(),
    name: zod_1.z.string(),
    mobile_no: zod_1.z.string(),
    email: zod_1.z.string().email(),
    academic_year: zod_1.z.date(),
    password: zod_1.z.string(),
});
