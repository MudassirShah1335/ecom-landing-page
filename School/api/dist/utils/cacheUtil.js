"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCache = exports.storeCache = void 0;
const node_cache_1 = __importDefault(require("node-cache"));
const cache = new node_cache_1.default();
function storeCache(key, value, time = 60 * 10) {
    cache.set(key, value, time);
    return;
}
exports.storeCache = storeCache;
function getCache(key) {
    const data = cache.get(key);
    return data;
}
exports.getCache = getCache;
