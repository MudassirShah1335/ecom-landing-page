"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpUrl = void 0;
const axios_1 = __importDefault(require("axios"));
exports.HttpUrl = axios_1.default.create({
    baseURL: "http://localhost:3009/api/v1/b2b",
    headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
    },
    withCredentials: true,
});
