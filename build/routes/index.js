"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const session_1 = __importDefault(require("./session"));
const users_1 = __importDefault(require("./users"));
const task_1 = __importDefault(require("./task"));
const statistics_1 = __importDefault(require("./statistics"));
const file_1 = __importDefault(require("./file"));
const auth_1 = require("@validations/auth");
const router = express_1.Router();
router.use('/session', session_1.default);
router.use('/users', users_1.default);
router.use('/task', auth_1.isAuth, task_1.default);
router.use('/statistics', auth_1.isAuth, statistics_1.default);
router.use('/file', auth_1.isAuth, file_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map