"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.companyRouter = void 0;
const express_1 = require("express");
const company_controller_1 = __importDefault(require("../controller/company-controller"));
exports.companyRouter = (0, express_1.Router)();
exports.companyRouter.get('', company_controller_1.default.getAll);
//# sourceMappingURL=company-router.js.map