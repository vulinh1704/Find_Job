"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const company_router_1 = require("./company-router");
const cvRouter_1 = require("./cvRouter");
exports.router = (0, express_1.Router)();
exports.router.use('/companies', company_router_1.companyRouter);
exports.router.use('/cv', cvRouter_1.cvRouter);
//# sourceMappingURL=router.js.map