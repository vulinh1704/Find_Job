"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cvRouter = void 0;
const express_1 = require("express");
const cvController_1 = __importDefault(require("../controller/cvController"));
exports.cvRouter = (0, express_1.Router)();
exports.cvRouter.get('/user/:id', cvController_1.default.showAll);
//# sourceMappingURL=cvRouter.js.map